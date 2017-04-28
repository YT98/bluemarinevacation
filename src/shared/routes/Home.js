import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router';
import { Motion, spring } from 'react-motion';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introToggle: false,
      stMartinToggle: false,
      investirToggle: false
    }
    this.onClick = this.onClick.bind(this);
    this.handleIntroAnimation = this.handleIntroAnimation.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  onClick() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  handleScroll() {
    let stMartinTop = document.getElementById("home-st-martin").getBoundingClientRect().top;
    if(stMartinTop < 500) {
      this.setState({stMartinToggle: true})
    };
    let investirTop = document.getElementById("home-investir").getBoundingClientRect().top;
    if(investirTop < 495) {
      this.setState({investirToggle: true})
    }
  }

  handleIntroAnimation() {
    this.setState({introToggle: true})
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
        <div class="home-header">
          <Navbar path={this.props.location.pathname}/>
          <div class="video-container">
            <video class="video-background" autoPlay muted loop preload="auto" src="/public/img/video.mp4"></video>
          </div>

          <Motion style={{p: spring(this.state.introToggle ? 0 : 1000, {stiffness: 100, damping: 26}), o: spring(this.state.introToggle ? 1 : 0, {stiffness: 30, damping: 33})}}>
            {({p, o}) =>
              <div class="home-header-title" style={{transform: `translateY(${p}px)`}}>
                <div>
                  <h1 style={{opacity: `${o}`}}> Holiday Homes 7 </h1>
                </div>
              </div>
            }
          </Motion>
        </div>

        <Motion style={{p: spring(this.state.introToggle ? 0 : -1000, {stiffness: 100, damping: 26}), o: spring(this.state.introToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
          {({p, o}) =>
            <div class="row home-intro">
              <div class="col-md-4 col-sm-4">
                <h2 style={{transform: `translateX(${p}px)`, opacity: `${o}`}}> <strong style={{color: "#135589"}}>Profitez</strong> <br/> de Saint-Martin. </h2>
              </div>
              <div class="col-md-8 col-sm-8">
                <p style={{ transform: `translateX(${-p}px)`, opacity: `${o}`}}> Nous sommes Holiday Homes 7, une entreprise d’investissement immobilier. Situés à St-Martin, nous sommes en mesure de vous procurer villas et appartements, terrains et locaux de qualité dans le décor de rêve qu’est cette merveilleuse île: collines verdoyantes, plages de sable fin, eau turquoise a perte de vue… St-Martin ne manque pas de facettes a decouvrir !</p>
              </div>
            </div>
          }
        </Motion>

        <Motion style={{p: spring(this.state.stMartinToggle ? 0 : -1000, {stiffness: 100, damping: 26}), o: spring(this.state.stMartinToggle ? 1 : 0, {stiffness: 30, damping: 26}), s: spring(this.state.stMartinToggle ? 1 : 1.5, {stiffness: 30, damping: 26})}}>
          {({p, o, s}) =>
            <div class="row home-st-martin" id="home-st-martin">
              <div class="col-md-6 col-sm-6">
                <div class="home-st-martin-img"><div style={{transform: `scale(${s})`}}></div></div>
              </div>
              <div class="col-md-6 col-sm-6" style={{ transform: `translateX(${-p}px)`, opacity: `${o}`}}>
                <h1> <strong style={{color: "#135589"}}> Découvrez </strong> <br /> Saint-Martin, <br/> la friendly island. </h1>
                <button> <p> <Link to="/saint-martin" onClick={this.onClick}> Pour en apprendre plus sur Saint-Martin </Link> </p> </button>
              </div>
            </div>
          }
        </Motion>

        <Motion style={{p: spring(this.state.investirToggle ? 0 : -1000, {stiffness: 100, damping: 33}), o: spring(this.state.investirToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
          {({p, o}) =>
            <div class="row home-estates" id="home-investir">
              <div class="col-md-6 col-md-offset-6 col-sm-6 col-sm-offset-6 sol-xs-12" style={{ transform: `translateX(${-p}px)`}}>
                <h1 style={{opacity: `${o}`}}> <strong> Investissez </strong> <br/> dans un petit bout <br/> de paradis.</h1>
                <button style={{opacity: `${o}`}}> <p> <Link to="/investir" onClick={this.onClick}> Consultez nos propriétés ! </Link> </p></button>
              </div>
            </div>
          }
        </Motion>
        
        <div class="row home-contact">
          <button> <h1> <Link to="/contact" onClick={this.onClick}> Contactez-nous ! </Link> </h1> </button>
        </div>

      </div>
    );
  };
};
