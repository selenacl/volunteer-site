import React from 'react';
import './Profile.css';
import '../HomeLayout/HomeLayout.css';
import LoginModal from '../../Common/LoginModal/LoginModal'

class Profile extends React.Component {
    state = {
        loggingIn: false
    }

    loginHandler = () => {
        this.setState({loggingIn: !this.state.loggingIn});
    }

    render() {
        return (
        <div className="container-fluid">
            <LoginModal 
                loggingIn={this.loginHandler}
                show={this.state.loggingIn}/>
            <div className="container-fluid, homeContainer">
                <div className="row">
                    <h3><b>PROFILE</b></h3>
                </div>
                <div className="row">
                    
                </div>
            </div>
            
        </div>
        )
    }
}

export default Profile;