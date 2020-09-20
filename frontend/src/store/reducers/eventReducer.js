const initialState = {
    events: []
  };
  
  export function eventReducer(state = initialState, action = {}) {
    switch (action.type) {
      case 'SET_EVENTS':
        return { ...state, events: action.events };
        case 'EVENT_ADD':
          return { ...state, events: [...state.events, action.events] };
        case 'EVENT_UPDATE':
          return {
            ...state,
            events: state.events.map(event =>
              event._id === action.event._id ? action.event : event
            )};
        default:
          return state;
      }
    }
    
  