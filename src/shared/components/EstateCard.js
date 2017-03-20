import React from 'react';

export default class extends React.Component {
  constructor(props){
    super(props),
    this.state = {data : this.props.data}
  }

  render() {
    return(
      <div>
        <img src={this.state.data[0].url} />
        <h1> {this.state.data[0].name} </h1>
        <p> {this.state.data[0].type} </p>
        <p> Chambres: 2 </p>
        <p> Superficie: 420m2 </p>
      </div>
    );
  };
};
