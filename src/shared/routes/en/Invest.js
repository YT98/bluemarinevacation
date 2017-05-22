import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Motion, spring } from 'react-motion';

export default class Invest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introToggle: false
    }
  }

  handleIntroAnimation() {
    this.setState({introToggle: true});
  }

  componentDidMount() {
    this.handleIntroAnimation();
  }

  render () {
    return(
      <div class="parent-divs">

        <Motion style={{p: spring(this.state.introToggle ? 0 : -1000, {stiffness:100, damping: 26}), o: spring(this.state.introToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
          {({p, o})=>
            <div>
              <div class="estates-header">
                <Navbar path={this.props.location.pathname}/>
                <div class="title" style={{opacity: `${o}`}}><h1> Invest </h1></div>
              </div>
              <div class="row">
                <div class="col-md-7 estates-intro" style={{transform: `translateX(${p}px)`, opacity: `${o}`}}>
                  <h1> Why you should trust us: </h1>
                  <ul>
                    <li> <i class="fa fa-check-square-o" aria-hidden="true"/> We have been amongst the best real estate professionals in St-Marteen for over 15 years! </li>
                    <li> <i class="fa fa-check-square-o" aria-hidden="true"/> Holiday Homes 7 is an LLC (limited liability company) made up of three associates. </li>
                    <li> <i class="fa fa-check-square-o" aria-hidden="true"/> Most of our clients are from Europe as well as North and South America. </li>
                    <li> <i class="fa fa-check-square-o" aria-hidden="true"/> We have a plethora of estates at your disposition: whether you are looking to buy a small studio or a large luxury villa. We even have commercial land and estates as well as complete buildings in our portfolio.</li>
                    <li> <i class="fa fa-check-square-o" aria-hidden="true"/> We deal in both the french and dutch side of the island as well as in St-Barthelemy island (SBH). </li>
                    <li> <i class="fa fa-check-square-o" aria-hidden="true"/> Our commissions are reasonable.</li>
                    <li> <i class="fa fa-check-square-o" aria-hidden="true"/> We have many connections at our client’s disposition thanks to our seasonal location business. </li>
                  </ul>
                </div>
              </div>
            </div>
          }
       </Motion>

        <div class="summerhill">
          <h1> A few of our propreties: </h1>
          <div class="img">
            <div class="header-container"> <h1>  Villa in the <strong>Point de Pirouette</strong> neighborhood </h1> </div>
          </div>
          <div class="text-container">
            <h3> 2, 100, 000 <i class="fa fa-eur" /> <span> (commission included) </span> </h3>
            <p> Très grande et splendide Villa, située en partie hollandaise de l'île, en bordure du lagon. Emplacement EXCEPTIONNEL, à proximité de tous les services: à 10 minutes à pieds de la plage Mullet Bay et du Golf, à 7 minutes à pieds de la plage Sunset Beach ainsi que de l'aéroport, à 5 minutes à pieds du centre Maho Beach (bars, club, magasins, hôtels, pharmacie, etc.), terrains de tennis, casinos, restaurants, etc. Quartier sécurisé 24h/24, réputé pour sa tranquillité et son luxe. </p>
            <ul>
              <li> <i class="fa fa-caret-square-o-right" aria-hidden="true"/> 4 chambres et 4 salles de bains </li>
              <li> <i class="fa fa-caret-square-o-right" aria-hidden="true"/> Piscine et terrasse </li>
              <li> <i class="fa fa-caret-square-o-right" aria-hidden="true"/> Bord de Lagon </li>
            </ul>
          </div>
        </div>

        <div class="apt">
          <div class="img">
            <div class="header-container"> <h1>  Apartement in the <strong>Grand Case</strong> neighborhood </h1> </div>
          </div>
          <div class="text-container">
            <h3> 380, 000 <i class="fa fa-eur" /> <span> (commission included) </span> </h3>
            <p> Magnifique appartement moderne et entièrement meublé. Muni d'une cuisine toute équipée, d'une chambre et de sa salle de bain. Dans un des quartiers les plus agréables et animés de Saint-Martin. En bordure de mer et disposant d'une grande terrasse couverte, cet appartement saura vous offrir un grand comfort et bien-être. </p>
            <ul>
              <li> <i class="fa fa-caret-square-o-right" aria-hidden="true"/> 1 chambre et 1 salle de bain </li>
              <li> <i class="fa fa-caret-square-o-right" aria-hidden="true"/> Tout meublé et terrasse couverte </li>
              <li> <i class="fa fa-caret-square-o-right" aria-hidden="true"/> Bord de mer </li>
            </ul>
          </div>
        </div>

        <button class="facebook"> <h4> <a target="__blank" href="https://facebook.com/holidayhomeseven/"> Consult the other propreties we are selling on our Facebook page. </a> <i class="fa fa-facebook-official"></i> </h4> </button>
        <button class="airbnb"> <h5> <a target="__blank" href="https://airbnb.ca/s?host_id=96977877&s_tag=A7DvdiEZ&allow_override%5B%5D="> Consult our propreties for rent on Airbnb. </a>  </h5> </button>

        <Footer path={this.props.location.pathname} />
      </div>
    );
  };
};
