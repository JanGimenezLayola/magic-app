import React, {Component} from 'react';
import axios from 'axios';

class CardsList extends Component {

  state = {
    cards: [],
  }

  componentDidMount() {
    axios.get('https://api.magicthegathering.io/v1/cards')
      .then((response) => {
        console.log(response);
        
      })
      .catch((error) => {
        console.log(error);
        
      })
  }

  render() {
    return (
      <div>
        <h2>CardsList Page</h2>
      </div>
    )
  }
}

export default CardsList;