import React from 'react';

function Nav() {
   return (
      <nav>
         <ul>
            <li>
               <a href="/home">Home</a>
            </li>
            <li>
               <a href="/about">About</a>
            </li>
            <li>
               <a href="/services">Services</a>
            </li>
            {/* Add more navigation links as needed */}
         </ul>
      </nav>
   );
}

export default Nav;