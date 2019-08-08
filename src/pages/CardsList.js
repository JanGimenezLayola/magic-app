import React, {Component} from 'react';
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
      <section className='container'>
        <h2>CardsList Page</h2>
        {this.state.cards.map((card) => {
          return (
            <article key={card.id}>
              <img src={card.imageUrl} alt={card.name}/>
              <h3>{card.name}</h3>
              <p>{card.type}</p>
            </article>
          )
        })}
      </section>
    )
  }
}

export default CardsList;