import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadEvents } from '../store/actions/eventActions'
import { EventiUpComing } from '../cmps/EventiUpComing'

export class _HomePage extends Component {


  componentDidMount() {
    this.props.loadEvents();
  }

  getFilteredList = () => {
    const now = Date.now();
    const filteredList = this.props.events.filter(eventi=> eventi.startsAt > now);
    return filteredList;

  }
  redirectClick = (tag) => {
    this.props.history.push(`/${tag}`)
  }

  render() {
    const filteredList = this.getFilteredList();
    return (
      <React.Fragment>
      <div id="tickr-box">
      <div className="tickr-title flex justify-center align-center">Upcoming events</div>
      <div id="tickr-scroll">
      {
          filteredList.map(eventi => <ul><EventiUpComing eventi={eventi} key={eventi._id} currTag={eventi.tags[0]} /></ul>)
          
      }
      </div>
      </div>

      <section className="events-grid">
        <div className="event-card" onClick={(ev) => { this.redirectClick('Sport') }}>
          <img src={require('../assets/img/sport.jpg')}></img>
        <span className="tag-sport">Sport</span>
            </div>
        <div className="event-card" onClick={(ev) => { this.redirectClick('Movies') }}>
        <img src={require('../assets/img/movies.jpg')}></img>
          <span className="tag-movies">Movies</span>
        </div>
        <div className="event-card" onClick={(ev) => { this.redirectClick('Books') }}>
        <img src={require('../assets/img/books.jpg')}></img>
          <span className="tag-books">Books</span>
          </div>
        <div className="event-card" onClick={(ev) => { this.redirectClick('Art') }}>
        <img src={require('../assets/img/art.jpg')}></img>
          <span className="tag-art">Art</span>
        </div>        
        <div className="event-card" onClick={(ev) => { this.redirectClick('TVShows') }}>
        <img src={require('../assets/img/tvshows.jpg')}></img>
          <span className="tag-tvshows">TV Shows</span>
        </div>
        <div className="event-card" onClick={(ev) => { this.redirectClick('Comics') }}>
        <img src={require('../assets/img/comics.jpg')}></img>
          <span className="tag-comics">Comics</span>
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
