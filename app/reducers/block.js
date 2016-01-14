import { OrderedMap, fromJS } from 'immutable';

import { 
	JOIN_GAME,
  TIMER_TICK
} from '../actions/actions';

let initialState = OrderedMap({
  // '0': {
  //   coordinates: null
  // }
});

let block = (state = initialState, action) => {
	switch (action.type) {
    case JOIN_GAME:
      return action.block;
    case TIMER_TICK:
      return action.block;
		default:
			return state;
	}
};

export default block;