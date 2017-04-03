import React from 'react';
import Footer from './components/Footer';

export default class Layout extends React.Component {
  render() {
    return(
      <div>
        {this.props.children}
        <Footer />
      </div>
    );
  };
};
