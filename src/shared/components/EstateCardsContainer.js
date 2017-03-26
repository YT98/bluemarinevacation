import React from 'react';
import EstateCard from './EstateCard';

export default class EstateCardsContainer extends React.Component {
  render() {
    return (
      <div class="estate-cards-wrapper">
        <EstateCard name={this.props.data[0].name} url={this.props.data[0].url} rooms="2" type={this.props.data[0].type} size="420m2" id={this.props.data[0].id}/>
        <EstateCard name={this.props.data[0].name} url={this.props.data[0].url} rooms="2" type={this.props.data[0].type} size="420m2" id={this.props.data[0].id}/>
        <EstateCard name={this.props.data[0].name} url={this.props.data[0].url} rooms="2" type={this.props.data[0].type} size="420m2" id={this.props.data[0].id}/>
        <EstateCard name={this.props.data[0].name} url={this.props.data[0].url} rooms="2" type={this.props.data[0].type} size="420m2" id={this.props.data[0].id}/>
        <EstateCard name={this.props.data[0].name} url={this.props.data[0].url} rooms="2" type={this.props.data[0].type} size="420m2" id={this.props.data[0].id}/>
      </div>
    );
  };
};
