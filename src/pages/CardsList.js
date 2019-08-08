import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class CardsList extends Component {

  state = {
    cards: [],
  }

  componentDidMount() {
    axios.get('https://api.magicthegathering.io/v1/cards')
      .then((response) => {
        const cardsFromAPI = response.data.cards;
        this.setState({
          cards: cardsFromAPI,
        })
        
      })
      .catch((error) => {
        console.log(error);
        
      })
  }

  render() {
    return (
      <>
        <h2>CardsList Page</h2>
        <section className='container'>
          
          {this.state.cards.length > 0 ? this.state.cards.map((card) => {
            return (
              (card.imageUrl ? (
              <article key={card.id}>
                <Link to={`/cards/S{card.id}`}>
                  <img src={card.imageUrl} alt={card.name}/>
                </Link>
                <h3>{card.name}</h3>
                <p>{card.type}</p>
              </article>) : null)
            )
          }) : <p>Loading...</p>}
        </section>
      </>
    )
  }
}

export default CardsList;