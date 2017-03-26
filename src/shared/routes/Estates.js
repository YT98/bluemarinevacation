import React from 'react';
import _ from 'lodash';
import Navbar from '../components/Navbar';
import EstatesMap from '../components/EstatesMap';
import EstateCardsContainer from '../components/EstateCardsContainer';

export default class Estates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, name: "Little Dream", url: "public/img/estates/littledream001.png", type: "Studio"},
        {id: 2, name: "Summer Hill", url: "public/img/estates/summerhill001.png", type: "Villa"},
        {id: 3, name:"Palm Tree", url:"public/img/estates/palmtree001.png", type:"Apartment"},
        {id: 4, name:"Fidji", url:"public/img/estates/fidji001.png", type:"Duplex"}
      ]
    };
  };

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
          <div class="estate-cards-container">
            <EstateCardsContainer data={this.state.data} />
          </div>
          <div class="map-container">
            <EstatesMap center={center} markers={markers} />
          </div>
        </div>

      </div>
    );
  };
};
