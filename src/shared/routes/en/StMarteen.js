import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Motion, spring } from 'react-motion';

export default class StMarteen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introToggle: false,
      geographieToggle: false,
      mapToggle: false,
      histoireToggle: false,
      activitesToggle: false
    };
    this.handleIntroAnimation = this.handleIntroAnimation.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleIntroAnimation() {
    this.setState({introToggle: !this.state.introToggle})
  }

  handleScroll() {
    let geographieTop = document.getElementById("geographie").getBoundingClientRect().top;
    if (geographieTop < 500) {
      this.setState({geographieToggle: true})
    }
    let mapTop = document.getElementById("map").getBoundingClientRect().top;
    if (mapTop < 500) {
      this.setState({mapToggle: true})
    }
    let histoireTop = document.getElementById("histoire").getBoundingClientRect().top;
    if (histoireTop < 500) {
      this.setState({histoireToggle: true})
    }
    let activitesTop = document.getElementById("activites").getBoundingClientRect().top;
    if (activitesTop < 500) {
      this.setState({activitesToggle: true})
    }
  }

  componentDidMount() {
    this.handleIntroAnimation();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {

    return(
      <div class="parent-divs">
        <div class="st-martin-container">

          <Motion style={{p: spring(this.state.introToggle ? 0 : -1000, {stiffness: 100, damping: 26}), o: spring(this.state.introToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
            {({p, o}) =>
              <div>
                <div class="saint-martin-header">
                  <Navbar path={this.props.location.pathname}/>
                  <div class="title"><h1 style={{opacity: `${o}`}}> St-Marteen </h1></div>
                </div>
                <div class="intro-st-martin row">
                  <div class="col-md-6" style={{transform: `translateX(${p}px)`, opacity: `${o}`}}>
                    <p> Sunny days, fresh nights and landscapes that seem to be taken straight from a post-card ; these are only a few of the many ingredients that make up St-Marteen’s unique atmosphere. Discover the different elements of an island that will, no doubt, seduce you. </p>
                  </div>
                </div>
              </div>
            }
          </Motion>

          <Motion style={{p: spring(this.state.geographieToggle ? 0 : -1000, {stiffness: 100, damping: 26}), o: spring(this.state.geographieToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
            {({p, o}) =>
              <div class="row geographie-container" id="geographie">
                <div class="col-md-6 col-md-offset-6 col-sm-6 col-sm-offset-6 sol-xs-12" style={{transform: `translateX(${-p}px)`}}>
                  <h1 style={{opacity: `${o}`}}> Geography </h1>
                  <p style={{opacity: `${o}`}}> Saint-Martin / St-Marteen is an island in the French West Indies located east of Puerto Rico and south of Anguilla. It is divided into two parts: Saint Martin, French territory situated to the north and Sint-Marteen, Dutch territory situated to the south. The capitals of the two territories are, respectively, Marigot and Phillipsburg. Both sides of the border are dotted with hills and valleys, the largest being Pic Paradis (424 m). The coastline is bordered by numerous bays and covered with thirty white sandy beaches and some pebble beaches. The climate The climate of Saint-Martin is very pleasant: the temperature varies only very little during the year. It is between 34 and 27 degrees Celsius. </p>
                </div>
              </div>
            }
          </Motion>

          <Motion style={{o: spring(this.state.mapToggle ? 1 : 0, {stiffness: 60, damping: 33})}}>
            {({o}) =>
            <div class="map row" id="map">
              <img src="/public/img/carte.svg" alt="St-Marteen Map" style={{opacity: `${o}`}}/>
            </div>
            }
          </Motion>

          <Motion style={{p: spring(this.state.histoireToggle ? 0 : -1000, {stiffness: 100, damping: 26}), o: spring(this.state.histoireToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
            {({p, o}) =>
              <div class="row histoire-container" id="histoire">
                <div class="col-md-6 col-sm-6 sol-xs-12" style={{transform: `translateX(${p}px)`}}>
                  <h1 style={{opacity: `${o}`}}> History </h1>
                  <p style={{opacity: `${o}`}}> Before the discovery of America, St. Martin was populated by native Amerindians. It was during the second journey of Christopher Columbus that the island was accosted which allowed them the opportunity to have a first contact with the western world. It was the feast day of the Saint Martin of Tours, hence the name of the island. Between the fifteenth and sixteenth centuries, the island was populated by a few Frenchmen who cultivated tobacco as well as a small Dutch garrison, living at the present site of Phillipsburg. At the beginning of the XVIIth century, Saint-Martin experienced several attacks by the Spaniards. Victorious, they remained there 12 years before being attacked in return and expelled from the territory. It was during this period that the Dutch and the French decided to split the island in two and to establish rules of cooperation. Before the twentieth century, the economy of St. Martin, like all the islands of the Caribbean, depended mainly on the sale of tobacco, sugar cane and cotton. </p>
                </div>
              </div>
            }
          </Motion>

          <Motion style={{p: spring(this.state.activitesToggle ? 0 : -1000, {stiffness: 100, damping: 26}), o: spring(this.state.activitesToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
            {({p, o}) =>
              <div class="row activites-container" id="activites">
                <div class="col-md-6 col-md-offset-6 col-sm-6 col-sm-offset-6 sol-xs-12" style={{transform: `translateX(${-p}px)`}}>
                  <h1 style={{opacity: `${o}`}}> Activities </h1>
                  <p style={{opacity: `${o}`}}> Take a walk in the nature of Saint-Martin by exploring its hills on horseback. Dive into our underwater world of corals and caves colored by tropical fish or sail on a catamaran towards one of the many hidden coves, perfect for an intimate rendezvous. Savor gourmet dishes or the delicious local cuisine prepared on the Marigot and Grand Case lobster barbecues, where the delicious fried fish, lobster and local seasoning blends, offer you a new taste experience every day of the week. </p>
                </div>
              </div>
            }
          </Motion>

          <Footer path={this.props.location.pathname} />
        </div>
      </div>
    );
  };
};
