import React from 'react';
import Navbar from '../components/Navbar';
import EstatesMap from '../components/EstatesMap';

export default class Estates extends React.Component {
  render () {

    const center = {
      lat: 1,
      lng: 1
    }

    const markers = [
      {
        center: {
            lat: 1,
            lng: 1
        }
      },
      {
        center: {
          lat: 1.01,
          lng: 1.01
        }
      }
    ]

    return(
      <div>

        <div class="estates-header">
          <Navbar />
          <h1> Estates </h1>
        </div>

        <div class="estates-container">
          <div class="pane-container">
            <p> Estates here. </p>
          </div>
          <div class="map-container">
            <EstatesMap center={center} markers={markers} />
          </div>
        </div>

      </div>
    );
  };
};
