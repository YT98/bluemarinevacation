import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
                    <p>Journées ensoleillées, douces nuits de velours et des paysages à couper le souffle ; voilà quelques-uns des ingrédients qui créent l’atmosphère unique de Saint-Martin. Découvrez les différentes facettes d’une île qui vous séduira. </p>
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
                  <p style={{opacity: `${o}`}}> Saint-Martin est une île des Antilles françaises située à l'est de Puerto Rico et au sud d'Anguilla. Le territoire est divisé en deux: Saint-Martin, territoire français au nord et St-Marteen, territoire néerlandais au sud. Les capitales des deux territoires sont, respectivement, Marigot et Phillipsburg. L'île est parsemée de collines et de vallées, la plus colline la plus élevée étant Pic Paradis (424 m). Le littoral est bordé de nombreuses baies et recouvert d'une trentaine de plages de sable blanc et de quelques plages de galets. Le climat de Saint-Martin est très agréable: la température ne varie que très peu durant l'année: elle se situe entre 32-34 &#8451; celcius et 20-22 &#8451;. </p>
                </div>
              </div>
            }
          </Motion>

          <Motion style={{o: spring(this.state.mapToggle ? 1 : 0, {stiffness: 60, damping: 33})}}>
            {({o}) =>
            <div class="map row" id="map">
              <img src="/public/img/carte.svg" alt="Carte de Saint-Martin" style={{opacity: `${o}`}}/>
            </div>
            }
          </Motion>

          <Motion style={{p: spring(this.state.histoireToggle ? 0 : -1000, {stiffness: 100, damping: 26}), o: spring(this.state.histoireToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
            {({p, o}) =>
              <div class="row histoire-container" id="histoire">
                <div class="col-md-6 col-sm-6 sol-xs-12" style={{transform: `translateX(${p}px)`}}>
                  <h1 style={{opacity: `${o}`}}> Histoire </h1>
                  <p style={{opacity: `${o}`}}> Avant la découverte de l'Amérique, l'île de Saint-Martin était peuplée d'indigènes amérindiens. Le contact avec le monde occidental eut lieu lorsque Christophe Colomb, lors de son deuxième voyage, accosta l'ile. C'était le jour de la fête du saint Martin de Tours, d'où le nom de l'île. Entre le XVe et le XVIe siècle, l'île de Saint-Martin était peuplée de quelques français qui cultivaient du tabac et d'une petite garnison hollandaise à l'emplacement actuel de Phillipsburg. Au début XVIIe siècle, les colonies de Saint-Martin étaient aux prises avec de nombreuses attaques de la part des espagnols. Victorieux, ils s'y installèrent et y restèrent 12 ans avant d'être attaqués à leur tour et de quitter l'île. C'est à ce moment là que les néerlandais et les français décidèrent de diviser l'île en deux et de fixer des règles de coopération. Avant le XXe siècle, l'économie de Saint-Martin, comme toutes les îles des caraïbes, était principalement dépendante de la vente de tabac, de cannes à sucre et de côton; maintenant, l'île fonctionne principalement grâce au tourisme. </p>
                </div>
              </div>
            }
          </Motion>

          <Motion style={{p: spring(this.state.activitesToggle ? 0 : -1000, {stiffness: 100, damping: 26}), o: spring(this.state.activitesToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
            {({p, o}) =>
              <div class="row activites-container" id="activites">
                <div class="col-md-6 col-md-offset-6 col-sm-6 col-sm-offset-6 sol-xs-12" style={{transform: `translateX(${-p}px)`}}>
                  <h1 style={{opacity: `${o}`}}> Activités </h1>
                  <p style={{opacity: `${o}`}}> Faites une promenade dans la nature de Saint-Martin en explorant ses collines en accro-branche ou à cheval. Plongez dans notre monde sous-marin de coraux et de grottes colorées par les poissons tropicaux ou naviguez sur un catamaran vers une des nombreuses anses cachées. Savourez des plats gastronomiques ou la délicieuse cuisine locale préparée sur les barbecues des lolos de Marigot et de Grand Case – où le succulent poisson frit, le homard et les mélanges d’assaisonnements locaux, vous offrent une nouvelle aventure gustative chaque jour de la semaine. Avec les choix variés de la vie nocturne – dîners « en tête-à-tête » ou danses sur le rythme rapide du calypso – vous trouverez l’ambiance parfaite pour terminer votre soirée. </p>
                </div>
              </div>
            }
          </Motion>

          <button class="download">
            <p> <i class="fa fa-download"/> Telechargez le document complet pour encore plus d'information sur St-Martin </p>
          </button>

          <Footer path={this.props.location.pathname} />
        </div>
      </div>
    );
  };
};
