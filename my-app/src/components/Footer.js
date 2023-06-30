import React from 'react';
import "../styles/Footer.css";
import Logo from "../assets/logo.png";

const Footer = () => {
   return (
      <div>
         <div className="footer-background">
            <div className="footer-container">
               <div className="footer-content">
                  <img src={Logo} alt="Logo" />
                  <div className="locations">
                     <h5>LOCATIONS</h5>
                     <ul>
                        <li>Michigan Avenue</li>
                        <li>State Street</li>
                        <li>Wacker Drive</li>
                     </ul>
                  </div>
               <div className="opening-times">
                  <h5>OPENING TIMES</h5>
                     <ul>
                        <li>Mon - Wed: 10:00AM - 10:00PM</li>
                        <li>Fri: 12:00PM - 12:00AM</li>
                        <li>Sat - Sun: 10:30AM - 11:00PM</li>
                     </ul>
                  </div>
                  <div className="contact">
                     <h5>CONTACT US</h5>
                     <ul>
                        <li>Little Lemon Restaurant</li>
                        <li>Tel: <a href="tel:+13125551234">+1 (312) 555-1234</a></li>
                        <li>Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
                     </ul>
                  </div>
               </div>
               <div className="copyright">
                  <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer