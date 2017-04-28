import React from 'react';
import Navbar from '../components/Navbar';
import { Motion, spring } from 'react-motion';

export default class Investir extends React.Component {
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
                <div class="title" style={{opacity: `${o}`}}><h1> Investir </h1></div>
              </div>
              <div class="row">
                <div class="col-md-7 estates-intro" style={{transform: `translateX(${p}px)`, opacity: `${o}`}}>
                  <h1> Pourquoi nous faire confiance: </h1>
                  <ul>
                    <li> <i class="fa fa-check-square-o" aria-hidden="true"/> Nous sommes des professionels de l'immobilier à Saint-Martin depuis plus de 15 ans ! </li>
                    <li> <i class="fa fa-check-square-o" aria-hidden="true"/> Holiday Homes Seven est une SARL (Société à Responsabilité Limitée) constituée de trois associés. </li>
                    <li> <i class="fa fa-check-square-o" aria-hidden="true"/> Nos clients sont principalement originaires d'Europe et d'Amerique du Nord et du Sud. </li>
                    <li> <i class="fa fa-check-square-o" aria-hidden="true"/> Nous avons de nombreux produits à la vente : du petit studio à la villa de luxe, commerces, immeubles complets et terrains. </li>
                    <li> <i class="fa fa-check-square-o" aria-hidden="true"/> Nous sommes présents du côté français ainsi que du côté hollandais de l'île, ainsi qu'à Saint-Barthélémy (SBH). </li>
                    <li> <i class="fa fa-check-square-o" aria-hidden="true"/> Commission raisonnable. </li>
                    <li> <i class="fa fa-check-square-o" aria-hidden="true"/> Nous avons de nombreuses connections grâce à la location saisonnière. </li>
                  </ul>
                </div>
              </div>
            </div>
          }
       </Motion>

        <div class="summerhill">
          <h1> Exemples de propriétés en vente: </h1>
          <div class="img">
            <div class="header-container"> <h1> <strong>Point de Pirouette</strong> Villa </h1> </div>
          </div>
          <div class="text-container">
            <h3> 2, 100, 000 <i class="fa fa-eur" /> <span> (commission incluse) </span> </h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <ul>
              <li> <i class="fa fa-caret-square-o-right" aria-hidden="true"/> 4 chambres et 4 salles de bains </li>
              <li> <i class="fa fa-caret-square-o-right" aria-hidden="true"/> Piscine, terrasse et dock </li>
              <li> <i class="fa fa-caret-square-o-right" aria-hidden="true"/> Front de Lagon </li>
            </ul>
          </div>
        </div>

        <button class="facebook"> <h4> Consultez plus de propriétés à vendre sur Facebook. <i class="fa fa-facebook-official"></i> </h4> </button>
        <button class="airbnb"> <h5> <a target="__blank" href="https://fr.airbnb.ca/s?host_id=96977877&s_tag=A7DvdiEZ&allow_override%5B%5D="> Consultez nos propriétés à louer sur Airbnb </a>  </h5> </button>

      </div>
    );
  };
};
