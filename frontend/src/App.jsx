import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import {Navbar} from './cmps/Navbar';
import {EventiApp} from './pages/EventiApp';
import {EventiAdd} from './pages/EventiAdd';
import {HomePage} from './pages/HomePage';
import {EventiDetails} from './pages/EventiDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route component={EventiDetails} path='/:tag/:_id' /> 
          <Route component={EventiAdd} path='/add'/>
          <Route component={EventiApp} path='/:tag' />
          <Route component={HomePage} path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
