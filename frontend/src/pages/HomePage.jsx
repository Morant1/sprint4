import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class HomePage extends Component {

  redirectClick = (tag) => {
    this.props.history.push(`/${tag}`)
  }

  render() {
    return (
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
    );
  }
}

