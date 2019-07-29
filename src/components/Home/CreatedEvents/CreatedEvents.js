import React from 'react';
import './CreatedEvents.css';
import HomeNavbar from '../HomeNavbar/HomeNavbar';

class CreatedEvents extends React.Component {

    render() {
        return (
        <div className="container-fluid">
            <HomeNavbar />
            <h1>Created Events Container</h1>
        </div>
        )
    }
}

export default CreatedEvents;