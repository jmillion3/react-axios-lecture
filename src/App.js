import React, {Component} from 'react';
import Card from './Card';
import './App.css';

// * Documentation on pokemon card api: https://docs.pokemontcg.io/
// * Request url for all cards: https://api.pokemontcg.io/v1/cards


class App extends Component {
  constructor(){
    this.state = {
      cards: []
    }
  }

  render(){
    const mappedCards = this.state.cards.map( card => {
      return <Card/>
    })
  return (
    <div className="App">
      <h1>My Cool Card Collection: </h1>
      {mappedCards}
    </div>
    )
  }
}

export default App;
