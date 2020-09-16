import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadEvents } from '../store/actions/eventActions'
// import { CategoryGrid } from '../store/actions/eventActions'
import { Link } from 'react-router-dom';

// Upcoming events
// shows list and filter;


class _EventApp extends Component {

    componentDidMount() {
        this.props.loadEvents();
    }

  render() {
    const { events } = this.props
    if (!events ) return <div>Loading....</div>
    return (
      <div>EVENT APP</div>
      // <CategoryGrid events = {events}/>
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

export const EventApp  = connect(mapStateToProps, mapDispatchToProps)(_EventApp)