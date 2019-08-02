import React from 'react';
import './Invites.css';
import '../HomeLayout/HomeLayout.css';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import LoginModal from '../../Common/LoginModal/LoginModal'

class Invites extends React.Component {
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
                    <h2><b>Invites</b></h2>
                </div>
                <div className="row">
                    
                </div>
            </div>
        </div>
        )
    }
}

export default Invites;