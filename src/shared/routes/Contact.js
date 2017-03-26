import React from 'react';
import Navbar from '../components/Navbar';

export default class Contact extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      is_hovered: false
    }
  }

  render () {

    let style = {
      active : {
        height: '100px',
        width: '100px',
        color: 'blue',
      },
      inactive : {
        height: '100px',
        width: '100px',
        color: 'green',
      }
    }

    let onEnter = ()=> {
      this.setState({is_hovered: true})
    }

    let onLeave = ()=> {
      this.setState({is_hovered: false})
    }

    return(
      <div>
        <div class="contact-header">
          <Navbar />
          <h1> Contact </h1>
          <div class="contact-container">
          </div>
        </div>

        <div style={this.state.is_hovered ? style.active : style.inactive} onMouseOver={onEnter} onMouseOut={onLeave}>
          I should change.
        </div>



      </div>
    );
  };
};
