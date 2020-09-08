import {FETCH_STATION_STATUS} from '../actions/types';
const initialState = {
    data: {
        stations:[]
    }
}
export default (state=initialState, action) => {
    switch(action.type){
        case FETCH_STATION_STATUS:
            return action.payload;
        default:
            return state;
    }
}