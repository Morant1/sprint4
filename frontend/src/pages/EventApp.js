import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadReviews, addReview } from '../actions/reviewActions.js';
import { loadUsers } from '../actions/userActions.js';
import { Link } from 'react-router-dom';

// class EventApp extends Component {

//   render() {
//     return (
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     reviews: state.review.reviews,
//     users: state.user.users,
//     loggedInUser: state.user.loggedInUser
//   };
// };
// const mapDispatchToProps = {
//   loadReviews,
//   loadUsers,
//   addReview
// };

// export default connect(mapStateToProps, mapDispatchToProps)(EventApp);
