import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadEvents } from '../store/actions/eventActions'
import {EventiList} from '../cmps/EventiList'


export class _EventiApp extends Component {

  state = {
    filterBy: {
      date: 'all',
      order: 'desc',
      sort: 'date',
    }
  }

 
    componentDidMount() {
        this.props.loadEvents(this.state.filterBy);
    }

    onSetFilter = (filterBy) => {
      this.setState({ filterBy }, () => this.props.loadEvents(this.state.filterBy))

  }

    loadFilteredEvents = () => {
      const currTag = this.props.match.params.tag;
      console.log("events",this.props.events)
      const filteredEvents = this.props.events.filter(event => 
      event.tags.includes(currTag)
      );

      return filteredEvents;
    }

   render() {
     const filteredEvents = this.loadFilteredEvents();
      if (!filteredEvents) return <div>Loading...</div>

        return (
            <div className="list-events">
                <EventiList events={filteredEvents} onSetFilter={this.onSetFilter}  currTag={this.props.match.params.tag}/>
            </div>
        )
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

export const EventiApp  = connect(mapStateToProps, mapDispatchToProps)(_EventiApp)