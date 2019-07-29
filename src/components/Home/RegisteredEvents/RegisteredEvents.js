import React from 'react';
import './RegisteredEvents.css';
import HomeNavbar from '../HomeNavbar/HomeNavbar';

class RegisteredEvents extends React.Component {

    render() {
        return (
        <div className="container-fluid">
            <HomeNavbar />
            <h1>Registered Events Container</h1>
        </div>
        )
    }
}

export default RegisteredEvents;
