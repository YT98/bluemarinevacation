import React from 'react';
import Navbar from '../components/Navbar';

export default class Home extends React.Component {
  render() {
    return(
      <div>

        <div class="home-header">
          <Navbar />
          <div class="home-header-title">
              <h1> Holiday Homes 7 </h1>
              <h2> Location saisonière de standing || St.Marteen </h2>
              <button> <h1>Réservez dès maintenant !</h1> </button>
          </div>
        </div>

        <div class="row home-intro">
          <div class="col-md-4 col-sm-4">
            <h2 style={{textAlign: "right"}}> <strong style={{color: "#135589"}}>Profitez</strong> <br/> de Saint-Martin. </h2>
          </div>
          <div class="col-md-8 col-sm-8">
            <p style={{textAlign: "left", marginTop: "20px", marginRight: "30px"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
          </div>
        </div>

        <div class="row home-st-martin">
          <div class="col-md-6 col-sm-6">
            <div class="home-st-martin-img"></div>
          </div>
          <div class="col-md-6 col-sm-6">
            <h1> <strong style={{color: "#135589"}}> Saint-Martin, </strong> <br /> la friendly island. </h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <button> Pour en apprendre plus sur Saint-Martin </button>
          </div>
        </div>

        <div class="home-estates">
          <div>
            <h1> Visionez nos <br /> propriétés avec facilité. </h1>
            <button> <h3> Cliquez ici ! </h3> </button>
          </div>
          <div>
            <img class="img-responsive" src="./public/img/computer_screens.png" />
          </div>
        </div>

        <div class="row home-contact">
          <button ref="button"> <h1>Contactez-nous !</h1> </button>
        </div>

      </div>
    );
  };
};
