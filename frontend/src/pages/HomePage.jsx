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
