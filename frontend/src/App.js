import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import EventApp from './pages/EventApp.js';
import EventCategory from './pages/EventCategory.js';
import EventDetails from './pages/EventDetails.js';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        {/* <Route component={ToyEdit} path='/event/edit/:_id?' /> */}
        <Route component={EventDetails} path='/event/category:_id' />
        <Route component={EventCategory} path='/event/category' />
        <Route component={EventApp} path='/' />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
