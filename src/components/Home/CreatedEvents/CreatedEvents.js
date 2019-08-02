import React from 'react';
import './CreatedEvents.css';
import '../HomeLayout/HomeLayout.css';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import LoginModal from '../../Common/LoginModal/LoginModal'

class CreatedEvents extends React.Component {
    state = {
        loggingIn: false
    }

    loginHandler = () => {
        this.setState({loggingIn: !this.state.loggingIn});
    }

    render() {
        return (
        <div className="container-fluid">
            <HomeNavbar 
                loggingIn={this.loginHandler}/>
            <LoginModal 
                loggingIn={this.loginHandler}
                show={this.state.loggingIn}/>
            <div className="container-fluid, homeContainer">
                <div className="row">
                    <h2><b>Created Events</b></h2>
                </div>
                <div className="row">
                    
                </div>
            </div>
        </div>
        )
    }
}

export default CreatedEvents;