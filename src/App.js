import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import QuoteList from './containers/QuoteList';
import CharacterList from './containers/CharacterList';
import CharacterPage from './components/CharacterPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav-bar">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/characters">Characters</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/characters" render={routerProps => <CharacterList {...routerProps} />} />
          <Route path="/characters/:id" render={routerProps => <CharacterPage {...routerProps} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
