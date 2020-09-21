import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AccessTime from '@material-ui/icons/AccessTime'
import StarIcon from '@material-ui/icons/Star'
// import { connect } from 'react-redux';

import { eventService } from '../services/eventService';
// import { loadEvents } from '../store/actions/eventActions';
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
    console.log("id",_id)
    eventService.getById(_id)
      .then(eventi => {
        this.setState({ eventi })
      })

  }

  render() {
    const { eventi } = this.state
    const { events } = this.props
    if (!eventi) return <div>Loading...</div>
    return (
      <section className="eventi-details">
        <div className="eventi-photo-grid">
          <img src={require('../assets/img/game-1.jpg')} alt="event-1" />
          <img src={require('../assets/img/game-2.jpg')} alt="event-2" />
          <img src={require('../assets/img/game-3.jpg')} alt="event-3" />
        </div>
        <div className="eventi-title flex">
          <h2>{eventi.title}</h2>
          <Link to={`/event/edit/${eventi._id}`}>Edit Event</Link>
        </div>
        <div className="eventi-subtitle flex">
          <StarIcon />
          <h5>{eventi.rank}(3147)</h5>
          <h5>| Paris, France</h5>
          <h5>| Hosted By:{eventi.createdBy.fullName}</h5>
        </div>
        <div className="eventi-info">
          <h3><AccessTime />{eventi.duration} hours</h3>
          <h4>Join with your computer, phone or tablet</h4>
          <h4>Hosted in English</h4>
          {/* <h3>{eventi.participants}</h3> */}
        </div>
        <div className="eventi-description">
          <h3>What it's all About:</h3>
          <p>{eventi.description}</p>
        </div>
        <div className="eventi-participants">
          <h3>Who's coming?</h3>
          <div>
            {
              eventi.participants.map(participant => {
                return <div key={participant._id}>
                  {participant.fullName}
                </div>
              })
            }
          </div>

        </div>

        <div className="eventi-comments">
          <h3>Comment and Reviews</h3>
          <div>
            {
              eventi.comments.map(comment => {
                return <div key={comment._id}>
                  {comment.txt}
                </div>
              })
            }
          </div>

        </div>
      </section>










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


