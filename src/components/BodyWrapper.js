import React from 'react';
import {connect} from 'react-redux';

import MapCard from './MapCard';
import AllStationsList from './AllStationsList';

import {getFullStationInformation} from '../actions/stationActions';

class BodyWrapper extends React.Component{
    constructor(props){
        super(props);
        this.props.getFullStationInformation();
    }

    renderView(){
        if(this.props.view === "LIST"){
            return <AllStationsList />
        }
        return <MapCard />
    }

    render(){
        return(
            <React.Fragment>
                {this.renderView()}
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return{
        view: state.view
    }
}

export default connect(mapStateToProps, {getFullStationInformation})(BodyWrapper)