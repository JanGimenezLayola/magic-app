import React, {Component} from 'react'
import axios from "axios";

class CardsDetails extends Component {

  state = {
    card: null,
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`https://api.magicthegathering.io/v1/cards/${id}`)
    .then((response) => {
      this.setState({
        card: response.data.card,
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    const { card } = this.state;
    return (
      <div className='image-container'>
        {card ? <img className='image-details' src={card.imageUrl} alt={card.name}/> : <p>Loading...</p>}
      </div>
    )
  }    
}


export default CardsDetails;