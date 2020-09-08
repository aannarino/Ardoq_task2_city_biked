import React from 'react';

const StationCard = props => {
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.station.name}</h5>
                <h6 className="card-subtitle mb-2 "><strong>Bikes Available: </strong>{props.station.num_bikes_available}</h6>
                <h6 className="card-subtitle mb-2 text-muted"><strong>Free Spaces: </strong>{props.station.num_docks_available}</h6>
            </div>
        </div>
    );
};

export default StationCard;