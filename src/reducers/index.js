import { combineReducers } from 'redux';
import stationStatusReducer from './stationStatusReducer';
import viewReducer from './viewReducer';

export default combineReducers({
    stationStatus: stationStatusReducer,
    view: viewReducer
});