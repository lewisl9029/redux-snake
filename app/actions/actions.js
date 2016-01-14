import { fromJS, Range } from 'immutable';

// min inclusive, max exclusive
let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const JOIN_GAME = 'JOIN_GAME';
export function joinGame(players) {
  let player = fromJS({ 
    id: players.size + 1,
    coordinates: {
      rowId: getRandomInt(0, 8),
      columnId: getRandomInt(0, 8)
    },
    direction: null
  });
  
  let blockCoordinates = Range(0, 10).map(number => (fromJS({
    rowId: getRandomInt(0, 8),
    columnId: getRandomInt(0, 8)
  })));
  
  return { type: JOIN_GAME, player, blockCoordinates };
}

export const START_GAME = 'START_GAME';
export function startGame(playerId, direction) {
  return { type: START_GAME, playerId, direction };
}