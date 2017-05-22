import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
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
    if(investirTop < 500) {
      this.setState({investirToggle: true})
    }
    console.log("client height" + document.documentElement.clientHeight)
    console.log(document.getElementById("home-investir").getBoundingClientRect().bottom)
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
          <Navbar path={this.props.location.pathname} lang={this.props.lang}/>
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
                <h2 style={{transform: `translateX(${p}px)`, opacity: `${o}`}}> <strong style={{color: "#135589"}}>Make the most</strong> <br/> out of St-Marteen. </h2>
              </div>
              <div class="col-md-8 col-sm-8">
                <p style={{ transform: `translateX(${-p}px)`, opacity: `${o}`}}> We are Holiday Homes 7, a real estate investment firm based in St-Marteen. Working with us means you will have a plethora of villas, apartments, land and commercial premises to choose from in the heavenly scenery that is this wonderful island. Verdant hills, fine sand beaches and crystal-clear turquoise waters… St-Marteen will not disappoint you!</p>
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
                <h1> <strong style={{color: "#135589"}}> Discover </strong> <br /> St-Marteen, <br/> the friendly island. </h1>
                <button> <p> <Link to="/en/st-marteen" onClick={this.onClick}> Learn more about St-Marteen </Link> </p> </button>
              </div>
            </div>
          }
        </Motion>

        <Motion style={{p: spring(this.state.investirToggle ? 0 : -1000, {stiffness: 100, damping: 33}), o: spring(this.state.investirToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
          {({p, o}) =>
            <div class="row home-estates" id="home-investir">
              <div class="col-md-6 col-md-offset-6 col-sm-6 col-sm-offset-6 sol-xs-12" style={{ transform: `translateX(${-p}px)`}}>
                <h1 style={{opacity: `${o}`}}> <strong> Invest </strong> <br/> in your own <br/> little haven.</h1>
                <button style={{opacity: `${o}`}}> <p> <Link to="/en/invest" onClick={this.onClick}> Discover our estates </Link> </p></button>
              </div>
            </div>
          }
        </Motion>

        <div class="row home-contact">
          <button> <h1> <Link to="/en/contact" onClick={this.onClick}> Contact-us ! </Link> </h1> </button>
        </div>

        <Footer path={this.props.location.pathname} />
      </div>
    );
  };
};
