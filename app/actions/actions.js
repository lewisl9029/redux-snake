import { fromJS, Range, OrderedMap } from 'immutable';

let getNewCoordinates = existingCoordinates => {
  // min inclusive, max exclusive
  let getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  
  let newCoordinates = fromJS({
    rowId: getRandomInt(0, 8),
    columnId: getRandomInt(0, 8)
  });
  
  if (!existingCoordinates.includes(newCoordinates)) {
    return newCoordinates;
  }
  
  return getNewCoordinates(existingCoordinates);
};

let getPlayerCoordinates = player => player.get('coordinates')
  .reverse()
  .take(player.get('length'))
  .valueSeq();
export { getPlayerCoordinates };

export const JOIN_GAME = 'JOIN_GAME';
export function joinGame(players, grid, block, timer) {
  let updatedTimer = timer.update('time', time => time + 1);
  let time = updatedTimer.get('time');
  
  let newPlayer = fromJS({ 
    id: players.size + 1,
    coordinates: OrderedMap([[
      time, getNewCoordinates(fromJS([]))
    ]]),
    length: 1,
    direction: null
  });
  
  let newPlayers = players.set(newPlayer.get('id'), newPlayer);
  
  let randomBlock = getNewCoordinates(getPlayerCoordinates(newPlayer));
  
  let newBlock = block.setIn(['coordinates', time], randomBlock);
  
  // TODO: game-over logic needs to be updated for multiplayer
  let filledGrid = fillGrid(newPlayers, updatedTimer, newBlock, grid);
  
  let newGrid = grid.set(time, filledGrid);
  
  return { 
    type: JOIN_GAME, 
    players: newPlayers,
    playerId: newPlayer.get('id'),
    block: newBlock,
    timer: updatedTimer,
    grid: newGrid
  };
}

export const START_GAME = 'START_GAME';
export function startGame(playerId, direction) {
  return { type: START_GAME, playerId, direction };
}

export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';
export function changeDirection(playerId, direction) {
  return { type: CHANGE_DIRECTION, playerId, direction };
}

let movePlayer = (player, timer) => {
  let time = timer.get('time');
  let previousCoordinates = player.getIn(['coordinates', time - 1]);
  
  switch (player.get('direction')) {
    case 'up': 
      return player.setIn(['coordinates', time], previousCoordinates
        .update('rowId', rowIndex => rowIndex - 1));
    case 'down': 
      return player.setIn(['coordinates', time], previousCoordinates
        .update('rowId', rowIndex => rowIndex + 1));
    case 'left': 
      return player.setIn(['coordinates', time], previousCoordinates
        .update('columnId', columnIndex => columnIndex - 1));
    case 'right': 
      return player.setIn(['coordinates', time], previousCoordinates
        .update('columnId', columnIndex => columnIndex + 1));
    default:
      return player;
  }
};

let fillGrid = (players, timer, block, grid) => {
  let time = timer.get('time');
  let newGridWithPlayers = players
    .reduce((newGridByPlayer, player) => getPlayerCoordinates(player)
      .reduce((newGridByBlock, coordinates, index) => newGridByBlock.setIn([
          coordinates.get('rowId'), 
          coordinates.get('columnId'),
          'content'
        ],
        fromJS({
          type: 'player',
          id: player.get('id'),
          isHead: index === 0 
        })
      ), newGridByPlayer), grid.get(-1)
    );
    
  let newGridWithBlock = newGridWithPlayers.setIn([
      block.getIn([
        'coordinates',
        time,
        'rowId'
      ]),
      block.getIn([
        'coordinates',
        time,
        'columnId'
      ]),
      'content'
    ],
    fromJS({
      type: 'block'
    })
  );
  
  return newGridWithBlock;
};

export const TIMER_START = 'TIMER_START';
export const TIMER_TICK = 'TIMER_TICK';
export const TIMER_STOP = 'TIMER_STOP';
export function startTimer() {
  return (dispatch, getState) => {
    const intervalId = setInterval(() => {
      let state = getState();
      let timer = state.get('timer');
      let grid = state.get('grid');
      let players = state.get('players');
      let block = state.get('block');
      
      if (timer.get('status') === 'running') {
        let updatedTimer = timer.update('time', time => time + 1);
        let time = updatedTimer.get('time');
        let movedPlayers = players.map(player => movePlayer(player, updatedTimer));
        // TODO: game-over logic needs to be updated for multiplayer
        let newBlock = block.setIn(['coordinates', time], block.getIn(['coordinates', time - 1]));
        let filledGrid = fillGrid(movedPlayers, updatedTimer, newBlock, grid);
        let newGrid = grid.set(time, filledGrid);
        return dispatch({ 
          type: TIMER_TICK,
          block: newBlock, 
          players: movedPlayers, 
          timer: updatedTimer, 
          grid: newGrid
        });
      }
      
      clearInterval(intervalId);
      dispatch({ type: TIMER_STOP });
    }, 1000);
    dispatch({ type: TIMER_START });
  };
}