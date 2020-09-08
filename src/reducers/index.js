import { combineReducers } from 'redux';
import stationStatusReducer from './stationStatusReducer';

export default combineReducers({
    stationStatus: stationStatusReducer
});