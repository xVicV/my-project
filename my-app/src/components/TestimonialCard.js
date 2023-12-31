import ImageEye from '../assets/icon _eye_.svg';
import "../styles/Testimonials.css";

export default function TestimonialCard(props) {
   return (
      <article className="testimonial-card">
         <img src={ImageEye} alt="delivery Icon"></img>
         <h3>{props.name}</h3>
         <p>{props.description}</p>
      </article>
   );
}