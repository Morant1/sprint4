import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';


import {Navbar} from './cmps/Navbar';
import {EventiApp} from './pages/EventiApp';
import {EventiAdd} from './pages/EventiAdd';
import {EventiEdit} from './pages/EventiEdit';
import {HomePage} from './pages/HomePage';
import {EventiDetails} from './pages/EventiDetails';
import {Login} from './pages/Login';
import { Footer } from './cmps/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route component={EventiEdit} path = '/edit/:_id'/>
          <Route component={EventiDetails} path='/:tag/:_id' /> 
          <Route component={Login} path='/login'/>
          <Route component={EventiAdd} path='/add'/>
          <Route component={EventiApp} path='/:tag' />
          <Route component={HomePage} path='/' />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
