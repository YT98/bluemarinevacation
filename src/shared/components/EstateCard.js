import React from 'react';

export default class extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      is_hovered: false
    }
  }

  render() {
    let style = {

      inactive: {
        card: {
          width: '300px',
          margin: 'auto',
          marginTop: '5px',
          marginBottom: '5px',
          paddingBottom: '15px',
          overflow: 'hidden',
          backgroundColor: '#2A93D5',
          color: 'white',

          display: 'inline-block',
          verticalAlign: 'middle',
          webkitTransform: "perspective(1px) translateZ(0)",
          transform: "perspective(1px) translateZ(0)",
          boxShadow: "0 0 1px transparent",
          webkitTransitionDuration: "0.3s",
          TransitionDuration: "0.3s",
          webkitTransitionProperty: "transform",
          transitionProperty: "transform"
        },
        img: {
        },
        name: {
          paddingLeft: '15px'
        },
        info: {
          paddingLeft: '15px'
        },
        button: {
          backgroundColor: 'transparent',
          border: '1px solid white',
          marginLeft: '15px'
        }
      },

      active:{
        card: {
          width: '300px',
          margin: 'auto',
          marginTop: '5px',
          marginBottom: '5px',
          overflow: 'hidden',
          backgroundColor: '#2A93D5',
          color: 'white',

          display: 'inline-block',
          verticalAlign: 'middle',
          webkitTransform: "perspective(1px) translateZ(0)",
          transform: "perspective(1px) translateZ(0)",
          boxShadow: "0 0 1px transparent",
          webkitTransitionDuration: "0.3s",
          TransitionDuration: "0.3s",
          webkitTransitionProperty: "transform",
          transitionProperty: "transform",

          webkitTranform: "scale(1.008)",
          transform: "scale(1.008)"
        }
      }
    };

    let onEnter = ()=> {
      this.setState({is_hovered: true});
    }

    let onLeave = ()=> {
      this.setState({is_hovered: false});
    }

    return(
      <div
        onMouseOver={onEnter}
        onMouseOut={onLeave}
        style={this.state.is_hovered ? style.active.card : style.inactive.card}
      >
        <img style={style.inactive.img} src={this.props.url} />
        <h1 style={style.inactive.name} > {this.props.name} </h1>
        <p style={style.inactive.info}> {this.props.type} </p>
        <p style={style.inactive.info}> Chambres: {this.props.rooms} </p>
        <p style={style.inactive.info}> {this.props.size} </p>
        <button style={style.inactive.button} > Plus d'info </button>
      </div>
    );
  };
};
