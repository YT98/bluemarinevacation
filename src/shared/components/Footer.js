import React from 'react';
import { Link } from 'react-router';
import { Motion, spring } from 'react-motion';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerToggle: false
    },
    this.onClick = this.onClick.bind(this);
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
    let footerTop = document.getElementById("footer").getBoundingClientRect().top;
    if(footerTop < 617) {
      this.setState({footerToggle: true})
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    let currentYear = new Date().getFullYear();

    return (
    <div class="footer parent-divs" id="footer">
      <Motion style={{p: spring(this.state.footerToggle ? 0 : 1000, {stiffness: 170, damping: 26}), o: spring(this.state.footerToggle ? 1 : 0, {stiffness: 60, damping: 26})}}>
        {({p, o}) =>
          <div class="row links" style={{transform: `translateY(${p}px)`, opacity: `${o}`}}>
            <div class="col-md-3 col-sm-3 col-xs-12"> <Link to="/" onClick={this.onClick}><h5> Accueil </h5></Link> </div>
            <div class="col-md-3 col-sm-3 col-xs-12"> <Link to="/saint-martin" onClick={this.onClick}><h5> Saint-Martin </h5></Link> </div>
            <div class="col-md-3 col-sm-3 col-xs-12"> <Link to="/investir" onClick={this.onClick}><h5> Investir </h5></Link> </div>
            <div class="col-md-3 col-sm-3 col-xs-12"> <Link to="contact" onClick={this.onClick}><h5> Contact </h5></Link> </div>
          </div>
        }
      </Motion>

      <Motion style={{p: spring(this.state.footerToggle ? 0 : 1000, {stiffness: 170, damping: 26}), o: spring(this.state.footerToggle ? 1 : 0, {stiffness: 60, damping: 26})}}>
        {({p, o}) =>
          <div style={{transform: `translateY(${p}px)`, opacity: `${o}`}}>
            <div>
              <a class="social" href="#" target="_blank"><i class="fa fa-facebook-official fa-2x" /></a>
            </div>
            <div>
              <p> Copyright &#9400; {currentYear} Holiday Homes 7. All rights reserved. </p>
              <p> Designed by Yannis Tarfa </p>
            </div>
          </div>
        }
      </Motion>
    </div>
    );
  };
};
