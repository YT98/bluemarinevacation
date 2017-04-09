import React from 'react';
import Navbar from '../components/Navbar';

export default class Contact extends React.Component {
  render () {

    return(
      <div>
        <div class="contact-header">
          <Navbar />
          <h1> Contact </h1>
          <div class="contact-container">
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 contact-info">

            <h1> Contact </h1>
            <p> <i class="fa fa-address-book-o" style={{paddingRight: '10px'}}></i> 514-918-3412 </p>
            <p> <i class="fa fa-home" style={{paddingRight: '10px'}}></i> 55 Cercle Bernadette McDonald, St-Zotique H3Y 2Z8 </p>
            <p> <i class="fa fa-phone" style={{paddingRight: '10px'}}></i> info@glamextensions.com </p>

          </div>

          <div class="col-md-9 formulaire">

            <form class="col-md-6 col-sm-6 col-xs-12">
              <p> Prénom et nom de famille: </p>
              <input class="input_sm"/>
              <p> Addresse e-mail: </p>
              <input class="input_sm"/>
              <p> # de téléphone: </p>
              <input class="input_sm"/>
            </form>
            <form class="col-md-6 col-sm-6 col-xs-12">
              <p> Service(s) désirés: </p>
              <input class="input_sm"/>
              <p> Êtes-vous un robot? </p>
              <div class="g-recaptcha" data-sitekey="6Let4RUUAAAAAFn2ZHGE--GvQesi01RI-Es1KL-s"></div>
            </form>
            <form class="col-md-12 col-sm-12 col-xs-12">
              <p> Information supplémentaire: </p>
              <textarea class="input_la"/>
            </form>
            <div class="col-md-12 col-sm-12 col-xs-12">
            <button>
                <p> Envoyer </p>
            </button>
            </div>

          </div>
        </div>

      </div>
    );
  };
};
