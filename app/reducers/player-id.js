import { 
	JOIN_GAME
} from '../actions/actions';

let initialState = null;

let playerId = (state = initialState, action) => {
	switch (action.type) {
    case JOIN_GAME: 
      return action.player.get('id');
		default:
			return state;
	}
};

export default playerId;