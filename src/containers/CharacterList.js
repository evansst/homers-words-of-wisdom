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
