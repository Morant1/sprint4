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

export function addEventi(eventi) {
  return async dispatch => {
    try {
      eventi.createdAt = Date.now();
      // eventi.tags = eventi.tags.split(',');
      // eventi.location = eventi.location.split(',');
      // eventi.location.city = eventi.location[0];
      // eventi.location.country = eventi.location[1];
      eventi.startsAt = Date.parse(eventi.startsAt)/1000;
      eventi.participants = [];
      eventi.comments = [];
      eventi.rank = 0;
      eventi.createdby ={};
      const addedEventi = await eventService.save(eventi);
      dispatch({ type: 'EVENT_ADD', addedEventi });
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
