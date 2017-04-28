import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: false,
      isStMartin: false,
      isInvestir: false,
      isContact: false
    };
    this.handlePath = this.handlePath.bind(this);
  }

  handlePath() {
    let path = this.props.path;
    if (path == "/") {
      this.setState({isHome: true, isStMartin: false, isInvestir: false, isContact: false});
    } else if (path == "/saint-martin") {
      this.setState({isHome: false, isStMartin: true, isInvestir: false, isContact: false});
    } else if (path == "/investir") {
      this.setState({isHome: false, isStMartin: false, isInvestir: true, isContact: false});
    } else if (path == "/contact") {
      this.setState({isHome: false, isStMartin: false, isInvestir: false, isContact: true});
    }
  }

  componentDidMount() {
    this.handlePath();
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
          </div>
          <div class="collapse navbar-collapse navbar-right" id="navbar1">
            <ul class="nav navbar-nav">
              <li className={this.state.isHome ? 'active' : ''}><Link to="/">Home</Link></li>
              <li className={this.state.isStMartin ? 'active' : ''}><Link to="/saint-martin">Saint-Martin</Link></li>
              <li className={this.state.isInvestir ? 'active' : ''}><Link to="/investir">Investir</Link></li>
              <li className={this.state.isContact ? 'active' : ''}><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  };
};
