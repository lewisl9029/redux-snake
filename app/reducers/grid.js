import { Range, OrderedMap, fromJS } from 'immutable';

import { 
	JOIN_GAME,
  TIMER_TICK
} from '../actions/actions';

let initialState = OrderedMap([[
  -1, OrderedMap(
    Range(0, 50).map(rowId => [
      rowId,
      OrderedMap(
        Range(0, 50).map(columnId => [
          columnId,
          fromJS({ 
            coordinates: { rowId, columnId },
            content: null
          })
        ])
      )
    ])
  )
]]);

let grid = (state = initialState, action) => {
	switch (action.type) {
    case JOIN_GAME:
      return action.grid;
    case TIMER_TICK:
      return action.grid;
		default:
			return state;
	}
};

export default grid;