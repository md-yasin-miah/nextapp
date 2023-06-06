// store/rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './../features/authSlice';
import profileReducer from '../features/profileSlice';
import voiceReducer from '../features/voiceSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    voice: voiceReducer,
});

export default rootReducer;