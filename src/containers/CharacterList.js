import React, { Component } from 'react';
import { parseJSON } from '../serviceWorker';
import CharacterCard from '../components/CharacterCard';



export default class CharacterList extends Component {
  state = {
    characters: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/characters')
      .then(parseJSON)
      .then(response => this.setState({
        characters: response,
      }))
  }
  render() {
    return (
      <div className="character-list">
        {this.state.characters.map(character => <CharacterCard key={character.id} character={character} />)}
      </div>
    );
  }
}


// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );