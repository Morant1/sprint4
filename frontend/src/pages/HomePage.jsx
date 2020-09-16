import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class HomePage extends Component {


  render() {
    return (
      <section className="events-grid">
          <Link to={'/Football'}><div className="tag tag-1">Football</div></Link>
          <Link to={'/LifeStyle'}><div className="tag tag-2">LifeStyle</div></Link>
          <Link to={'/Sport'}><div className="tag tag-3">Sport</div></Link>
          <Link to={'/Music'}><div className="tag tag-4">Music</div></Link>
      </section>
    );
  }
}

