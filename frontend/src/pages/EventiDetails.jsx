import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


import { Avatar, Button } from '@material-ui/core';
import { StarRate } from '../cmps/StarRate';
import { Chat } from '../cmps/Chat'
import { eventService } from '../services/eventService';
import { updateEvent } from '../store/actions/eventActions'
import { updateUser } from '../store/actions/userActions'
import { BusService } from '../services/event-bus-service'
import { removeEventi } from '../store/actions/eventActions'


class _EventiDetails extends Component {
  state = {
    eventi: null,
    isGoing: false,
    isOpen: false,
    isRankPressed: false
  }
  componentDidMount() {
    this.loadEventi()
  }

  loadEventi = () => {
    const { _id } = this.props.match.params
    eventService.getById(_id)
      .then(eventi => {
        this.setState({ eventi })
        BusService.emit('notify', { msg: `You watched ${eventi.title} details` })
      })

  }

  onBack = () => {
    this.props.history.goBack();
  }
  openChat = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  addRank = () => {
    let { eventi, isRankPressed } = this.state;
    isRankPressed = !isRankPressed;
    const newRank = isRankPressed ? eventi.rank + 1 : eventi.rank - 1;
    eventi.rank = newRank;
    this.setState({ eventi, isRankPressed })
    this.props.updateEvent(eventi);
    BusService.emit('notify', { msg: `Rank of ${eventi.title} changed` })


  }
  addParticipant = () => {
    let user = this.props.loggedInUser;
    user.isGoing = !this.state.isGoing;
    this.props.updateUser(user)
    // this.props.toggleParticipation()
    this.setState({
      isGoing: !this.state.isGoing
    }, () => {

      let eventi = this.state.eventi;
      if (this.state.isGoing) {
        eventi.participants.push(user)
        BusService.emit('notify', { msg: `You are going to ${eventi.title} event` })
      } else {
        const idx = eventi.participants.findIndex(participant => participant === user);
        if (idx) eventi.participants.splice(idx, 1)
        BusService.emit('notify', { msg: `You are not going to ${eventi.title} event anymore` })
      }
      this.props.updateEvent(eventi)
      this.setState({ eventi })

    })
  }
  onFood = () => {
    this.setState({ isFood: !this.state.isFood })
  }
  getGoingStyle = () => {
    if (this.state.isGoing) {
      return { backgroundColor: '#A64AC9' }
    }
  }

  removeEvent = (eventId) => {
    this.props.removeEvent(eventId);
    this.props.history.push(`/${this.state.eventi.tags[0]}`);
  };

  render() {
    const { eventi, isGoing } = this.state
    if (!eventi) return <div>Loading...</div>
    console.log(eventi);
    return (

      <section className="eventi-details flex margin container">
        <div className="close" onClick={this.onBack}>Go Back →</div>
        <div className="details-photo-grid details-container flex justify-center">
          <div className="photo-item-1">
            <img src={require(`../assets/img/${eventi.tags[1]}/${eventi.tags[2]}-5.jpg`)} />
          </div>
          <div className="photo-item-2">
            <div className="photo-inline-grid">
              <div className="inner-photo-1">
                <img src={require(`../assets/img/${eventi.tags[1]}/${eventi.tags[2]}-1.jpg`)} />
              </div>

              <div className="inner-photo-2">
                <img src={require(`../assets/img/${eventi.tags[1]}/${eventi.tags[2]}-2.jpg`)} />
              </div>
              <div className="inner-photo-3">
                <img src={require(`../assets/img/${eventi.tags[1]}/${eventi.tags[2]}-3.jpg`)} />
              </div>
            </div>
          </div>
          <div className="photo-item-3">
            <img src={require(`../assets/img/${eventi.tags[1]}/${eventi.tags[2]}-4.jpg`)} />
          </div>
        </div>

      
        <div className="details-container flex">

          <div className="eventi-title flex justify-center">
            <h2>{eventi.title}</h2>
            <div className="eventi-subtitle flex">{eventi.subtitle}</div>
            {/* temporary stars design for now */}
            <div className="sub-text flex align-center">
              <div className="stars flex align-center">
                <div onClick={this.addRank} className="gray-star fas fa-star"></div>
                <StarRate rank={eventi.rank} />
              </div> • <div className="location fas fa-map-marker-alt "></div>  <span className="eventi-location">{eventi.location.city},{eventi.location.country}</span>
            </div>
            <div className="host-title flex">
              <span className="text"> This Event is hosted by:</span>
              <div className="avatar fas fa-user-circle">
                <span> {eventi.createdBy.username}</span>
              </div>

            </div>
            <div className="duration-area flex align-center">
              <div className="far fa-clock"></div>
              <span className="duration">{eventi.duration} hours</span>
            </div>

            <span><div className=" tablet fas fa-tablet-alt"></div> Join from your computer, phone, or tablet</span>
            <div>{new Date(eventi.startsAt).toDateString()}</div>
            <div>{new Date(eventi.startsAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            <p>{eventi.description}</p>
          </div>
          <div className="participant-container flex justify-center align-center">
            <div className="details-btn flex justify-center">
              <Button className="join" style={this.getGoingStyle()}
                onClick={this.addParticipant}>
                I might {isGoing ? 'attend' : 'not attend'}
              </Button>
              <Button><Link to={`/edit/${eventi._id}`}>Edit</Link></Button>
              <Button onClick={() => this.removeEventi(eventi._id)}>Delete</Button>
            </div>
            <div className="participant-title">Participants</div>
            <ul className="participant-list flex">
              {
                eventi.participants.map(participant => {
                  return <li key={participant._id} className="participant-item flex align-center">
                    <Avatar>{participant.username[0].toUpperCase()}</Avatar>
                    <span className="participant-name">{participant.username}</span>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
        <a className="flex justify-center" href='https://us02web.zoom.us'>COME IN</a>
        <div className="chat flex">
          {!this.state.isOpen && <div className="chat-btn" onClick={this.openChat}><i className="far fa-comment-dots"></i></div>}
        </div>
        {this.state.isOpen && <Chat eventi={eventi} user={this.props.loggedInUser} openChat={this.openChat} />}
      </section>

    )
  }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.userReducer.loggedInUser
  };
};

const mapDispatchToProps = {
  updateEvent,
  updateUser,
  removeEventi
}

export const EventiDetails = connect(mapStateToProps, mapDispatchToProps)(_EventiDetails)

//// in case site collapses you can use this for preview page + details
     ///        <div className="details-photo-grid details-container flex justify-center">
      //     <div className="photo-item-1">
      //     <img src={require(`../assets/img/${eventi.tags[1]}.jpg`)} />
      //   </div>
      //   <div className="photo-item-2">
      //     <div className="photo-inline-grid">
      //       <div className="inner-photo-1">
      //         <img src={require(`../assets/img/${eventi.tags[1]}2.jpg`)} />
      //       </div>

      //       <div className="inner-photo-2">
      //         <img src={require(`../assets/img/${eventi.tags[1]}3.jpg`)} />
      //       </div>
      //       <div className="inner-photo-3">
      //         <img src={require(`../assets/img/${eventi.tags[1]}4.jpg`)} />
      //       </div>
      //     </div>
      //   </div>
      //   <div className="photo-item-3">
      //     <img src={require(`../assets/img/${eventi.tags[1]}5.jpg`)} />
      //   </div>
      // </div>


