import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import GameBoard from '../components/game-board';
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
      grid
    } = this.props;
    return (
      <div className="container" style={({
        marginTop: '3em',
      })}>
        <h1 style={({
          marginBottom: '1em',
          textAlign: 'center'
        })}>
          Snake Swarm
        </h1>
        <GameBoard
          grid={grid} 
        >
        </GameBoard>
      </div>
    );
  }
}

export default connect(state => ({ 
  grid: state.get('grid'),
  players: state.get('players')
}))(App);