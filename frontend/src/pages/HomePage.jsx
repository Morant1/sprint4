import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class HomePage extends Component {

  redirectClick = (tag) => {
    this.props.history.push(`/${tag}`)
  }

  render() {
    return (
      <section className="events-grid">
          <div className="tag tag-1" onClick={(ev)=>{this.redirectClick('Football')}}>
              Football
            </div>
          <div className="tag tag-2" onClick={(ev)=>{this.redirectClick('LifeStyle')}}>LifeStyle</div>
          <div className="tag tag-3" onClick={(ev)=>{this.redirectClick('Sport')}}>Sport</div>
          <div className="tag tag-3" onClick={(ev)=>{this.redirectClick('Music')}}>Music</div>
      </section>
    );
  }
}

