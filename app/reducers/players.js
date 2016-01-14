import { Map, fromJS } from 'immutable';

import { 
	JOIN_GAME,
  START_GAME,
  TIMER_TICK,
  CHANGE_DIRECTION
} from '../actions/actions';

let initialState = Map({
  // '1': {
  //   id: '1',
  //   coordinates: null,
  //   direction: null
  // } 
});

let players = (state = initialState, action) => {
	switch (action.type) {
    case JOIN_GAME:
      return action.players;
    case START_GAME:
      return state.setIn([action.playerId, 'direction'], action.direction);
    case CHANGE_DIRECTION:
      return state.setIn([action.playerId, 'direction'], action.direction);
    case TIMER_TICK:
      return action.players;
		default:
			return state;
	}
};

export default players;