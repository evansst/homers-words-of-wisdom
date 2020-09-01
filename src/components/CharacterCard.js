import React from 'react';

export default function CharacterCard(props) {
  const { id, name, image } = props.character

  return (
    <div className="character-card">
      <a href={`/characters/${id}`}>
        <div>
          <img src={image} alt={name}/>
        </div>
        <div>
          <h2>{name}</h2>
        </div>
        </a>
      </div>

  );
}