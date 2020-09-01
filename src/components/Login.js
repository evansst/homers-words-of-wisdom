import React, { Component } from 'react';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  }


  render() {
    return (
      <div className="Login">
        <form onSubmit={this.props.handleLogin} formData={this.state}>
          <input type="text" name="email" value={this.state.email} />
          <input type="text" name="password" value={this.state.password} />
        </form>
      </div>
    )
  }

  handleEmailChange = (event) => {

  }
  
  handleEmailChange = (event) => {

  }
}