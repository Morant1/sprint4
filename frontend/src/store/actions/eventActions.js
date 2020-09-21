import  { eventService } from '../../services/eventService'

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

export function addEvent(event) {
  return async dispatch => {
    try {
      event.createdAt = Date.now();
      event.tags = event.tags.split(',');
      event.location = event.location.split(',');
      event.location.city = event.location[0];
      event.location.country = event.location[1];
      event.startsAt = Date.parse(event.startsAt);
      event.participants = [];
      event.comments = [];
      event.rank = 0;
      event.createdby ={};
      const addedEvent = await eventService.save(event);
      dispatch({ type: 'EVENT_ADD', event: addedEvent });
    } catch (err) {
      console.log('eventActions: err in addEvent', err);
    }
  };
}


export function updateEvent(event) {
  return async dispatch => {
    try {
      console.log("Event inside action " +event)
      const addedEvent = await eventService.save(event);
      dispatch({ type: 'EVENT_UPDATE', event: addedEvent });
    } catch (err) {
      console.log('ReviewActions: err in addReview', err);
    }
  };
}
