import React from 'react';
import { connect } from 'react-redux';

import {fetchStationStatus} from '../actions/stationActions';
import {FETCH_STATION_STATUS} from '../actions/types';

import StationCard from './StationCard';

class AllStations extends React.Component{
    constructor(props){
        super(props);
        this.props.fetchStationStatus();
    }

    renderStations = () => {
        return this.props.stations.map((station, index)=>{
            return(
                <StationCard key={index} stationName={station.name} />
            )
        })
    }

    render(){
        return(
            <div className="container">
                {this.renderStations()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        stations: Object.values(state.stationStatus.data.stations)
    }
}

export default connect(mapStateToProps, {fetchStationStatus})(AllStations);