import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

export default class EstatesMap extends React.Component{
  render() {
    const mapContainer = <div style={{height: '100%', width:'100%'}}></div> ;

    const markers = this.props.markers.map((venue, i) => {
      const marker = {
        position: {
          lat: venue.center.lat,
          lng: venue.center.lng
        }
      }
      return <Marker key={i} {...marker} />
    });

    return (
      <GoogleMapLoader
        containerElement = { mapContainer }
        googleMapElement = {
          <GoogleMap
            defaultZoom = {13}
            defaultCenter = {this.props.center}
            options = {{streetViewControl: false,
            mapTypeControl: false,
            scrollwheel: false}}>
            { markers }
          </GoogleMap>
        } />
    );
  };
};
