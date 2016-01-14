import { Map, fromJS } from 'immutable';

import { 
	JOIN_GAME,
  START_GAME
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
      return state.set(action.player.get('id'), action.player);
    case START_GAME:
      return state.setIn([action.playerId, 'direction'], action.direction);
		default:
			return state;
	}
};

export default players;