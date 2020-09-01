import React from 'react';
import './App.css';
import QuoteList from './containers/QuoteList';
import CharacterList from './containers/CharacterList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
              <Link to="/quotes">Quotes</Link>
            </li>
            <li className="nav-link">
              <Link to="/characters">Characters</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/characters">
            <CharacterList />
          </Route>
          <Route path="/quotes">
            <QuoteList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
