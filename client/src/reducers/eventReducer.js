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

const initialState = {
    createdEvents: null,
    registeredEvents: null,
    invites: null,
    registeredEventsLoading: false,
    createdEventsLoading: false,
    invitesLoading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case REGISTERED_EVENTS_LOADING:
            return {
                ...state,
                registeredEventsLoading: true
            }
        case GET_REGISTERED_EVENTS:
            return {
                ...state,
                registeredEvents: action.payload,
                registeredEventsLoading: false
            }
        case CLEAR_REGISTERED_EVENTS:
            return {
                ...state,
                registeredEvents: null
            }
        case CREATED_EVENTS_LOADING:
            return {
                ...state,
                createdEventsLoading: true
            }
        case GET_CREATED_EVENTS:
            return {
                ...state,
                createdEvents: action.payload,
                createdEventsLoading: false
            }
        case CLEAR_CREATED_EVENTS:
            return {
                ...state,
                createdEvents: null
            }
        case INVITES_LOADING:
            return {
                ...state,
                invitesLoading: true
            }
        case GET_INVITES:
            return {
                ...state,
                invites: action.payload,
                invitesLoading: false
            }
        case CLEAR_INVITES:
            return {
                ...state,
                invites: null
            }
        default:
            return state;
    }
}