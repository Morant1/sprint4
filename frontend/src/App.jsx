import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import {Header} from './cmps/Header';
import {EventiApp} from './pages/EventiApp';
import {EventEdit} from './pages/EventiEdit';
import {HomePage} from './pages/HomePage';
import {EventiDetails} from './pages/EventiDetails';


function App() {
  return (
    <div className="App main-container">
      <Router>
        <Header />
        <Switch>
          <Route component={EventEdit} path='event/edit/:_id?' />
          <Route component={EventiDetails} path='/:tag/:_id' />
          <Route component={EventiApp} path='/:tag' />
          <Route component={HomePage} path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
