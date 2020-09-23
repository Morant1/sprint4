const initialState = {
  events: []
};

export function eventReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_EVENTS':
      return { ...state, events: action.events };
    case 'EVENT_ADD':
      return {
        ...state,
        events: [action.addedEventi, ...state.events]
      };
    case 'EVENT_REMOVE':
      return {
        ...state,
        events: state.events.filter(event => event._id !== action.eventId)
      };
    case 'EVENT_UPDATE':
      return {
        ...state,
        events: state.events.map(eventi =>
          eventi._id === action.eventi._id ? action.eventi : eventi
        )
      };
    default:
      return state;
  }
}

