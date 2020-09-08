import React from 'react';

const StationCard = props => {
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.stationName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
        </div>
    );
};

export default StationCard;