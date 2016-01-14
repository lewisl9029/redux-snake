import { combineReducers } from 'redux-immutablejs';
import { Map } from 'immutable';

import players from './players';
import grid from './grid';

export default combineReducers({
  players,
  grid,
});