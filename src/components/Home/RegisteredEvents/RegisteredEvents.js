import React from 'react';
import './RegisteredEvents.css';
import '../HomeLayout/HomeLayout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ListItem from '../../Common/ListItem/ListItem';

class RegisteredEvents extends React.Component {

    render() {
        return (
        <div className="container-fluid">
            <div className="container-fluid, homeContainer">
                <div className="row, homeTitle">
                    <h3><b>REGISTERED EVENTS<button type="button" class="btn" id="addEventBtn"><FontAwesomeIcon icon={faPlus} /></button></b></h3>        
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

export default RegisteredEvents;
