import React, { Component } from 'react';

class Controls extends Component {
  render() {
    let { 
      timer, 
      grid,
      block,
      players, 
      playerId, 
      joinGame, 
      startGame, 
      startTimer, 
      changeDirection 
    } = this.props;
    
    return timer.get('time') === -1 ? 
      (
        <div className="row">
          <div className="offset-by-three six columns">
            <button 
              type="button" 
              className="u-full-width"
              onClick={() => joinGame(players, grid, block, timer)}
            >
              Join Game
            </button>
          </div>
        </div>
      ) :
      (
        <div>
        <div className="row">
          <input type="text" onKeyUp={event => {
              switch (event.key) {
                case 'ArrowUp':
                  if (timer.get('time') === 0) {
                    startGame(playerId, 'up'); 
                    startTimer();
                    return;
                  }
                  return changeDirection(playerId, 'up');
                case 'ArrowDown':
                  if (timer.get('time') === 0) {
                    startGame(playerId, 'down'); 
                    startTimer();
                    return;
                  }
                  return changeDirection(playerId, 'down');
                case 'ArrowLeft':
                  if (timer.get('time') === 0) {
                    startGame(playerId, 'left'); 
                    startTimer();
                    return;
                  }
                  return changeDirection(playerId, 'left');
                case 'ArrowRight':
                  if (timer.get('time') === 0) {
                    startGame(playerId, 'right'); 
                    startTimer();
                    return;
                  }
                  return changeDirection(playerId, 'right');
                default:
                  return;
              }
            }} />
        </div>
        <div className="row">
          <div className="three columns">
            <button 
              type="button" 
              className={
                players.getIn([playerId, 'direction']) === 'left' ? 
                  'u-full-width button-primary' : 'u-full-width'
              }
              onClick={
                () => {
                  if (timer.get('time') === 0) {
                    startGame(playerId, 'left'); 
                    startTimer();
                    return;
                  }
                  changeDirection(playerId, 'left');
                }
              }
              disabled={
                players.getIn([playerId, 'direction']) === 'left' || 
                players.getIn([playerId, 'direction']) === 'right'
              }
            >
              Left
            </button>
          </div>
          <div className="three columns">
            <button 
              type="button" 
              className={
                players.getIn([playerId, 'direction']) === 'up' ? 
                  'u-full-width button-primary' : 'u-full-width'
              }
              onClick={
                () => {
                  if (timer.get('time') === 0) {
                    startGame(playerId, 'up'); 
                    startTimer();
                    return;
                  }
                  changeDirection(playerId, 'up');
                }
              }
              disabled={
                players.getIn([playerId, 'direction']) === 'up' || 
                players.getIn([playerId, 'direction']) === 'down'
              }
            >
              Up
            </button>
          </div>
          <div className="three columns">
            <button 
              type="button" 
              className={
                players.getIn([playerId, 'direction']) === 'down' ? 
                  'u-full-width button-primary' : 'u-full-width'
              }
              onClick={
                () => {
                  if (timer.get('time') === 0) {
                    startGame(playerId, 'down'); 
                    startTimer();
                    return;
                  }
                  changeDirection(playerId, 'down');
                }
              }
              disabled={
                players.getIn([playerId, 'direction']) === 'down' || 
                players.getIn([playerId, 'direction']) === 'up'
              }
            >
              Down
            </button>
          </div>
          <div className="three columns">
            <button 
              type="button" 
              className={
                players.getIn([playerId, 'direction']) === 'right' ? 
                  'u-full-width button-primary' : 'u-full-width'
              }
              onClick={
                () => {
                  if (timer.get('time') === 0) {
                    startGame(playerId, 'right'); 
                    startTimer();
                    return;
                  }
                  changeDirection(playerId, 'right');
                }
              }
              disabled={
                players.getIn([playerId, 'direction']) === 'right' || 
                players.getIn([playerId, 'direction']) === 'left'
              }
            >
              Right
            </button>
          </div>
        </div>
        
        </div>
      );
  }
}

export default Controls;