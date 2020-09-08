import React from 'react';

const renderAvailabilityClasses = numberAvailable => {
    if(numberAvailable <= 0){
        return "card-subtitle mb-2 text-danger"
    }
    return "card-subtitle mb-2 text-success"
}

const renderStationIsRentingError = renting => {
    if(!renting){
        return "<h6><strong>This station is currently not renting bikes.</strong></h6>"
    }
    return
}

const StationCard = props => {
    const stationClasses = props.station.is_renting ? "card bg-light mb-3" : "card text-white bg-secondary mb-3";

    return(
        <div className={stationClasses}>
            <div className="card-body">
                <h5 className="card-title">{props.station.name}</h5>
                <h6 className={renderAvailabilityClasses(props.station.num_bikes_available)}><strong>Bikes Available: </strong>{props.station.num_bikes_available}</h6>
                <h6 className={renderAvailabilityClasses(props.station.num_docks_available)}><strong>Free Spaces: </strong>{props.station.num_docks_available}</h6>
                {renderStationIsRentingError(props.station.is_renting)}
            </div>
        </div>
    );
};

export default StationCard;