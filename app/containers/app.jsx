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
// 		<h1>Redux Snake</h1>
    
// 	</div>
// );

class App extends Component {
  render() {
    const { 
      dispatch,
      players,
      playerId,
      timer,
      grid,
      block
    } = this.props;
    return (
      <div className="container" style={({
        marginTop: '3em',
      })}>
        <h1 style={({
          textAlign: 'center'
        })}>
          Redux Snake
        </h1>
        <Controls
          players={players} 
          playerId={playerId} 
          timer={timer}
          block={block}
          grid={grid} 
          joinGame={(players, grid, block, timer) => dispatch(actions.joinGame(players, grid, block, timer))}
          startTimer={() => dispatch(actions.startTimer())}
          startGame={(playerId, direction) => dispatch(actions.startGame(playerId, direction))}
          changeDirection={(playerId, direction) => dispatch(actions.changeDirection(playerId, direction))}
        >
        </Controls>
        <GameBoard
          grid={grid} 
          players={players} 
          playerId={playerId} 
          timer={timer} 
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
  timer: state.get('timer'),
  block: state.get('block')
}))(App);