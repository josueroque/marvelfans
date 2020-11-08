import React from 'react';
import {Link} from 'react-router-dom';
//import { Menu } from '@material-ui/core';
import Logo from '../assets/logoMarvel.jpg';
function Menu() {

  return (
     
      <nav className="navbar">
      <div className="logo">
      <Link className="LinkTab"  to={{pathname: `/` , state:{}}}>
        <img alt="Marvel" src={Logo}></img>
      </Link> 
      </div>

      <input type="checkbox" id="burger-checkbox" />
      <label for="burger-checkbox" className="burger-label"></label>

      <ul className="navbar-list">

     

     
      
      <Link className="LinkTab"  to={{pathname: `/characters` , state:{}}}>
          <li className="navbar-item"><a href="/characters">CHARACTERS</a></li>
      </Link>   
          <li className="navbar-item"><a href="#quien-soy">COMICS</a></li>
          <li className="navbar-item"><a href="#batallas">STORIES</a></li>
        
      </ul>
      </nav>

  );
}

export default Menu;