import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import LandingLayout from './components/LandingPage/LandingLayout/LandingLayout';
import RegisteredEvents from './components/Home/RegisteredEvents/RegisteredEvents';
import CreatedEvents from './components/Home/CreatedEvents/CreatedEvents';
import Invites from './components/Home/Invites/Invites';
import Profile from './components/Home/Profile/Profile';
import Navbar from './components/Common/Navbar/Navbar';
import CreateAnEventForm from './components/Home/CreateAnEvent/CreateAnEventForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" exact component={LandingLayout} />
      <Route path="/home/registeredEvents" exact component={RegisteredEvents} />
      <Route path="/home/createdEvents" exact component={CreatedEvents} />
      <Route path="/home/invites" exact component={Invites} />
      <Route path="/home/profile" exact component={Profile} />
      <Route path="/home/createEvent" exact component={CreateAnEventForm} />

    </div>
  );
}

export default App;
