import { combineReducers } from 'redux-immutablejs';
import { Map } from 'immutable';

import players from './players';
import playerId from './player-id';
import timer from './timer';
import grid from './grid';
import block from './block';

export default combineReducers({
  playerId,
  players,
  grid,
  timer,
  block
});