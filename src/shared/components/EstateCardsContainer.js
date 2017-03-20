import React from 'react';
import EstateCard from './EstateCard';

export default class EstateCardsContainer extends React.Component {

  render() {

    let style = {
      card: {
        height: '350px',
        width: '40%',
        margin: '10 10 10 10',
        overflow: 'hidden',
        backgroundColor: '#EDFAFD'
      },
      img: {

      },
      info: {

      },
      button: {

      }
    }



    return (
      <EstateCard data={this.props.data}/>
    );
  };
};
