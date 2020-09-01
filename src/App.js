import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CharacterList from './containers/CharacterList';
import CharacterPage from './components/CharacterPage';
import Login from './components/Login';

class App extends Component {

  state = {
    user: {
      name: '',
      email: '',
      password: '',
    }
  }

  login = (formData) => {

  }


  render() {
    return (
      <Router>
        <div>
          <nav style={{width: '100%'}}>
            <ul className="nav-bar">
              <li className="nav-link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-link">
                <Link to="/characters">Characters</Link>
              </li>
              <li className="nav-link">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/characters" render={routerProps => <CharacterList {...routerProps} />} />
            <Route path="/characters/:id" render={routerProps => <CharacterPage {...routerProps} />} />
            <Route path="/login" render={routerProps => <Login {...routerProps} handleLogin={this.login}/>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
