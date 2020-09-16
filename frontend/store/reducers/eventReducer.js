const initialState = {
    events: []
  };
  
  export default function(state = initialState, action = {}) {
    switch (action.type) {
      case 'SET_EVENTS':
        return { ...state, reviews: action.reviews };
      case 'EVENT_ADD':
        return { ...state, reviews: [...state.reviews, action.review] };
      case 'EVENT_UPDATE':
        return {
          ...state,
          reviews: state.reviews.map(review =>
            review._id === action.review._id ? action.review : review
          )};
      default:
        return state;
    }
  }
  