import { GridListTile } from '@material-ui/core';
import { eventService } from '../../services/eventService'

export function loadEvents(filterBy) {
  return async dispatch => {
    try {
      const events = await eventService.query(filterBy);
      dispatch({ type: 'SET_EVENTS', events });

    } catch (err) {
      console.log('EventActions: err in loadEvents', err);
    }
  };
}

export function addEventi(eventi) {
  return async dispatch => {
    try {
/*       eventi.startsAt = Date.parse(eventi.startsAt) */
      eventi.createdAt = Date.now();
      eventi.location = eventi.location.split(',');
      const location = new Map([
        ['city', eventi.location[0]],
        ['country',eventi.location[1]]
      ]);
      var tags = new Array(eventi.tags);
      eventi.tags = tags;
      eventi.location =  Object.fromEntries(location);
      eventi.participants = [];
      eventi.comments = [];
      eventi.rank = 0;
      /* eventi.createdby = {}; */
      const addedEventi = await eventService.save(eventi);
      console.log("Added eventi ", addedEventi)
      dispatch({ type: 'EVENT_ADD', addedEventi });
    } catch (err) {
      console.log('eventActions: err in addEvent', err);
    }
  };
}


export function updateEvent(eventi) {
  return async dispatch => {
    try {
/*       eventi.startsAt = Date.parse(eventi.startsAt); */
      console.log("Event inside action " + eventi)
      const addedEvent = await eventService.save(eventi);
      dispatch({ type: 'EVENT_UPDATE', event: addedEvent });
    } catch (err) {
      console.log('eventActions: err in updateEvent', err);
    }
  };
}


export function removeEvent(eventId) {
  return async dispatch => {
    try {
      await eventService.remove(eventId);
      dispatch({ type: 'EVENT_REMOVE', eventId });
    } catch (err) {
      console.log('eventActions: err in removeEvent', err);
    }
  };
}



