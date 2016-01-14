import { expect } from 'chai';
import { OrderedMap } from 'immutable';
import {
  getNewCoordinates,
  getPlayerCoordinates,
  movePlayer,
  isOutOfBounds,
  hasCollided,
  eatenBlock,
  fillGrid
} from './actions';

// describe('player coordinates', () => {
//   it('should be as long as player length', () => {
//     let fakePlayer = 
//     expect(getPlayerCoordinates())
//   });
// })