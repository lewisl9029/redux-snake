import { Map, fromJS } from 'immutable';

let initialState = fromJS({
  time: -1,
  status: 'stopped'
});

import { 
	JOIN_GAME,
  TIMER_START,
  TIMER_STOP,
  TIMER_TICK
} from '../actions/actions';

let time = (state = initialState, action) => {
	switch (action.type) {
    case JOIN_GAME:
      return action.timer;
    case TIMER_START:
      return state.set('status', 'running');
		case TIMER_STOP:
      return state.set('status', 'stopped');
    case TIMER_TICK:
      return action.timer;
    default:
			return state;
	}
};

export default time;