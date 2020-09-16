import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import {Header} from './cmps/Header';
import {EventApp} from './pages/EventApp';
import {EventEdit} from './pages/EventEdit';
import {EventCategory} from './pages/EventCategory';
import {EventDetails} from './pages/EventDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route component={EventEdit} path='event/edit/:_id?' />
          <Route component={EventDetails} path='/:category/:_id' />
          <Route component={EventCategory} path='/:category' />
          <Route component={EventApp} path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
