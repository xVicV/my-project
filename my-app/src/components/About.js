import React from 'react';
import "../styles/About.css";
import MAImage1 from "../assets/MarioandAdrianA.png"
import MAImage2 from "../assets/MarioandAdrianB.png"

const About = () => {
   return (
      <article className="about-us">
         <section className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="about-subtext">
               Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
            </p>
         </section>
         <section className="double-image">
            <img className="about-img1" src={MAImage1} alt="MarioandAdrianA" />
            <img className="about-img2" src={MAImage2} alt="MarioandAdrianB" />
         </section>
      </article>
   );
};

export default About;
