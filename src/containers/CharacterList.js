import React, { Component } from 'react';
import { parseJSON } from '../serviceWorker';



export default class CharacterList extends Component {
  state = {
    characters: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/characters')
      .then(parseJSON)
      .then(console.log)
  }
  render() {
    return null;
  }
}