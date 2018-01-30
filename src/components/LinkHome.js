import React from 'react';
import { Link } from 'react-router-dom';

//Sous-lien de redirection 

const Main = () => (
  <nav className='navbar navbar-light bg-light'>
    <Link className='navbar-brand' to='/home'>New Releases</Link>
    <Link className='navbar-brand' to='/home/top-picks'>Top Picks</Link>
    <Link className='navbar-brand' to='/home/pre-order'>Pre Order</Link>
    <Link className='navbar-brand' to='/home/last-chance'>Last Chance</Link>
  </nav>
)

export default Main;
