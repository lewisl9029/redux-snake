import { Range, OrderedMap, fromJS } from 'immutable';

import { 
	JOIN_GAME
} from '../actions/actions';

let initialState = OrderedMap(
  Range(0, 8).map(rowId => [
    rowId,
    OrderedMap(
      Range(0, 8).map(columnId => [
        columnId,
        fromJS({ 
          coordinates: { rowId, columnId },
          content: null
        })
      ])
    )
  ])
);

let grid = (state = initialState, action) => {
	switch (action.type) {
    case JOIN_GAME:
      let gridWithBlocks = action.blockCoordinates
        .reduce((newGrid, blockCoordinate) => newGrid.setIn([
            blockCoordinate.get('rowId'), 
            blockCoordinate.get('columnId'),
            'content'
          ], 
          fromJS({ 
            type: 'block',
            symbol: 'x'
          })), 
          state
        );
      
      let gridWithPlayer = gridWithBlocks.setIn([
          action.player.getIn(['coordinates', 'rowId']), 
          action.player.getIn(['coordinates', 'columnId']),
          'content'
        ], 
        fromJS({
          type: 'player',
          id: action.player.get('id'),
          symbol: 'o'
        })
      );
      
      return gridWithPlayer;
		default:
			return state;
	}
};

export default grid;