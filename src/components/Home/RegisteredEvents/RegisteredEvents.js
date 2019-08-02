import React from 'react';
import './RegisteredEvents.css';
import '../HomeLayout/HomeLayout.css';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import LoginModal from '../../Common/LoginModal/LoginModal'

class RegisteredEvents extends React.Component {
    state = {
        loggingIn: false
    }

    loginHandler = () => {
        this.setState({loggingIn: true});
    }

    render() {
        return (
        <div className="container-fluid">
            <HomeNavbar 
                loggingIn={this.loginHandler}/>
            <LoginModal 
                show={this.state.loggingIn}/>
            <div className="container-fluid, homeContainer">
                <div className="row">
                    <h2><b>Registered Events</b></h2>
                </div>
                <div className="row">
                    
                </div>
            </div>
        </div>
        )
    }
}

export default RegisteredEvents;
