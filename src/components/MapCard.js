import React from 'react';
import {connect} from 'react-redux';

class MapCard extends React.Component{
    renderMap(){
        if(window.google){
            this.displayMap();
            return
        }

        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCg7JQwPG4m2vKp1nUDy4cM89PpJvXFr9k&libraries=geometry,drawing`;
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);

        s.addEventListener('load', e => {
            this.displayMap()
        })
    }

    displayMap(){
        let mapOptions = {
            center: { lat: 59.9139, lng: 10.7522 },
            zoom: 13,
            mapTypeId: window.google.maps.MapTypeId.ROADMAP
        }
        const map = new window.google.maps.Map(document.getElementById("map"), mapOptions);
        this.renderStationPins(map);
    }

    renderStationPins(map){
        this.props.stations.forEach(station => {
            let marker = new window.google.maps.Marker(
                {
                    position: new window.google.maps.LatLng(station.lat, station.lon),
                    map
                }
            );
            let infoWindow = new window.google.maps.InfoWindow();
            infoWindow.setContent("<h3>"+station.name+"</h3><p>Available: "+station.num_bikes_available+"</p><p>Free Spaces: "+station.num_docks_available+"</p>");
            marker.addListener("click", () => infoWindow.open(map, marker));
        });
    }

    componentDidMount(){
        this.renderMap();
    }

    componentDidUpdate(){
        this.renderMap();
    }

    render(){
        return(
            <div style={{ width: '100%', height: '500px' }} className="mb-5" id="map">
            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
        stations: Object.values(state.stationStatus)
    })
}

export default connect(mapStateToProps)(MapCard);