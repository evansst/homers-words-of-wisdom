import React, { Component } from 'react';
import { parseJSON } from '../serviceWorker';

export default class CharacterPage extends Component {
  state = {
    character: {
      name: '',
      quotes: [],
      image: '',
    }
  }
  
  componentDidMount() {
    const { match } = this.props

    fetch(`http://localhost:3000/characters/${match.params.id}`)
      .then(parseJSON)
      .then(response => this.setState({
        character: response,
      }))
  }

  render() {
    const { character, character: { quotes } } = this.state

    return (
      <>
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name}></img>
        <ul className="character-quote-list">
          {quotes.map(quote => {
            return (
              <li className="character-quote">
                <blockquote>{quote.quote}</blockquote>
                <button>Favorite</button>
              </li>
            )
          })}
        </ul>

      </>
    )
  }
}