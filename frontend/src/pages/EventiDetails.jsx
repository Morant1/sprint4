import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Chat} from '../cmps/Chat'
import AccessTime from '@material-ui/icons/AccessTime'
import StarIcon from '@material-ui/icons/Star'

// import { connect } from 'react-redux';

import { eventService } from '../services/eventService';
import { Avatar } from '@material-ui/core';
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
          <h5>| {eventi.location.city},{eventi.location.country}</h5>
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
          <ul className="participant-container">
            {
              eventi.participants.map(participant => {
                return <li className="list-item flex align-center" key={participant._id}>
                  <Avatar>H</Avatar>
                  {participant.fullName}
                </li>
              })
            }
          </ul>

        </div>
            <Chat eventi={eventi}/>
        {/* <div className="eventi-comments">
          <h3>Comment and Reviews</h3>
          <ul className="comment-container">
            {
              eventi.comments.map(comment => {
                return <li className= "list-item flex column" key={comment._id}>
                  <div className="author-details flex align-center">
                 <Avatar>H</Avatar>
                  <span className="author">{comment.author.fullName}</span>
                  </div>
                  <div class="comment-section">
                  {comment.txt}
                  </div>
                  
                </li>
              })
            }
          </ul>

        </div> */}
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


