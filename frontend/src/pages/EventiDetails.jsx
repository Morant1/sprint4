import React, { Component } from 'react';
import { eventService } from '../services/eventService';
import { Link } from 'react-router-dom'

// import { loadEvents } from '../store/actions/eventActions';
// import { connect } from 'react-redux';
//Redirect to Edit event
// Map // Review // Attanding //Chat

export class EventiDetails extends Component {
  state = {
    eventi: null
  }
  componentDidMount() {
    this.loadEventi()
  }

  loadEventi = () => {
    const { _id } = this.props.match.params
    console.log(_id);
    eventService.getById(_id)
      .then(eventi => {
        this.setState({ eventi }, () => console.log(eventi))
      })

  }

  render() {
    const { eventi } = this.state
    if (!eventi) return <div>Loading...</div>
    return (
      <section className="card-details">
        <div className="eventi-photo-grid">
          <img src={require('../assets/img/game-1.jpg')} alt="event-1" />
          <img src={require('../assets/img/game-2.jpg')} alt="event-2" />
          <img src={require('../assets/img/game-3.jpg')} alt="event-3" />
        </div>
        <Link to={`/event/edit/${eventi._id}`}>Edit Event</Link>
        <div className="eventi-title">
          <h2>{eventi.title}</h2>
          {/* <h5>{eventi.rate}</h5>
          <h5>{eventi.location}</h5>
          <h5>{eventi.creator}</h5> */}
        </div>
       <h3>What it's all About:</h3>
        <p>{eventi.description}</p>
        <div className="eventi-info">
        <h3>{eventi.duration} hours</h3>
          <h4>Join with your computer, phone or tablet</h4>
          <h4>Hosted in English</h4>
          {/* <h3>{eventi.participants}</h3> */}
   
        </div>
      </section >





 

      


    )
  }
}

// const mapStateToProps = state => {
//   return {
//     events: state.eventReducer.events
//   };
// };

// const mapDispatchToProps = {
//   loadEvents
// }

// export const EventiDetails = connect(mapStateToProps, mapDispatchToProps)(_EventiDetails)


