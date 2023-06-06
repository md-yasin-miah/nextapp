// store/rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './../features/authSlice';
import profileReducer from '../features/profileSlice';


const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
});

export default rootReducer;