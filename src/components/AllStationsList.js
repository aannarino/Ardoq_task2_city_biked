import React from 'react';
import { connect } from 'react-redux';

import StationCard from './StationCard';

class AllStationsList extends React.Component{

    renderStations = () => {
        return this.props.stations.map((station, index)=>{
            return(
                <StationCard key={index} station={station} />
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
        stations: Object.values(state.stationStatus)
    }
}

export default connect(mapStateToProps)(AllStationsList);