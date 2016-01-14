import { combineReducers } from 'redux-immutablejs';
import { Map } from 'immutable';

import players from './players';
import playerId from './player-id';
import time from './time';
import grid from './grid';

export default combineReducers({
  playerId,
  players,
  grid,
  time
});