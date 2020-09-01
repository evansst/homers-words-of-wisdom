import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterCard(props) {
  const { id, name, image } = props.character

  return (
    <div className="character-card">
      <Link key={id} to={`/characters/${id}`}>
        <div>
          <img src={image} alt={name}/>
        </div>
        <div>
          <h2>{name}</h2>
        </div>
      </Link>
    </div>

  );
}