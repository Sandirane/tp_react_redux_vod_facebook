import React from 'react';
import { connect } from 'react-redux';
import './Login.css';

//Création de la page de connexion html

const Connexion = () => (
  
  <center>
  <form className='form-signin'>
    <h1 className='h3 mb-3 font-weight-normal'>Authentification</h1>
    <input type='email' className='form-control' placeholder='E-mail' required />
    <input type='password' className='form-control' placeholder='Mot de passe' required />
    <button className='btn btn-lg btn-primary btn-block' type='submit'>Connexion</button>
  </form>
  </center>
);

export default connect()(Connexion);
