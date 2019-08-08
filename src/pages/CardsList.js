import React, {Component} from 'react';
import axios from 'axios';

class CardsList extends Component {

  componentDidMount() {
    axios.get('url')
      .then(() => {})
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