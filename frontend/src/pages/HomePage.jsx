import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadEvents } from '../store/actions/eventActions'
import { signup } from '../store/actions/userActions'
import { EventiPreview } from '../cmps/EventiPreview'
import { EventiUpComing } from '../cmps/EventiUpComing'
import { Footer } from '../cmps/Footer';
import { utils } from '../services/utils';

export class _HomePage extends Component {


  componentDidMount() {
    this.props.loadEvents();
    if (!this.props.loggedInUser ) {
    const signupCreds =
    {
      password: '123456',
      username: `Guest-${utils.makeId()}`,
      isGoing: false,
      isGuest: true
    };

    this.props.signup(signupCreds);
    }

  }

  getFilteredList = () => {
    const now = Date.now();
    const filteredList = this.props.events.filter(eventi => eventi.startsAt > now);
    return filteredList.sort((a, b) => {
      return a['startsAt'] > b['startsAt'] ? 1 : a['startsAt'] <  b['startsAt'] ? -1 : 0
  })
  }
  redirectClick = (tag) => {
    this.props.history.push(`/${tag}`)
  }

  render() {
    const filteredList = this.getFilteredList();
    return (
      <React.Fragment>
        <section className="main-content flex">
          <div className="screen">
          </div>
          <img className="main-img" src={require('../assets/img/main.jpg')} />

          <div className="header">
            <p><span>Even{`{t}`} Better </span>helps you socialize while social distancing</p>
            <div className="all-events span-all" onClick={(ev) => { this.redirectClick('All') }}>
              <span className="tag-all">All events</span>
            </div>
          </div>
        </section>

        {/* Lital,Events-grid should be in a component  + map */}
        <section className="events-grid margin container">

          <div className="event-card" onClick={(ev) => { this.redirectClick('Sport') }}>
            <span className="tag-sport">Sport</span>
            <img src={require('../assets/img/Sport.jpg')}></img>

          </div>
          <div className="event-card span" onClick={(ev) => { this.redirectClick('Movies') }}>
            <span className="tag-movies">Movies</span>
            <img src={require('../assets/img/Movies.jpg')} />

          </div>
          <div className="event-card" onClick={(ev) => { this.redirectClick('Books') }}>
            <span className="tag-books">Books</span>
            <img src={require('../assets/img/Books.jpg')} />

          </div>
          <div className="event-card span" onClick={(ev) => { this.redirectClick('Art') }}>
            <span className="tag-art">Art</span>
            <img src={require('../assets/img/Art.jpg')}></img>

          </div>
          <div className="event-card" onClick={(ev) => { this.redirectClick('TVShows') }}>
            <span className="tag-tvshows">TV Shows</span>
            <img src={require('../assets/img/TVShows.jpg')}></img>

          </div>
          <div className="event-card" onClick={(ev) => { this.redirectClick('Comics') }}>
            <span className="tag-comics">Comics</span>
            <img src={require('../assets/img/Comics.jpg')}></img>

          </div>
          <div className="event-card" onClick={(ev) => { this.redirectClick('All') }}>
            <span className="tag-comics">Recommendation</span>
            <img src={require('../assets/img/ev101.jpg')}></img>

          </div>
          <div className="event-card" onClick={(ev) => { this.redirectClick('All') }}>
            <span className="tag-comics">Recommendation</span>
            <img src={require('../assets/img/ev101.jpg')}></img>

          </div>
        </section>
        <div className="slide-title">Upcoming events</div>
        <div class="card-container">
            {
              filteredList.map(eventi => <div className="scroller"><EventiPreview eventi={eventi} loggedInUser={this.props.user} currTag={eventi.tags[0]} /></div>)
            }
          </div>

        {/* <section id="tickr-box">
          <div className="tickr-title flex justify-center align-center">Upcoming events</div>
          <div id="tickr-scroll">
            {
              filteredList.map(eventi => <ul><EventiUpComing eventi={eventi} key={eventi._id} currTag={eventi.tags[0]} /></ul>)
            }
          </div>
        </section> */}
        <Footer />
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
