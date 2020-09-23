import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEventi, loadEvents } from '../store/actions/eventActions'
import { EventiUpComing } from '../cmps/EventiUpComing'

export class _HomePage extends Component {


  componentDidMount() {
    this.props.loadEvents();
  }

  getFilteredList = () => {
    const now = Date.now();
    const filteredList = this.props.events.filter(eventi => eventi.startsAt > now);
    return filteredList;

  }
  redirectClick = (tag) => {
    this.props.history.push(`/${tag}`)
  }

  render() {
    const filteredList = this.getFilteredList();
    return (
      <React.Fragment>
        <section className="main-content flex">
          <img src={require('../assets/img/main.jpg')} />
          <div className="header">
            <p><span>Even{`{t}`} Better </span>helps you socialize while social distancing</p>
          </div>

        </section>

      <section className="events-grid">
      <div className="event-card span-all" onClick={(ev) => { this.redirectClick('All') }}>
          <img src={require('../assets/img/Sport.jpg')}></img>
        <span className="tag-all">All events</span>
            </div>
        <div className="event-card" onClick={(ev) => { this.redirectClick('Sport') }}>
          <img src={require('../assets/img/Sport.jpg')}></img>
        <span className="tag-sport">Sport</span>
            </div>
        <div className="event-card span" onClick={(ev) => { this.redirectClick('Movies') }}>
        <img src={require('../assets/img/Movies.jpg')}></img>
          <span className="tag-movies">Movies</span>
        </div>
        <div className="event-card" onClick={(ev) => { this.redirectClick('Books') }}>
        <img src={require('../assets/img/Books.jpg')}></img>
          <span className="tag-books">Books</span>
          </div>
        <div className="event-card span" onClick={(ev) => { this.redirectClick('Art') }}>
        <img src={require('../assets/img/Art.jpg')}></img>
          <span className="tag-art">Art</span>
        </div>        
        <div className="event-card" onClick={(ev) => { this.redirectClick('TVShows') }}>
        <img src={require('../assets/img/TVShows.jpg')}></img>
          <span className="tag-tvshows">TV Shows</span>
        </div>
        <div className="event-card" onClick={(ev) => { this.redirectClick('Comics') }}>
        <img src={require('../assets/img/Comics.jpg')}></img>
          <span className="tag-comics">Comics</span>
        </div>
      </section>
      <section id="tickr-box">
          <div className="tickr-title flex justify-center align-center">Upcoming events</div>
          <div id="tickr-scroll">
            {
              filteredList.map(eventi => <ul><EventiUpComing eventi={eventi} key={eventi._id} currTag={eventi.tags[0]} /></ul>)
            }
          </div>
        </section>
      </React.Fragment>
    );
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

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)
