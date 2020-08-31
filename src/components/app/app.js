import React, {Component} from 'react';
import characterDB from '../../services/characterDB';
import ChooseHero from '../choose-hero';
import './style.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this._localhost = 'http://localhost:3000/characters';
        this.state = {
            Data: [],
            selectCharacter:[]
        }
    }

    characterDB = new characterDB();

    componentDidMount() {
        this.characterDB.getCharacter(this._localhost)
                    .then(res => {
                        this.setState({Data: res})
                    })        
    }

    render() {
        const {Data} = this.state;
        return(
            <>
            <header className='header'>
                <h1>Mortal Kombat</h1>
                <h2>choose your fighter</h2>
            </header>
            <main>
                <ChooseHero 
                list={Data}
               />
            </main> 
            </>
        )
    }
}