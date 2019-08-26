import React from 'react';
import './CreatedEvents.css';
import '../HomeLayout/HomeLayout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ListItem from '../../Common/ListItem/ListItem';
import { getCreatedEvents } from '../../../actions/eventActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../Common/Spinner';
import {NavLink} from 'react-router-dom';

class CreatedEvents extends React.Component {
    componentDidMount() {
        this.getEvents();
    }

    getEvents = () => {
        if(this.props.auth.user.id !== undefined) {
            this.props.getCreatedEvents(this.props.auth.user.id.toString());
        } else {
            setTimeout(this.getEvents, 250);
        }
    }

    render() {
        let { user } = this.props.auth;
        let {createdEvents, createdEventsLoading} = this.props.event;

        let eventList;

        if(createdEvents === null || createdEventsLoading) {
            eventList = <Spinner />
        } else {
            if(Object.keys(createdEvents).length > 0) {
                eventList = createdEvents.map(event => {
                    return <ListItem key={event.id} eventName={event.name} />;
                });
            } else {
                eventList = (
                    <div>
                        <p>Welcome! Press the + button to create an event.</p>
                    </div>
                )
            }
        }

        return (
        <div className="container-fluid">
            <div className="container-fluid, homeContainer">
                <div className="row, homeTitle">
                    <h3>
                        <b>CREATED EVENTS
                        <NavLink to="/home/createEvent">
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

CreatedEvents.propTypes = {
    getCreatedEvents: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    event: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    event: state.event,
    auth: state.auth
})

export default connect(mapStateToProps, {getCreatedEvents})(CreatedEvents);
