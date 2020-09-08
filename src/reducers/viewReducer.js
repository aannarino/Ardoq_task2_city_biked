import {SET_VIEW} from '../actions/types';

const initialState = {view: 'LIST'};

export default(state=initialState, action) => {
    switch(action.type){
        case SET_VIEW:
            return action.payload;
        default:
            return state;
    }
}