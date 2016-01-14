import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

let App = ({ 
	dispatch
}) => (
	<div className="container" style={({
		marginTop: '1em'
	})}>
		<h1>Snake Swarm</h1>
    
	</div>
);

export default connect(state => ({ 
}))(App);