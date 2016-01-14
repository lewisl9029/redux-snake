import React, { Component } from 'react';

class Controls extends Component {
  render() {
    let { time, players, playerId, joinGame, startGame } = this.props;
    
    return time === -1 ? 
      (
        <div className="row">
          <div className="offset-by-three six columns">
            <button 
              type="button" 
              className="u-full-width"
              onClick={() => joinGame(players)}
            >
              Join Game
            </button>
          </div>
        </div>
      ) :
      (
        <div className="row">
          <div className="three columns">
            <button type="button" className="u-full-width">Left</button>
          </div>
          <div className="three columns">
            <button type="button" className="u-full-width">Up</button>
          </div>
          <div className="three columns">
            <button type="button" className="u-full-width">Down</button>
          </div>
          <div className="three columns">
            <button type="button" className="u-full-width">Right</button>
          </div>
        </div>
      );
  }
}

export default Controls;