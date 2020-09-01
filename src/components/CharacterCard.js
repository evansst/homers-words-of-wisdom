import React from 'react';

export default function CharacterCard(props) {
  const { name, image } = props.character

  return (
    <div className="character-card">
      <div>
        <img src={image} alt={name}/>
      </div>
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
}