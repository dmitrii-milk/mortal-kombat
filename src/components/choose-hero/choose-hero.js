import React from 'react';
import './style.css';

const ChooseHero = ({list}) => {
    

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 37) {
            e.preventDefault()
            console.log(e)
          } else if (e.keyCode === 39) {
            e.preventDefault()
            console.log(e)
          }
    });


   const elem =  list.map(item => {
        const {name, icon, id} = item;
        return (
            <li key={id}>
                <a href='#'>
                    <img src={icon} alt={name}/>
                </a>
            </li>
        )
    });

    return (
        <ul className='wrapper'>
            {elem}
        </ul>
    )
    
    

}

export default ChooseHero;
