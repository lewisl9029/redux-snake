import { Map, fromJS } from 'immutable';

import { 
	JOIN_GAME,
  START_GAME,
  TIMER_TICK,
  TIMER_STOP,
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
      if (state.getIn([action.playerId, 'directionLocked'])) {
        return state;
      }
      
      return state
        .setIn([action.playerId, 'directionLocked'], true)
        .setIn([action.playerId, 'direction'], action.direction);   
    case TIMER_TICK:
      return action.players.map(player => player.set('directionLocked', false));
    case TIMER_STOP:
      return state.map(player => player.set('directionLocked', true));
		default:
			return state;
	}
};

export default players;
