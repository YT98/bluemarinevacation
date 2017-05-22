import React from 'react';
import { Link } from 'react-router';
import { Motion, spring } from 'react-motion';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: '',
      en: false,
      langButton: '',
      footerToggle: false
    },
    this.onClick = this.onClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleLang = this.handleLang.bind(this);
    this.handlePath = this.handlePath.bind(this);
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
    let screenHeight = document.documentElement.clientHeight;
    let value = screenHeight + footerTop;
    if(footerTop < value) {
      this.setState({footerToggle: true})
    }
  }

  handleLang() {
    if (this.state.en === true) {
      this.setState({langButton: 'Français'})
    } else if (this.state.en === false) {
      this.setState({langButton: 'English'})
    }
  }

  handlePath() {
    let path = this.props.path;
    if (path == "/") {
      this.setState({redirect: "/en", en:false});
    } else if (path == "/saint-martin") {
      this.setState({redirect: "/en/st-marteen", en:false});
    } else if (path == "/investir") {
      this.setState({redirect: "/en/invest", en:false});
    } else if (path == "/contact") {
      this.setState({redirect: "/en/contact", en:false});
    }
    if (path == "/en") {
      this.setState({redirect: "/", en:true});
    } else if (path == "/en/st-marteen") {
      this.setState({redirect: "/saint-martin", en:true});
    } else if (path == "/en/invest") {
      this.setState({redirect: "/investir", en:true});
    } else if (path == "/en/contact") {
      this.setState({redirect: "/contact", en:true});
    }
  }

  componentWillMount() {
    this.handleLang();
    this.handlePath();
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
            <div class="col-md-3 col-sm-3 col-xs-12"> <Link to={this.state.en ? "/en" : "/"} onClick={this.onClick}><h5> {this.state.en ? "Home" : "Accueil"} </h5></Link> </div>
            <div class="col-md-3 col-sm-3 col-xs-12"> <Link to={this.state.en ? "/en/st-marteen" : "/saint-martin"} onClick={this.onClick}><h5> {this.state.en ? "St-Marteen" : "Saint-Martin"} </h5></Link> </div>
            <div class="col-md-3 col-sm-3 col-xs-12"> <Link to={this.state.en ? "/en/invest" : "/invest"} onClick={this.onClick}><h5> {this.state.en ? "Invest" : "Investir"} </h5></Link> </div>
            <div class="col-md-3 col-sm-3 col-xs-12"> <Link to={this.state.en ? "/en/contact" : "/contact"} onClick={this.onClick}><h5> Contact </h5></Link> </div>
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
