import React from 'react';
import Character from './Character';

 const CharacterList = (props) => {
     return (
         <div className="character-container">
            {props.characters.map(item => (
                    <Character starwarsCharacter={item} key={item.created} />
                ))}
        </div>
     )
 }

 export default CharacterList;