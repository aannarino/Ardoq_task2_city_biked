import cityBikesAPI from '../apis/cityBikes';

import{ FETCH_STATION_STATUS } from './types';

export const fetchStationStatus = () => dispatch => {
    cityBikesAPI
        .get('station_information.json')
        .then(response => {
            //console.log(response.data.data.stations)
            dispatch({
                type: FETCH_STATION_STATUS,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_STATION_STATUS,
                payload: err
            })
        })
}