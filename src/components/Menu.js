import React from 'react';
import { Link } from 'react-router-dom';
//import './Menu.css';
/*<div class="nav-side-menu">
    <div class="brand">Brand Logo</div>
    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
  
        <div class="menu-list">
  
            <ul id="menu-content" class="menu-content collapse out">
                 <li>
                 <Link className='nav-link' to='/'>Login</Link>
                 </li>
                 <li>
                 <Link className='nav-link' to='/home'>Home</Link>
                 </li>
                 <li>
                 <Link className='nav-link' to='/video'>Video</Link>
                 </li>
            </ul>
     </div>
</div>
 */

//Création menu html

const Menu = () => (

  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <a class="navbar-brand" href="#">TP Facebook VOD </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
      <Link className='nav-link' to='/'>Login</Link>
      </li>
      <li class="nav-item">
      <Link className='nav-link' to='/home'>Home</Link>
      </li>
      <li class="nav-item">
      <Link className='nav-link' to='/video'>Video</Link>
      </li>    
    </ul>
  </div>  
</nav>
)

export default Menu;
