import React, { Component } from 'react';
import { connect } from 'react-redux';
import { eventService } from '../services/eventService';
import { loadEvents } from '../store/actions/eventActions';


//Redirect to Edit event
// Map // Review // Attanding //Chat

export class _EventiDetails extends Component {
  state = {
    eventi: null
  }
  componentDidMount() {
    this.loadEventi()
  }
  
  loadEventi = () => {
    const { eventiId } = this.props.match.params
    eventService.getById(eventiId)
      .then(eventi => {
        this.setState({ ...eventi })
    })

  }

  render() {
    const { eventi } = this.state
    if (!eventi) return <div>Loading...</div>
    return (
      <section className="card-details">
        <div className="eventi-photo-grid">
          <img src={eventi.imgUrls} />
          <img src={eventi.imgUrls} />
          <img src={eventi.imgUrls} />
        </div>
        <div className="eventi-title">
          <h2>{eventi.title}</h2>
          {/* <h5>{eventi.rate}</h5> */}
          {/* <h5>{eventi.location}</h5> */}
          <h5>{eventi.creator}</h5>
        </div>
        <div className="eventi-info">
          <h3>{eventi.duration}</h3>
          <h3>{eventi.participants}</h3>
          {/* <icon/> */}
          <h4>Join with your computer, phone or tablet</h4>
          <h4>Hosted in English</h4>
        </div>
        <h3>What it's all About:</h3>
        <p>{eventi.description}</p>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.eventReducer.events
  };
};

const mapDispatchToProps = {
  loadEvents
};

export const EventiDetails = connect(mapStateToProps, mapDispatchToProps)(_EventiDetails)


