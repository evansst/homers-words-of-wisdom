import React, { Component } from 'react';

export default class Login extends Component {
  state = {

  }


  render() {
    return (
      <div className="Login">
        <form onSubmit={this.props.handleLogin}>
          <input type="text" ></input>
        </form>
      </div>
    )
  }
}