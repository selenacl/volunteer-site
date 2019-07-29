import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import LandingLayout from './components/LandingPage/LandingLayout/LandingLayout';
import HomeLayout from './components/Home/HomeLayout/HomeLayout';
import RegisteredEvents from './components/Home/RegisteredEvents/RegisteredEvents';
import CreatedEvents from './components/Home/CreatedEvents/CreatedEvents';
import Invites from './components/Home/Invites/Invites';
import Profile from './components/Home/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingLayout} />
      <Route path="/home/registeredEvents" exact component={RegisteredEvents} />
      <Route path="/home/createdEvents" exact component={CreatedEvents} />
      <Route path="/home/invites" exact component={Invites} />
      <Route path="/home/profile" exact component={Profile} />

    </div>
  );
}

export default App;
