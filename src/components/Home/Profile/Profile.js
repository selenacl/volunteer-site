import React from 'react';
import './Profile.css';
import HomeNavbar from '../HomeNavbar/HomeNavbar';

class Profile extends React.Component {

    render() {
        return (
        <div className="container-fluid">
            <HomeNavbar />
            <h1>Profile Container</h1>
        </div>
        )
    }
}

export default Profile;