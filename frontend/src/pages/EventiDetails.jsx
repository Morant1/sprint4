import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


import { Avatar,Button } from '@material-ui/core';
import { StarRate } from '../cmps/StarRate';
import { Chat } from '../cmps/Chat'
import { eventService } from '../services/eventService';
import {updateEvent} from '../store/actions/eventActions'
import {updateUser} from '../store/actions/userActions'
import {BusService} from '../services/event-bus-service'
import {removeEvent} from '../store/actions/eventActions'


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
        BusService.emit('notify', { msg: `You watched ${eventi.title} event details`})
      })

  }

  onBack = () => {
    this.props.history.goBack();
  }
  openChat = () => {
    this.setState({isOpen:!this.state.isOpen})
  }
  addRank = () => {
    let {eventi,isRankPressed} = this.state;
    isRankPressed = !isRankPressed;
    const newRank = isRankPressed ? eventi.rank + 1 : eventi.rank -1;
    eventi.rank = newRank;
    this.setState({eventi, isRankPressed })
    this.props.updateEvent(eventi);
    BusService.emit('notify', { msg: `Rank of ${eventi.title} changed`})

    
  }
   addParticipant = () => {
    let user = this.props.loggedInUser;
    user.isGoing = !this.state.isGoing;
    this.props.updateUser(user)
    // this.props.toggleParticipation()
    this.setState({
      isGoing: !this.state.isGoing
    },()=>{

      let eventi = this.state.eventi;
      if (this.state.isGoing) {
        eventi.participants.push(user)
        console.log("push",eventi.participants)
        BusService.emit('notify', { msg: `You are going to ${eventi.title} event`})
      } else {
        const idx = eventi.participants.findIndex(participant=> participant===user);
        if (idx) eventi.participants.splice(idx,1)
        BusService.emit('notify', { msg: `You are not going to ${eventi.title} event anymore`})
        console.log("remove",eventi.participants)
      }
      console.log(eventi)
      this.props.updateEvent(eventi)
      this.setState({eventi})

    })
  }

  getRankStyle = () => {
    if (this.state.isRankPressed) {
    return {backgroundColor: '#A64AC9'}
    }
  }
  onFood = () => {
    this.setState({isFood:!this.state.isFood})
  }
  getGoingStyle = () => {
    if (this.state.isGoing) {
    return {backgroundColor: '#A64AC9'}
    }
  }

  removeEvent = (eventId) => {
    this.props.removeEvent(eventId);
    this.props.history.push(`/${this.state.eventi.tags[0]}`);
  };

  render() {
    const { eventi, isGoing } = this.state
    if (!eventi) return <div>Loading...</div>
    return (

      <section className="eventi-details margin"
        style={{ backgroundImage: `url(${require(`../assets/img/details-img.jpg`)})` }}>
          <div className="close" onClick={this.onBack}>X</div>
          <div className="btn-details flex justify-center">
          <Button className="join" style={this.getGoingStyle()} 
          onClick={this.addParticipant}>
          I am {isGoing ? 'going' : 'not going'}
          </Button>
          <Button><Link to={`/edit/${eventi._id}`}>Edit</Link></Button>
          <Button onClick={()=>this.removeEvent(eventi._id)}>Delete</Button>
          <Button onClick={this.addRank} style={this.getRankStyle()}>
            <img className="star-icon" src={require('../assets/icons/rank.svg')}/>
            </Button>
          </div>
        <div className="eventi-photo flex justify-center">
          <div className="details-img"
            style={{ backgroundImage: `url(${require(`../assets/img/${eventi.tags[0]}.jpg`)})` }}>
          </div>
          <div className="details-img"
            style={{ backgroundImage: `url(${require(`../assets/img/${eventi.tags[0]}2.jpg`)})` }}>
          </div>
          <div className="details-img"
            style={{ backgroundImage: `url(${require(`../assets/img/${eventi.tags[0]}3.jpg`)})` }}>
          </div>
        </div>

        <StarRate rank={eventi.rank}/>

        <div className="eventi-title flex justify-center align-center">
          <h2>{eventi.title}</h2>
          <p>{eventi.description}</p>
        <div className="eventi-subtitle flex"> 
          <h5><img className="location-icon icon" src={require('../assets/icons/pin-outline.svg')}/>{eventi.location.city},{eventi.location.country}</h5>
          <h5><img className="host-icon icon" src={require('../assets/icons/person-circle-outline.svg')}/>{eventi.createdBy.fullName}</h5>
        </div>
          {/* <h3><img className="clock-icon icon" src={require('../assets/icons/time-outline.svg')}/>{eventi.duration} hours</h3>  */}
     </div>
     <div className="food flex justify-center align-center">
       {isGoing ? <div className="details-icons flex justify-center align-center">
         <div className="title">What are you bringing to the game?</div>
       <img className="icon-1"  onClick={this.onFood} src={require('../assets/icons/pizza.svg')}/>
       <img className="icon-2"  onClick={this.onFood} src={require('../assets/icons/ice-cream.svg')}/>
       <img className="icon-3"  onClick={this.onFood} src={require('../assets/icons/beer.svg')}/>
       </div> : null}
     </div>
        <div className="eventi-participants flex justify-center align-center">
          <div className="title">Who is coming?</div>
          <div className="participant-container flex align-center">
            {
              eventi.participants.map(participant => {
                return <div className="list-item" key={participant._id} style={{color:'white'}}>
                  <Avatar>{participant.username[0].toUpperCase()}</Avatar>
                  {participant.username}
                </div>
              })
            }
          </div>  

    </div> 
    <div className="chat-box flex justify-center">
    <Button className="chat-btn" onClick={this.openChat}>{this.state.isOpen? 'Close ': 'Open '}chat</Button>
    </div>
    {this.state.isOpen && <Chat eventi={eventi} />}
      </section >

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
  removeEvent
}

export const EventiDetails = connect(mapStateToProps, mapDispatchToProps)(_EventiDetails)


