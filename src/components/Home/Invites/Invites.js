import React from 'react';
import './Invites.css';
import HomeNavbar from '../HomeNavbar/HomeNavbar';

class Invites extends React.Component {

    render() {
        return (
        <div className="container-fluid">
            <HomeNavbar />
            <h1>Invites Container</h1>
        </div>
        )
    }
}

export default Invites;