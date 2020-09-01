import React from 'react';

export default function QuoteCard(props) {
  const { quote, image, character } = props.quote;


  return (
    <div className="quote-card">
      <img src={image} alt={character}/>
      <h2>{character}</h2>
      <blockquote>{quote}</blockquote>
    </div>
  )
}