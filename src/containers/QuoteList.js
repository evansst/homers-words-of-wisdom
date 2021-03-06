import React, { Component } from 'react';
import { parseJSON } from '../serviceWorker';
import QuoteCard from '../components/QuoteCard';

const baseURL = 'https://localhost:3000/quotes'

export default class QuoteList extends Component {
  state = {
    quotes: [],
  }

  componentDidMount() {
    fetch(baseURL)
      .then(parseJSON)
      .then(response => {
        this.setState({
          quotes: response,
        })
      });
  }



  render() {
    return (
      <div className="quote-list" >
        {this.state.quotes.map(quote => <QuoteCard key={quote.quote} quote={quote} />)}
      </div>
    )
  }
}