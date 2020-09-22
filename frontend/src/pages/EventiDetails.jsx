import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Chat } from '../cmps/Chat'
import AccessTime from '@material-ui/icons/AccessTime'
import { Avatar,Button } from '@material-ui/core';

import { eventService } from '../services/eventService';
import { StarRate } from '../cmps/StarRate';





export class EventiDetails extends Component {
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
      })

  }

  onBack = () => {
    this.props.history.goBack();
  }
  openChat = () => {
    this.setState({isOpen:!this.state.isOpen})
  }
  addRank = () => {
    const {eventi,isRankPressed} = this.state;
    const isRankVal = !isRankPressed;
    this.setState({isRankPressed:isRankVal })
    const rank = isRankPressed ? eventi.rank + 1 : eventi.rank -1;
    
  }
  addParticipant = () => {
    this.setState({
      isGoing: !this.state.isGoing
    })

  }

  render() {
    const { eventi, isGoing } = this.state
    if (!eventi) return <div>Loading...</div>
    return (
      <section className="eventi-details margin"
        style={{ backgroundImage: `url(${require(`../assets/img/details-img.jpg`)})` }}>
          <div className="close" onClick={this.onBack}>X</div>
          <div className="btn-details flex justify-center">
          <Button className="join" onClick={this.addParticipant}>I am {isGoing ? 'going' : 'not going'}</Button>
          <Button><Link to={`/edit/${eventi._id}`}>Edit</Link></Button>
          <Button>Delete</Button>
          <Button onClick={this.addRank}><img className="star-icon" src={require('../assets/icons/rank.svg')}/></Button>
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
        </div>
        
      
          
        
        {/* <div className="eventi-subtitle flex"> */} 
    {/* <StarIcon /> */ }
    {/* <h5>{eventi.rank}(3147)</h5>
          <h5>| {eventi.location.city},{eventi.location.country}</h5>
          <h5>| Hosted By:{eventi.createdBy.fullName}</h5>
        </div>
        <div className="eventi-info">
          <h3><AccessTime />{eventi.duration} hours</h3>
          <h4>Join with your computer, phone or tablet</h4>
          <h4>Hosted in English</h4> */}
    {/* <h3>{eventi.participants}</h3> */ }
    {/* </div> */}
        <div className="eventi-participants flex justify-center align-center">
          <div className="title">Who is coming?</div>
          <div className="participant-container flex align-center">
            {
              eventi.participants.map(participant => {
                return <div className="list-item" key={participant._id} style={{color:'white'}}>
                  <Avatar>H</Avatar>
                  {participant.fullName}
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

// const mapStateToProps = state => {
//   return {
//     events: state.eventReducer.events
//   };
// };

// const mapDispatchToProps = {
//   loadEvents
// }

// export const EventiDetails = connect(mapStateToProps, mapDispatchToProps)(_EventiDetails)


