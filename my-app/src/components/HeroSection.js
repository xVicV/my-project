import React from 'react';
import "../styles/HeroSection.css";
import { NavLink } from 'react-router-dom';
import HeroImage from "../assets/gourmet.jpg"

const HeroSection = () => {
   return (
      <div className="hero-section-background">
         <div className="hero-section-container">
            <div className="section-left">
               <h1>Little Lemon</h1>
               <h2>Chicago</h2>
               <p>Welcome to our family-owned Mediterranean restaurant! We specialize in serving traditional dishes with a modern twist. Our focus is on combining the flavors you love with innovative techniques to create a memorable culinary journey. Come join us and discover the perfect blend of tradition and creativity on your plate.</p>
               <NavLink to="/reservations"><button className="btn">Reserve a Table</button></NavLink>
            </div>
            <div className="section-right">
               <div className="image-box">
                  <img src={HeroImage} alt="Serving delicious dish" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeroSection