import React, { Component } from 'react';
import { connect } from "react-redux";
import routes from "../routes";
import { renderRoutes } from "react-router-config";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ""
		}
	}
	render() {
		return (
			<div>
				{renderRoutes(routes)}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		data: state
	};
};

export default connect(mapStateToProps)(App);