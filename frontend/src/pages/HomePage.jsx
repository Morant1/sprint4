import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadEvents } from '../store/actions/eventActions'
import { signup } from '../store/actions/userActions'
import { EventiPreview } from '../cmps/EventiPreview'
import { utils } from '../services/utils';
import { EventsGrid } from '../cmps/EventsGrid';

export class _HomePage extends Component {


  componentDidMount() {
    this.props.loadEvents();
    if (!this.props.loggedInUser) {
      const signupCreds =
      {
        password: '123456',
        username: `Guest-${utils.makeId()}`,
        isGuest: true
      };

      this.props.signup(signupCreds);
    }

  }

  redirectClick = (tag) => {
    this.props.history.push(`/${tag}`)
}

  loadFilteredTags = () => {
    const currTag = this.props.match.params.tag;
    if (currTag === 'All') return this.props.events;
    const filteredTags = this.props.events.filter(eventi =>
      eventi.tags.includes(currTag));
    return filteredTags;
  }

  getFilteredList = () => {
    const now = Date.now();
    const filteredList = this.props.events.filter(eventi => eventi.startsAt > now);
    return filteredList.sort((a, b) => {
      return a['startsAt'] > b['startsAt'] ? 1 : a['startsAt'] < b['startsAt'] ? -1 : 0
    })
  }

  render() {
    const filteredList = this.getFilteredList();
    const filteredTags = this.loadFilteredTags();
    return (
      <React.Fragment>
        <section className="main-content flex">
          <div className="screen">
          </div>
          <img className="main-img" src={require('../assets/img/main6.jpg')} />
          <div className="hero-text">
            <p><span className="logo">Even{`{t}`} Better </span>finds you the best online events while social distancing</p>
            <div className="all-events span-all" onClick={(ev) => { this.redirectClick('All') }}>
              <span className="tag-all">All events</span>
            </div>
          </div>
        </section>
        {/* Lital,Events-grid should be in a component  + map */}
        <EventsGrid tags={filteredTags} currTag={this.props.match.params.tag} />
        <div className="slide-title">Upcoming events</div>
        <div className="card-container">
          {
            filteredList.map(eventi => <div className="scroller" key={eventi._id}><EventiPreview eventi={eventi} key={eventi._id}loggedInUser={this.props.user} currTag={eventi.tags[0]} /></div>)
          }
        </div>

      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
  return {
    events: state.eventReducer.events,
    loggedInUser: state.userReducer.loggedInUser
  };
};
const mapDispatchToProps = {
  loadEvents,
  signup
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)
