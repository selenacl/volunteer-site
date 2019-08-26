import axios from 'axios';
import {    GET_REGISTERED_EVENTS, 
            REGISTERED_EVENTS_LOADING, 
            CLEAR_REGISTERED_EVENTS,
            GET_CREATED_EVENTS, 
            CREATED_EVENTS_LOADING, 
            CLEAR_CREATED_EVENTS,
            GET_INVITES, 
            INVITES_LOADING, 
            CLEAR_INVITES
        } from '../actions/types';

// Get current user's registered events
export const getRegisteredEvents = userId => dispatch => {
    dispatch(setRegisteredEventsLoading());
    axios.get('/api/events/registrations/' + userId)
        .then(res => {
            dispatch({
                type: GET_REGISTERED_EVENTS,
                payload: res.data
            })
        }
        )
        .catch(err => 
            dispatch({
                type: GET_REGISTERED_EVENTS,
                payload: {}
            })
        );
}

export const setRegisteredEventsLoading = () => {
    return {
        type: REGISTERED_EVENTS_LOADING
    }
}

export const clearRegisteredEvents = () => {
    return {
        type: CLEAR_REGISTERED_EVENTS
    }
}

// Get current user's created events
export const getCreatedEvents = userId => dispatch => {
    dispatch(setCreatedEventsLoading());
    axios.get('/api/events/created/' + userId)
        .then(res => {
            dispatch({
                type: GET_CREATED_EVENTS,
                payload: res.data
            })
        }
        )
        .catch(err => 
            dispatch({
                type: GET_CREATED_EVENTS,
                payload: {}
            })
        );
}

export const setCreatedEventsLoading = () => {
    return {
        type: CREATED_EVENTS_LOADING
    }
}

export const clearCreatedEvents = () => {
    return {
        type: CLEAR_CREATED_EVENTS
    }
}

// Get current user's invites
export const getInvites = userId => dispatch => {
    dispatch(setInvitesLoading());
    axios.get('/api/events/invites/' + userId)
        .then(res => {
            dispatch({
                type: GET_INVITES,
                payload: res.data
            })
        }
        )
        .catch(err => 
            dispatch({
                type: GET_INVITES,
                payload: {}
            })
        );
}

export const setInvitesLoading = () => {
    return {
        type: INVITES_LOADING
    }
}

export const clearInvites = () => {
    return {
        type: CLEAR_INVITES
    }
}