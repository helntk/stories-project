import {CREATE_USER,LOGIN_USER, LOGOUT_USER} from '../actions/types';

const initialState = {
    authenticated: false,
    user: {}
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                authenticated: false,
                user: {}
            }
        case LOGIN_USER:
            return {
                ...state,
                authenticated: true,
                user: action.payload
            }
            case LOGOUT_USER:
            return {
                ...state,
                authenticated: false,
                user: {}
            }
        default:
            return state;
    }
}