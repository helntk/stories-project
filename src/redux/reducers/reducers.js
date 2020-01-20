import {combineReducers} from 'redux';
import authReducer from './authReducer';
import storiesReducer from './storiesReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    stories: storiesReducer
  })
  
export default rootReducer;