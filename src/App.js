import React, {Component} from 'react';
import Card from './Card';
import './App.css';
import axios from 'axios'

// * Documentation on pokemon card api: https://docs.pokemontcg.io/
// * Request url for all cards: https://api.pokemontcg.io/v1/cards


class App extends Component {
  constructor(){
    super();
    this.state = {
      cards: []
    }
  }

  componentDidMount(){
    this.getCards();
  }

  getCards = () => {
    axios.get('https://api.pokemontcg.io/v1/cards')
    .then(res => {
      console.log("RESPONSE: ", res.data.cards);
      this.setState({
        cards: res.data.cards
      })
    }).catch(err => console.log(err))
  }

  render(){
    const mappedCards = this.state.cards.map( card => {
      return <Card key={card.id} name={card.name} imageUrl={card.imageUrl}/>
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
