import TestimonialCard from './TestimonialCard';
import "../styles/Testimonials.css";

const testimonialData = [
   { name: "Emily Johnson", description: "The flavors in the dishes at Little Lemon are absolutely incredible. I was blown away by the taste and presentation." },
   { name: "Alexandra Miller", description: "I recently visited Little Lemon with my friends, and we had a fantastic experience. The food was outstanding, and the service was top-notch." },
   { name: "Daniel Thompson", description: "I'm a regular customer at Little Lemon, and I can confidently say that their Mediterranean cuisine is unmatched. Every dish is bursting with flavor and made with the freshest ingredients." },
   { name: "Sophia Martinez", description: "Little Lemon is my go-to restaurant for a delicious and healthy meal. The atmosphere is cozy, and the staff is always friendly and attentive." },
   { name: "Oliver Davis", description: "I tried Little Lemon for the first time last week, and I was impressed by the quality of the food. The attention to detail in each dish is remarkable." },
   { name: "Isabella Thompson", description: "As a vegetarian, I appreciate the wide range of options available at Little Lemon. Their vegetarian dishes are creative and packed with flavor." },
   { name: "William Adams", description: "Little Lemon exceeded my expectations in every way. The food is exceptional, the ambiance is inviting, and the staff goes above and beyond to ensure a memorable dining experience." },
   { name: "Sophie Anderson", description: "I can't get enough of the delicious food at Little Lemon. The flavors are bold and unique, and I find myself craving their dishes regularly." }
];

export default function Testimonials() {
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