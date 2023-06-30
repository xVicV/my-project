import React from 'react';
import "../styles/HeaderElement.css";
import Logo from "../assets/hlogo.png"
import Nav from './Nav';
import { NavLink } from 'react-router-dom';
import HambNav from './HambNav';

const Navbar = () => {

   return (
      <div className="header">
         <div className="header-wrapper">
            <div className="image-wrapper">
               <NavLink to="/">{<img className="logo-img" src={Logo} alt="Little Lemon logo" />}</NavLink>
            </div>
            <Nav />
            <HambNav />
         </div>
      </div>
   )
}

export default Navbar