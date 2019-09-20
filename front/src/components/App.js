import React, { Component } from 'react';
import { connect } from "react-redux";
import { action_creator } from "./actions/fetchTeam";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "blah"
    }
  }
  render () {
    return(
      <div></div>
    )
  }
}

const mapStateToProps = state => {
	return {
		data: state
	};
};

export default connect(mapStateToProps)(App);