import React from 'react';
import {connect} from 'react-redux'

import {setView} from '../actions/viewActions';

class ViewSwitch extends React.Component{
    constructor(props){
        super(props);
        this.props.setView('LIST');
    }

    setViewState(view){
        this.props.setView(view);
    }

    render(){
        return(
            <div className="row pb-3">
                <div className="btn-group mx-auto">
                    <button type="button" className="btn btn-secondary" onClick={() => this.setViewState("LIST")}>List View</button>
                    <button type="button" className="btn btn-secondary" onClick={() => this.setViewState("MAP")}>Map View</button>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return({
        view: state
    })
}

export default connect(mapStateToProps, {setView})(ViewSwitch);

