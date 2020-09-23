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
      eventi.createdAt = Date.now();
      eventi.tags = eventi.tags.split(',');
      eventi.location.city = eventi.city;
      eventi.location.country = eventi.country;
      eventi.participants = [];
      eventi.comments = [];
      eventi.rank = 0;
      eventi.createdby = {};
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
      const updatedEventi = await eventService.save(eventi);
      dispatch({ type: 'EVENT_UPDATE', event: updatedEventi });
    } catch (err) {
      console.log('ReviewActions: err in addReview', err);
    }
  };
}
