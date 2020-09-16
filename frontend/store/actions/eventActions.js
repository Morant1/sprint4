import eventService from '../services/eventService';

export function loadEvents() {
  return async dispatch => {
    try {
      const reviews = await eventService.query();
      dispatch({ type: 'SET_EVENTS', reviews });

    } catch (err) {
      console.log('ReviewActions: err in loadReviews', err);
    }
  };
}

export function addEvent(review) {
  return async dispatch => {
    try {
      const addedReview = await eventService.add(review);
      dispatch({ type: 'EVENT_ADD', review: addedReview });
    } catch (err) {
      console.log('ReviewActions: err in addReview', err);
    }
  };
}
