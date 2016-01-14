import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

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
    const { dispatch } = this.props;
    return (
      <div className="container" style={({
        marginTop: '1em'
      })}>
        <h1>Snake Swarm</h1>
        
      </div>
    );
  }
}

export default connect(state => ({ 
}))(App);