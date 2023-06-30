import React from 'react';
import { MdDeliveryDining } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import specialMenusData from '../json/specialMenusData.json';
import Dessert1 from "../assets/greeksalad.jpg";
import Dessert2 from "../assets/bruchetta.svg";
import Dessert3 from "../assets/lemondessert.jpg";
import "../styles/SpecialCard.css";

const SpecialsCard = () => {
   const specialMenusItems = specialMenusData.map(menu => {
      let image;
      switch (menu.image) {
         case "greeksalad.jpg":
            image = Dessert1;
            break;
         case "bruchetta.svg":
            image = Dessert2;
            break;
         case "lemondessert.jpg":
            image = Dessert3;
            break;
         default:
            image = null;
            break;
      }

      const title = menu.title;
      const price = menu.price;
      const description = menu.description;
      const order = menu.order;

      return (
         <div key={title}>
            <div className="special-card-container">
               <div className="image-container">
                  <img src={image} alt="Special dessert" />
               </div>
               <div className="special-card-text">
                  <div className="special-card-title">
                     <h3>{title}</h3>
                     <h3 className="price-tag">{price}</h3>
                  </div>
                  <p>{description}</p>
                  <NavLink to="#">
                     <h4>
                        {order}
                        {<MdDeliveryDining size={30} style={{ color: "#333333", marginLeft: "10px" }} />}
                     </h4>
                  </NavLink>
               </div>
            </div>
         </div>
      );
   });

   return (
      <div>
         <div className="special-card">
            {specialMenusItems}
         </div>
      </div>
   );
}

export default SpecialsCard;