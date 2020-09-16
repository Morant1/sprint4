import  { eventService } from '../../services/eventService'

export function loadEvents() {
  return async dispatch => {
    try {
      const events = await eventService.query();
      dispatch({ type: 'SET_EVENTS', events });

    } catch (err) {
      console.log('EventActions: err in loadEvents', err);
    }
  };
}

// export function addEvent(review) {
//   return async dispatch => {
//     try {
//       const addedReview = await eventService.add(review);
//       dispatch({ type: 'EVENT_ADD', review: addedReview });
//     } catch (err) {
//       console.log('ReviewActions: err in addReview', err);
//     }
//   };
// }
