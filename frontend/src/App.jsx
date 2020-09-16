import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import {Header} from './cmps/Header';
import {EventApp} from './pages/EventiApp';
import {EventEdit} from './pages/EventiEdit';
import {EventCategory} from './pages/EventiCategory';
import {EventDetails} from './pages/EventiDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route component={EventEdit} path='event/edit/:_id?' />
          <Route component={EventDetails} path='/:category/:_id' />
          <Route component={EventApp} path='/:category' />
          <Route component={HomePage} path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
