import React from 'react';
import Navbar from '../components/Navbar';
import { Motion, spring } from 'react-motion';

export default class SaintMartin extends React.Component {
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
                  <div class="title"><h1 style={{opacity: `${o}`}}> Saint-Martin </h1></div>
                </div>
                <div class="intro-st-martin row">
                  <div class="col-md-6" style={{transform: `translateX(${p}px)`, opacity: `${o}`}}>
                    <p>Journées ensoleillées, douces nuits de velours et des paysages à couper le souffle ; voilà quelques-uns des ingrédients qui créent l’atmosphère unique qui reflète Saint-Martin. Découvrez les différentes facettes d’une île qui vous séduira. Faites une promenade dans la nature de Saint-Martin en explorant ses collines en accro-branche ou à cheval. Plongez dans notre monde sous-marin de corail et de grottes colorées par les poissons tropicaux ou naviguez sur un catamaran vers une des nombreuses anses cachées, parfaites pour un rendez-vous intime. Savourez des plats gastronomiques ou la délicieuse cuisine locale préparée sur les barbecues des lolos de Marigot et Grand Case – où le succulent poisson frit, le homard et les mélanges d’assaisonnements locaux, vous offrent une nouvelle aventure gustative chaque jour de la semaine.</p>
                  </div>
                </div>
              </div>
            }
          </Motion>

          <Motion style={{p: spring(this.state.geographieToggle ? 0 : -1000, {stiffness: 100, damping: 26}), o: spring(this.state.geographieToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
            {({p, o}) =>
              <div class="row geographie-container" id="geographie">
                <div class="col-md-6 col-md-offset-6 col-sm-6 col-sm-offset-6 sol-xs-12" style={{transform: `translateX(${-p}px)`}}>
                  <h1 style={{opacity: `${o}`}}> Géographie </h1>
                  <p style={{opacity: `${o}`}}> Saint-Martin est une ile des Antilles françaises située à l'est de Puerto Rico et au sud d'Anguilla. Elle est séparée en deux de nord en sud: Saint-Martin, territoire français au nord et Sint-Marteen, territoire néerlandais au sud. Les capitales des deux territoires sont, respectivement, Marigot et Phillipsburg. Les deux cotés de la frontière sont parsemés de collines et de vallées, la plus grande colline étant Pic Paradis (424 m). Le littoral est bordé de nombreuses baies et recouvert d'une trentaine de plages de sable blanc et de quelques plages de galets. Le climat de Saint-Martin est très agréable: la température ne varie que très peu durant l'année, les températures les plus hautes étant dans les 32-34 &8451; celcius et les plus basses dans les 20-22 &8451;. </p>
                </div>
              </div>
            }
          </Motion>

          <Motion style={{o: spring(this.state.mapToggle ? 1 : 0, {stiffness: 60, damping: 33})}}>
            {({o}) =>
            <div class="map row" id="map">
              <img src="./public/img/carte.svg" style={{opacity: `${o}`}}/>
            </div>
            }
          </Motion>

          <Motion style={{p: spring(this.state.histoireToggle ? 0 : -1000, {stiffness: 100, damping: 26}), o: spring(this.state.histoireToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
            {({p, o}) =>
              <div class="row histoire-container" id="histoire">
                <div class="col-md-6 col-sm-6 sol-xs-12" style={{transform: `translateX(${p}px)`}}>
                  <h1 style={{opacity: `${o}`}}> Histoire </h1>
                  <p style={{opacity: `${o}`}}> Avant la découverte de l'Amérique, l'ile de Saint-Martin était peuplée d'indigènes amérindiens. Le contact avec le monde occidental fut fait lorsque Christophe Colomb, pendant son deuxième voyage, accosta l'ile. C'était le jour de la fête du Saint Martin de Tours, d'ou le nom de l'ile. Entre le XVe et le XVIe siècle, l'ile était peuplée de quelques français qui cultivaient du tabac et d'une petite garnison hollandaise a l'emplacement actuel de Phillipsburg. Au début XVIIe siècle, les colonies de l'ile de Saint-Martin étaient aux prises avec de nombreuses attaques de la part des espagnols. Victorieux, ils s'y installent et y restent 12 ans avant d'être attaqués à leur tour et de quitter l'ile. C'est  a ce moment la que les néerlandais et les français décident de scinder l'ile en deux et de fixer des règles de coopérations. Avant le XXe siècle, l'économie de Saint-Martin, comme toutes les iles des caraïbes, était principalement constituée de vente de tabac, de canne a sucre et de coton; maintenant, l'ile tourne principalement grâce au tourisme. </p>
                </div>
              </div>
            }
          </Motion>

          <Motion style={{p: spring(this.state.activitesToggle ? 0 : -1000, {stiffness: 100, damping: 26}), o: spring(this.state.activitesToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
            {({p, o}) =>
              <div class="row activites-container" id="activites">
                <div class="col-md-6 col-md-offset-6 col-sm-6 col-sm-offset-6 sol-xs-12" style={{transform: `translateX(${-p}px)`}}>
                  <h1 style={{opacity: `${o}`}}> Activités </h1>
                  <p style={{opacity: `${o}`}}> Faites une promenade dans la nature de Saint-Martin en explorant ses collines en accro-branche ou à cheval. Plongez dans notre monde sous-marin de corail et de grottes colorées par les poissons tropicaux ou naviguez sur un catamaran vers une des nombreuses anses cachées, parfaites pour un rendez-vous intime. Savourez des plats gastronomiques ou la délicieuse cuisine locale préparée sur les barbecues des lolos de Marigot et Grand Case – où le succulent poisson frit, le homard et les mélanges d’assaisonnements locaux, vous offrent une nouvelle aventure gustative chaque jour de la semaine. Avec les choix variés de la vie nocturne – dîners « en tête-à-tête » ou danses sur le rythme rapide du calypso – vous trouverez l’ambiance parfaite pour terminer votre soirée. </p>
                </div>
              </div>
            }
          </Motion>

          <button class="download">
            <p> <i class="fa fa-download"/> Telechargez le document complet pour encore plus d'information sur St-Martin </p>
          </button>

        </div>
      </div>
    );
  };
};
