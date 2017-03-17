import React from 'react';

export default class Carousel extends React.Component {
  render() {

    const estatesArray = [
      {id: 1, name: "Summer Hill", url: "public/img/summer-hill-villa.jpg", type: "Villa"},
      {id: 2, name: "Little Dream", url: "public/img/summer-hill-villa.jpg", type: "Apartment"},
      {id: 3, name:"Palm Tree", url:"public/img/summer-hill-villa.jpg", type:"Apartment"},
      {id: 4, name:"Fidji", url:"public/img/summer-hill-villa.jpg", type:"Duplex"}
    ];

    const generateFirst = (obj) => (
      <div class="item active" key={obj.id}>
        <img src={obj.url} alt={obj.name} />
        <div class="carousel-caption">
          {obj.name}
        </div>
      </div>
    );
    const firstItem = generateFirst(estatesArray[0]);

    const listItems = estatesArray.slice(1, estatesArray.length).map((obj) => (
      <div class="item" key={obj.id}>
        <img src={obj.url} alt={obj.name}/>
        <div class="carousel-caption">
          {obj.name}
        </div>
      </div>
    ));

    return (
      <div>
        <a href="#estates-carousel" data-slide="prev">
          Previous
        </a>
        <a href="#estates-carousel" data-slide="next">
          Next
        </a>

        <div class="row carousel-container">
          <div id="estates-carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#estates-carousel" data-slide-to="0" class="active"></li>
              <li data-target="#estates-carousel" data-slide-to="1"></li>
              <li data-target="#estates-carousel" data-slide-to="2"></li>
              <li data-target="#estates-carousel" data-slide-to="3"></li>
            </ol>

            <div class="carousel-inner" role="listbox">

              {firstItem}
              {listItems}

            </div>
          </div>

        </div>
      </div>






    );
  };
};
