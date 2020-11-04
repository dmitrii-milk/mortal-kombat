
import React from 'react';
import '../index.css';


export default ({char, selectCharacter}) => {
    return (
        <div style={{width: "100px"}}>
           <img 
           className = {char.id === selectCharacter.id ? 'active': ''}
           src={char.icon}  
           alt={char.name}/>
        </div>
    )
}