let initialState = -1;

import { 
	JOIN_GAME
} from '../actions/actions';

let time = (state = initialState, action) => {
	switch (action.type) {
    case JOIN_GAME:
      return 0;
		default:
			return state;
	}
};

export default time;