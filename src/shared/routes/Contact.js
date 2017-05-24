import React from 'react';
import { Motion, spring } from 'react-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'whatwg-fetch';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameToggle: false,
      mail: '',
      mailToggle: false,
      phone: '',
      phoneToggle: false,
      select: '',
      info: '',
      introToggle: false,
      formToggle: false,
      infoToggle: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeInfo = this.handleChangeInfo.bind(this);
    this.handleNameToggle = this.handleNameToggle.bind(this);
    this.handleMailToggle = this.handleMailToggle.bind(this);
    this.handlePhoneToggle = this.handlePhoneToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleScroll() {
    let formTop = document.getElementById('form').getBoundingClientRect().top;
    if (formTop < 500) {
      this.setState({formToggle: true});
    };
    let infoTop = document.getElementById('info').getBoundingClientRect().top;
    if (infoTop < 400) {
      this.setState({infoToggle: true});
    }
  }

  //MAIL LOGIC HERE
  handleChangeName(event) {
    this.setState({name: event.target.value});
    this.handleNameToggle();
  }
  handleChangeMail(event) {
    this.setState({mail: event.target.value});
    this.handleMailToggle();
  }
  handleChangePhone(event) {
    this.setState({phone: event.target.value});
    this.handlePhoneToggle();
  }
  handleChangeSelect(event) {
    this.setState({select: event.target.value});
  }
  handleChangeInfo(event) {
    this.setState({info: event.target.value});
  }

  handleNameToggle() {
    if(this.state.name == '') {
      this.setState({nameToggle: false})
    } else {
      this.setState({nameToggle: true})
    }
  }
  handleMailToggle() {
    if(this.state.mail == '') {
      this.setState({mailToggle: false})
    } else {
      this.setState({mailToggle: true})
    }
  }
  handlePhoneToggle() {
    if(this.state.phone == '') {
      this.setState({phoneToggle: false})
    } else {
      this.setState({phoneToggle: true})
    }
  }
  handleSubmit() {
    let mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let phoneReg = /^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/
    let mailTest = mailReg.test(this.state.mail)
    let phoneTest = phoneReg.test(this.state.phone)

    if (mailTest == false || phoneTest == false) {
      let phone = phoneTest ? '' : 'Le numéro de téléphone est invalide.'
      let mail = mailTest ? '' : 'L\'addresse mail est invalide.'
      alert( "Il nous faut une addresse mail et un numéro de téléphone pour pouvoir vous recontacter!" + "\n" + phone + "\n" + mail)
    } else {
      fetch('https://www.holidayhomes7.com/sendmail', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          mail: this.state.mail,
          phone: this.state.phone,
          services: this.state.select,
          info: this.state.info,
          lang: 'Français'
        })
      }).catch(function(error) {
        alert('Votre message n\'a pas été envoyé du a un problème technique. Veuillez reéssayer plus tard. Vous pouvez toujours nous contacter à l\'addresse suivante: caucheferpaulinepro@gmail.com')
      }).then(
        alert('Votre message a été envoyé! Nous vous contacterons dans les plus bref délais.')
      );
    }
  }


  componentDidMount() {
    this.setState({introToggle: true});
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render () {

    return(
      <div class="parent-divs">

        <Motion style={{p: spring(this.state.introToggle ? 0 : -1000, {stiffness:100, damping: 26}), o: spring(this.state.introToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
          {({p, o}) =>
            <div>
              <div class="contact-header">
                <Navbar path={this.props.location.pathname}/>
                <div class="title" style={{opacity: `${o}`}}><h1> Contact </h1></div>
              </div>
              <div class="row intro-contact">
              <p class="col-md-6" style={{transform: `translateX(${p}px)`, opacity: `${o}`}}> Peu importe le continent dans lequel vous vivez, n'hésitez surtout pas à nous contacter, nous offrons notre service aux quatre coins du globe. Veuillez simplement remplir le formulaire ci-dessous et nous répondrons à toutes vos questions. Vous pouvez aussi contacter Pauline, notre représentante aux ventes, grâce aux coordonnées plus bas sur cette page; elle se fera un plaisir de répondre à toutes vos requêtes !</p>
              </div>
            </div>
          }
        </Motion>

        <Motion style={{o: spring(this.state.formToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
          {({o}) =>
            <div class="contact-formulaire-container" id="form">
              <div class="contact-formulaire" style={{opacity: `${o}`}}>
                <h1> Formulaire </h1>
                <div>
                  <span className={this.state.nameToggle ? 'input input--jiro input--filled' : 'input input--jiro'}>
          					<input class="input__field input__field--jiro" type="text" id="input-10" value={this.state.name} onChange={this.handleChangeName}/>
          					<label class="input__label input__label--jiro" for="input-10">
          						<span class="input__label-content input__label-content--jiro"> Nom et prénom </span>
          					</label>
          				</span>

                  <span className={this.state.mailToggle ? 'input input--jiro input--filled' : 'input input--jiro'}>
          					<input class="input__field input__field--jiro" type="text" id="input-10" value={this.state.mail} onChange={this.handleChangeMail}/>
          					<label class="input__label input__label--jiro" for="input-10">
          						<span class="input__label-content input__label-content--jiro"> Adresse courriel </span>
          					</label>
          				</span>

                  <span className={this.state.phoneToggle ? 'input input--jiro input--filled' : 'input input--jiro'}>
          					<input class="input__field input__field--jiro" type="text" id="input-10" value={this.state.phone} onChange={this.handleChangePhone}/>
          					<label class="input__label input__label--jiro" for="input-10">
          						<span class="input__label-content input__label-content--jiro"> Numéro de téléphone </span>
          					</label>
          				</span>

                  <div class="multiple-choice">
                    <p> Vous cherchez: </p>
                    <select value={this.state.select} onChange={this.handleChangeSelect}>
                      <option value="Rien de particulier, je me renseigne." >Rien de particulier, je me renseigne.</option>
                      <option value="Une propriete pour passer mes vacances." >Une propriété pour passer mes vacances.</option>
                      <option value="Une propriété pour y vivre à l'année longue.">Une propriété pour y vivre à l'année longue.</option>
                      <option value="À flipper: acheter et rénover pour ensuite revendre.">À flipper: acheter et rénover pour ensuite revendre.</option>
                      <option value="À acheter une propriété dans le but de la mettre en location.">À acheter une propriété dans le but de la mettre en location.</option>
                    </select>
                  </div>

                  <div class="text-area">
                    <p> Information supplementaire </p>
                    <textarea value={this.state.info} onChange={this.handleChangeInfo}/>
                  </div>

                  <p> Sachez que, si vous le souhaitez, notre entreprise vous accompagne à chaque étape de votre projet: aide à la revente, gestion de la location de votre propriété, aide à son entretien… </p>

                  <button onClick={this.handleSubmit}><h4> Envoyer </h4></button>
                </div>
              </div>
            </div>
          }
        </Motion>

        <Motion style={{p: spring(this.state.infoToggle ? 0 : -1000, {stiffness:100, damping: 26}), o: spring(this.state.infoToggle ? 1 : 0, {stiffness: 30, damping: 26})}}>
          {({p, o}) =>
            <div class="row contact-info" id="info">
              <div class="col-md-4 col-sm-4" style={{transform: `translateX(${p}px)`, opacity: `${o}`}}>
                <img src="/public/img/pauline.jpg" class="img-responsive img-circle" />
              </div>
              <div class="nom col-md-4 col-sm-4" style={{opacity: `${o}`}}>
                <h3> Pauline Cauchefer </h3>
                <h4> Représentante aux ventes </h4>
              </div>
              <div class="info col-md-4 col-sm-4" style={{transform: `translateX(${-p}px)`, opacity: `${o}`}}>
                <h4> <i class="fa fa-phone"/> +1 438-497-0297 </h4>
                <h4> <i class="fa fa-envelope" /> paulinecaucheferpro@gmail.com </h4>
                <p> <i class="fa fa-phone"/> +1 438-497-0297 </p>
                <p> <i class="fa fa-envelope" /> caucheferpaulinepro@gmail.com </p>
              </div> 
            </div>
          }
        </Motion>

        <Footer path={this.props.location.pathname} />

      </div>
    );
  };
};
