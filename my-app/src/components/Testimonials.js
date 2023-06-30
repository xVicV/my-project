import React from 'react';
import TestimonialCard from './TestimonialCard';
import testimonialData from '../json/testimonialData.json';
import "../styles/Testimonials.css";

const Testimonials = () => {
   return (
      <section className="testimonials">
         <article className="testimonials-topbar">
            <h1>Testimonials</h1>
         </article>
         <section className="testimonials-cards">
            {testimonialData.map((testimonial, index) => (
               <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  description={testimonial.description}
               />
            ))}
         </section>
      </section>
   );
}

export default Testimonials;
