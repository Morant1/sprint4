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
      event.tags = event.tags.split('');
      event.startsAt = Date.parse(event.startsAt)/1000;
      const addedEvent = await eventService.save(event);
      dispatch({ type: 'EVENT_ADD', event: addedEvent });
    } catch (err) {
      console.log('ReviewActions: err in addReview', err);
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
