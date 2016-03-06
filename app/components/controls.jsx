import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

class Controls extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;
  
  componentWillMount() {
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
    document.addEventListener('keyup', event => {
      switch (event.code) {
        case 'ArrowUp':
          let upButton = document.getElementById('up');
          if (upButton && !upButton.disabled) {
            upButton.click();
          }
          return;
        case 'ArrowDown':
          let downButton = document.getElementById('down');
          if (downButton && !downButton.disabled) {
            downButton.click();
          }
          return;
        case 'ArrowLeft':
          let leftButton = document.getElementById('left');
          if (leftButton && !leftButton.disabled) {
            leftButton.click();
          }
          return;
        case 'ArrowRight':
          let rightButton = document.getElementById('right');
          if (rightButton && !rightButton.disabled) {
            rightButton.click();
          }
          return;
        default:
          return;
      }
    });
  }

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
          <div className="offset-by-four four columns">
            <button 
              type="button" 
              id="up"
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
        </div>
        <div className="row">
          <div className="offset-by-two four columns">
            <button 
              type="button" 
              id="left"
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
          <div className="four columns">
            <button 
              type="button" 
              id="right"
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
        <div className="row">
          <div className="offset-by-four four columns">
            <button 
              type="button" 
              id="down"
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
        </div>
        </div>
      );
  }
}

export default Controls;
