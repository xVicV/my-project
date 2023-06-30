import React, { useState, useEffect } from 'react';
import "../styles/HambNav.css";
import NavLinks from './NavLinks';
import { GrMenu, GrClose } from "react-icons/gr";

const HambNav = () => {
   const [open, setOpen] = useState(false);
   const closeMenu = <GrMenu className="hamburger" size="20px" onClick={() => setOpen(!open)} />;
   const openMenu = <GrClose className="hamburger close-menu" size="20px" onClick={() => setOpen(!open)} />;

   const closeMobileMenuOnClick = () => setOpen(false);

   useEffect(() => {
      if (open) {
         document.body.classList.add('menu-open');
      } else {
         document.body.classList.remove('menu-open');
      }
   }, [open]);

   return (
      <nav className="mobile-nav">
         {open ? openMenu : closeMenu}
         {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenuOnClick} />}
      </nav>
   );
};

export default HambNav;