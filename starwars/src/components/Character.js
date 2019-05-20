import React from 'react';
import './Charater.css';

const Character = props => {

    return (
        <div className="character-item">
            <h2>{props.starwarsCharacter.name}</h2>
            <p>Gender: <span>{props.starwarsCharacter.gender}</span></p>
            <p>Height: <span>{props.starwarsCharacter.height}</span></p>
            <p>Birth Year: <span>{props.starwarsCharacter.birth_year}</span></p>
            <p>Mass: <span>{props.starwarsCharacter.mass}</span></p>
            <p>Skin Color: <span>{props.starwarsCharacter.skin_color}</span></p>
            <p>Hair Color: <span>{props.starwarsCharacter.hair_color}</span></p>
            <p>Eye Color: <span>{props.starwarsCharacter.eye_color}</span></p>
        </div>
    )
}

export default Character;