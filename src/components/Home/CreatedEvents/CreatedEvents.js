import React from 'react';
import './CreatedEvents.css';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import LoginModal from '../../Common/LoginModal/LoginModal'

class CreatedEvents extends React.Component {
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
            <h1>Created Events Container</h1>
        </div>
        )
    }
}

export default CreatedEvents;