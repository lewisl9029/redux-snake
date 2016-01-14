import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import GameBoard from '../components/game-board';
import Controls from '../components/controls';
// using stateless components isn't supported with hot reload yet
// let App = ({ 
// 	dispatch
// }) => (
// 	<div className="container" style={({
// 		marginTop: '1em'
// 	})}>
// 		<h1>Snake Swarm</h1>
    
// 	</div>
// );

class App extends Component {
  render() {
    const { 
      dispatch,
      players,
      playerId,
      time,
      grid
    } = this.props;
    return (
      <div className="container" style={({
        marginTop: '3em',
      })}>
        <h1 style={({
          textAlign: 'center'
        })}>
          Snake Swarm
        </h1>
        <Controls
          players={players} 
          playerId={playerId} 
          time={time} 
          joinGame={players => dispatch(actions.joinGame(players))}
          startGame={(playerId, direction) => dispatch(actions.startGame(playerId, direction))}
        >
        </Controls>
        <GameBoard
          grid={grid} 
          players={players} 
          playerId={playerId} 
          time={time} 
        >
        </GameBoard>
      </div>
    );
  }
}

export default connect(state => ({ 
  grid: state.get('grid'),
  players: state.get('players'),
  playerId: state.get('playerId'),
  time: state.get('time')
}))(App);