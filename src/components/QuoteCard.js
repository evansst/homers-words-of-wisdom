import React from 'react';

export default function QuoteCard(props) {
  const { quote, image, character } = props.quote;

  return (
    <div className="quote-card">
      <div>
        <img src={image} alt={character}/>
      </div>
      <div>
        <h2>{character}</h2>
        <blockquote>{quote}</blockquote>
      </div>
    </div>
  )
}