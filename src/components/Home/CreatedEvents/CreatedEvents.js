import React from 'react';
import './CreatedEvents.css';
import '../HomeLayout/HomeLayout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ListItem from '../../Common/ListItem/ListItem';
import Link, {NavLink} from 'react-router-dom';

class CreatedEvents extends React.Component {

    render() {
        return (
        <div className="container-fluid">
            <div className="container-fluid, homeContainer">
                    <div className="row, homeTitle">
                        <h3><b>CREATED EVENTS
                        <NavLink to="/home/createEvent">
                            <button type="button" class="btn" id="addEventBtn"><FontAwesomeIcon icon={faPlus} /></button>
                            </NavLink>
                            </b></h3>        
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

export default CreatedEvents;