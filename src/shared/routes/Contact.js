import React from 'react';
import { Motion, spring } from 'react-motion';
import Navbar from '../components/Navbar';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueName: '',
      introToggle: false,
      formToggle: false,
      infoToggle: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleChange() {
    this.setState({valueName: event.target.value}, console.log(event.target.value));
  }

  handleScroll() {
    let formTop = document.getElementById('form').getBoundingClientRect().top;
    if (formTop < 500) {
      this.setState({formToggle: true});
    };
    let infoTop = document.getElementById('info').getBoundingClientRect().top;
    if (infoTop < 500) {
      this.setState({infoToggle: true});
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
              <p class="col-md-6" style={{transform: `translateX(${p}px)`, opacity: `${o}`}}> Peu importe le continent dans lequel vous vivez, n'hésitez surtout pas a nous contacter, nous offrons notre service aux quatre coins du globe. Veuillez simplement remplir le formulaire ci-dessous et nous répondrons à toutes vos questions. Vous pouvez aussi contacter Pauline, notre représentante aux ventes, grâce aux coordonnes plus bas sur cette page; elle se fera un plaisir de répondre a toutes vos requêtes !</p>
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
                  <span class="input input--jiro">
          					<input class="input__field input__field--jiro" type="text" id="input-10" />
          					<label class="input__label input__label--jiro" for="input-10">
          						<span class="input__label-content input__label-content--jiro"> Nom et prénom </span>
          					</label>
          				</span>

                  <span class="input input--jiro">
          					<input class="input__field input__field--jiro" type="text" id="input-10" />
          					<label class="input__label input__label--jiro" for="input-10">
          						<span class="input__label-content input__label-content--jiro"> Adresse courriel </span>
          					</label>
          				</span>

                  <span class="input input--jiro">
          					<input class="input__field input__field--jiro" type="text" id="input-10" />
          					<label class="input__label input__label--jiro" for="input-10">
          						<span class="input__label-content input__label-content--jiro"> Numéro de téléphone </span>
          					</label>
          				</span>

                  <span class="input input--jiro">
          					<input class="input__field input__field--jiro" type="text" id="input-10" />
          					<label class="input__label input__label--jiro" for="input-10">
          						<span class="input__label-content input__label-content--jiro"> Vous cherchez : </span>
          					</label>
          				</span>

                  <span class="input input--jiro">
          					<input class="input__field input__field--jiro" type="text" id="input-10" />
          					<label class="input__label input__label--jiro" for="input-10">
          						<span class="input__label-content input__label-content--jiro"> Information supplémentaire </span>
          					</label>
          				</span>

                  <p> Sachez que, si vous le souhaitez, notre entreprise vous accompagne à chaque étape de votre projet: aide à la revente, gestion de la location de votre propriété, aide à son entretien… </p>

                  <button><h4> Envoyer </h4></button>
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
                <p> <i class="fa fa-envelope" /> paulinecaucheferpro@gmail.com </p>
              </div> 
            </div>
          }
        </Motion>

      </div>
    );
  };
};
