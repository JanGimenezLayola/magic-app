import React, {Component} from 'react'
import magicService from '../services/magicService'

class CardsDetails extends Component {

  state = {
    card: null,
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    magicService.getOneCard(id)
    .then((response) => {
      this.setState({
        card: response.data.card,
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  goToPreviusPage = () => {
    this.props.history.goBack();
  }

  render() {
    const { card } = this.state;
    return (
      <>
        <button onClick={this.goToPreviusPage}>Go Back</button>
        <div className='image-container'>
          {card ? <img className='image-details' src={card.imageUrl} alt={card.name}/> : <p>Loading...</p>}
        </div>
      </>
    )
  }    
}


export default CardsDetails;