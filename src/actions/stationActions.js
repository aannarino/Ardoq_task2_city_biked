import cityBikesAPI from '../apis/cityBikes';

import{ FETCH_STATION_STATUS } from './types';

export const getFullStationInformation = () => dispatch => {

    const stationInfoPromise = cityBikesAPI
                                    .get('station_information.json')
                                    .then(response => {
                                        const stationInformation = response.data.data.stations;
                                        return stationInformation;
                                    })
                                    .catch(err => {
                                    })

    const stationStatusPromise = cityBikesAPI
                                    .get('station_status.json')
                                    .then(response => {
                                        const stationStatus = response.data.data.stations;
                                        return stationStatus;
                                    })
                                    .catch(err => {
                                    });

    Promise
        .all([stationInfoPromise, stationStatusPromise])
        .then(vals => {
            const fullStationInformation = mergeStationInformationWithStatus(vals[0], vals[1]);
            return fullStationInformation;
        })
        .then(fullStationInformation => {
            dispatch({
                type: FETCH_STATION_STATUS,
                payload: fullStationInformation
            })
        })
}

const mergeStationInformationWithStatus = (stationInformation, stationStatus) => {
    let fullStationInformation = [];
    stationInformation.forEach(info => {
        stationStatus.forEach(status => {
            if(info.station_id === status.station_id){
                fullStationInformation.push({...info, ...status})
            }
        })
    });

    return fullStationInformation;
}