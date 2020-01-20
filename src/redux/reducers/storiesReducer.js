import {UPLOAD_STORI, GET_STORIES} from '../actions/types';

const initialState = {
    
        userStories: {},
        allStories: {}
    
}

export default function storiesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_STORIES:
            return {
                ...state,
                userStories: action.payload.data

            }
        default:
            return state;
    }
}