import { Map } from 'immutable';

let initialState = Map({});

let players = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default players;