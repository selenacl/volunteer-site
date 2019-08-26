import React from 'react';
import './RegisteredEvents.css';
import '../HomeLayout/HomeLayout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ListItem from '../../Common/ListItem/ListItem';
import { getRegisteredEvents } from '../../../actions/eventActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../Common/Spinner';
import {NavLink} from 'react-router-dom';

class RegisteredEvents extends React.Component {
    componentDidMount() {
        this.getEvents();
    }

    getEvents = () => {
        if(this.props.auth.user.id !== undefined) {
            this.props.getRegisteredEvents(this.props.auth.user.id.toString());
        } else {
            setTimeout(this.getEvents, 250);
        }
    }

    render() {
        let { user } = this.props.auth;
        let {registeredEvents, registeredEventsLoading} = this.props.event;

        let eventList;

        if(registeredEvents === null || registeredEventsLoading) {
            eventList = <Spinner />
        } else {
            if(Object.keys(registeredEvents).length > 0) {
                eventList = registeredEvents.map(event => {
                    return <ListItem key={event.id} eventName={event.name} />;
                });
            } else {
                eventList = (
                    <div>
                        <p>Welcome! Head to the invites page to register for events.</p>
                    </div>
                )
            }
        }

        return (
        <div className="container-fluid">
            <div className="container-fluid, homeContainer">
                <div className="row, homeTitle">
                    <h3>
                        <b>REGISTERED EVENTS
                        <NavLink to="/home/invites">
                            <button type="button" class="btn" id="addEventBtn"><FontAwesomeIcon icon={faPlus} /></button>
                        </NavLink></b>
                    </h3>        
                </div>
                <div>
                    {eventList}
                </div>
            </div>
        </div>
        )
    }
}

RegisteredEvents.propTypes = {
    getRegisteredEvents: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    event: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    event: state.event,
    auth: state.auth
})

export default connect(mapStateToProps, {getRegisteredEvents})(RegisteredEvents);
