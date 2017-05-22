import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: '',
      en: false,
      langButton: '',
      isHome: false,
      isStMartin: false,
      isInvestir: false,
      isContact: false
    };
    this.handleLang = this.handleLang.bind(this);
    this.handlePath = this.handlePath.bind(this);
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
      this.setState({redirect: "/en", en:false, isHome: true, isStMartin: false, isInvestir: false, isContact: false});
    } else if (path == "/saint-martin") {
      this.setState({redirect: "/en/st-marteen", en:false, isHome: false, isStMartin: true, isInvestir: false, isContact: false});
    } else if (path == "/investir") {
      this.setState({redirect: "/en/invest", en:false, isHome: false, isStMartin: false, isInvestir: true, isContact: false});
    } else if (path == "/contact") {
      this.setState({redirect: "/en/contact", en:false, isHome: false, isStMartin: false, isInvestir: false, isContact: true});
    }
    if (path == "/en") {
      this.setState({redirect: "/", en:true, isHome: true, isStMartin: false, isInvestir: false, isContact: false});
    } else if (path == "/en/st-marteen") {
      this.setState({redirect: "/saint-martin", en:true, isHome: false, isStMartin: true, isInvestir: false, isContact: false});
    } else if (path == "/en/invest") {
      this.setState({redirect: "/investir", en:true, isHome: false, isStMartin: false, isInvestir: true, isContact: false});
    } else if (path == "/en/contact") {
      this.setState({redirect: "/contact", en:true, isHome: false, isStMartin: false, isInvestir: false, isContact: true});
    }
  }

  componentWillMount() {
    this.handlePath();
    this.handleLang();
  }

  componentDidMount() {
    this.handleLang();
  }

  render() {

    return(
      <div id="navbar">
      <nav class="navbar navbar-new" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="#"><img class="nav-logo" src="/public/img/navbar-logo.png" /></a>
          </div>
          <div class="collapse navbar-collapse navbar-right" id="navbar1">
            <ul class="nav navbar-nav">
              <li className={this.state.isHome ? 'active' : ''}><Link to={this.state.en ? "/en" : "/"}>{this.state.en ? "Home" : "Accueil"}</Link></li>
              <li className={this.state.isStMartin ? 'active' : ''}><Link to={this.state.en ? "/en/st-marteen" : "/saint-martin"}>{this.state.en ? "St-Marteen" : "Saint-Martin"}</Link></li>
              <li className={this.state.isInvestir ? 'active' : ''}><Link to={this.state.en ? "/en/invest" : "/investir"}>{this.state.en ? "Invest" : "Investir"}</Link></li>
              <li className={this.state.isContact ? 'active' : ''}><Link to={this.state.en ? "/en/contact" : "/contact"}>Contact</Link></li>
              <li> <a class="lang" href={this.state.redirect}> {this.state.langButton} </a> </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  };
};
