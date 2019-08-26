import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER, CLEAR_REGISTERED_EVENTS } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case CLEAR_REGISTERED_EVENTS:
                return {
                    ...state,
                    registeredEvents: null
                }
        default:
            return state;
    }
}