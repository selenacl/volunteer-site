import React from 'react';
import './Invites.css';
import '../HomeLayout/HomeLayout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import LoginModal from '../../Common/LoginModal/LoginModal'
import ListItem from '../../Common/ListItem/ListItem';

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
            <LoginModal 
                loggingIn={this.loginHandler}
                show={this.state.loggingIn}/>
            <div className="container-fluid, homeContainer">
                <div className="row, homeTitle">
                    <h3><b>INVITES<button type="button" class="btn" id="addEventBtn"><FontAwesomeIcon icon={faPlus} /></button></b></h3>        
                </div>
                <div className="row">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
            </div>
        </div>
        )
    }
}

export default Invites;