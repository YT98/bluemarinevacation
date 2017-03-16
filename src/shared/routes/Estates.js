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
      }
    ]

    return(
      <div>
        <div>
          <Navbar />
        </div>

        <EstatesMap center={center} markers={markers} />
      </div>
    );
  };
};
