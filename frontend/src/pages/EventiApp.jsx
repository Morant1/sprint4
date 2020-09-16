import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadEvents } from '../store/actions/eventActions'
import {EventiList} from '../cmps/EventiList'


export class _EventiApp extends Component {

    // state = {
    //     FilteredEvents: null,
    // }

    componentDidMount() {
        this.props.loadEvents();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.tag !== this.props.match.params.tag) {
            this.loadFilteredEvents()
        }
    }

    loadFilteredEvents = () => {
      const currTag = this.props.match.params.tag;
      const filteredEvents = this.props.events.filter(event => 
      event.tags.includes(currTag)
      );

      return filteredEvents;
    }

   render() {
     const filteredEvents = this.loadFilteredEvents();
     console.log(filteredEvents)
      if (!filteredEvents) return <div>Loading...</div>

        return (
            <div className="list-events">
                <EventiList events={filteredEvents} />
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