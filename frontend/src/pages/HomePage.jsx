import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class HomePage extends Component {

  redirectClick = (tag) => {
    this.props.history.push(`/${tag}`)
  }

  render() {
    return (
      <section className="events-grid">
        <div className="tag tag-1" onClick={(ev) => { this.redirectClick('Football') }}>
        <div className="tag-title">Football</div>
            </div>
        <div className="tag tag-2"
          onClick={(ev) => { this.redirectClick('LifeStyle') }
          }>
          <div className="tag-title">LifeStyle</div>
        </div>
        <div className="tag tag-3" onClick={(ev) => { this.redirectClick('Sport') }}>
          <div className="tag-title">Sport</div></div>
        <div className="tag tag-4" onClick={(ev) => { this.redirectClick('Music') }}>
          <div className="tag-title">Music</div>
        </div>
      </section>
    );
  }
}

