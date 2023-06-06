// store/rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './../features/authSlice';
import profileReducer from '../features/profileSlice';
import voiceReducer from '../features/voiceSlice';
import musicConversionReducer from '../features/music/musicConversionSlice';
import musicDownloadReducer from '../features/music/musicDownloadSlice';
import musicStreamReducer from '../features/music/musicStreamSlice';
import userMusicReducer from '../features/music/userMusicSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    voice: voiceReducer,
    musicConversion: musicConversionReducer,
    musicDownload: musicDownloadReducer,
    musicStream: musicStreamReducer,
    userMusic: userMusicReducer,
});

export default rootReducer;