import React from 'react';
import './Invites.css';
import '../HomeLayout/HomeLayout.css';
import ListItem from '../../Common/ListItem/ListItem';
import { getInvites } from '../../../actions/eventActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../Common/Spinner';

class Invites extends React.Component {
    componentDidMount() {
        this.getEvents();
    }

    getEvents = () => {
        if(this.props.auth.user.id !== undefined) {
            this.props.getInvites(this.props.auth.user.id.toString());
        } else {
            setTimeout(this.getEvents, 250);
        }
    }

    render() {
        let { user } = this.props.auth;
        let {invites, invitesLoading} = this.props.event;

        let inviteList;

        if(invites === null || invitesLoading) {
            inviteList = <Spinner />
        } else {
            if(Object.keys(invites).length > 0) {
                inviteList = invites.map(event => {
                    return <ListItem key={event.id} eventName={event.name} />;
                });
            } else {
                inviteList = (
                    <div>
                        <p>Welcome! Contact an event organizer to receive an event invite.</p>
                    </div>
                )
            }
        }

        return (
        <div className="container-fluid">
            <div className="container-fluid, homeContainer">
                <div className="row, homeTitle">
                    <h3><b>INVITES</b></h3>        
                </div>
                <div>
                    {inviteList}
                </div>
            </div>
        </div>
        )
    }
}

Invites.propTypes = {
    getInvites: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    event: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    event: state.event,
    auth: state.auth
})

export default connect(mapStateToProps, {getInvites})(Invites);
