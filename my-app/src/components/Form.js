import React from 'react';
import '../styles/Booking.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
   name: yup.string().required('Full name is a required field!'),
   email: yup.string().required('Email is a required field!').email('Email is not valid!'),
   telephone: yup
      .string()
      .required('Telephone is a required field!')
      .matches(
         /^[0-9()+-]*$/,
         'Phone number must be a valid phone number'
      ),
   guests: yup.string().min(1, 'There must be at least 1 guest!').required('Please specify the number of guests per table!'),
   date: yup.string().required('Please select the date and time!'),
});

function Form() {
   const { handleSubmit, register, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
      mode: 'onBlur',
   });

   const formSubmit = (data) => {
      console.table(data);
   };

   return (
      <form onSubmit={handleSubmit(formSubmit)}>
         <fieldset>
            <div className="field">
               <label htmlFor="name">Full Name *</label>
               <input type="text" placeholder="John Smith" name="name" {...register('name')} />
               {errors.name && <span className="error-message">{errors.name.message}</span>}
            </div>
            <div className="field">
               <label htmlFor="email">Email *</label>
               <input type="text" placeholder="email@example.com" name="email" {...register('email')} />
               {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>
            <div className="field">
               <label htmlFor="telephone">Telephone *</label>
               <input type="tel" placeholder="Enter your telephone number" name="telephone" {...register('telephone')} />
               {errors.telephone && <span className="error-message">{errors.telephone.message}</span>}
            </div>
            <div className="field occasion">
               <label htmlFor="occasion">Occasion (optional)</label>
               <div className="options">
                  <select name="occasion" {...register('occasion')}>
                     <option value="select">Select occasion</option>
                     <option value="birthday">Birthday</option>
                     <option value="engagement">Engagement</option>
                     <option value="anniversary">Anniversary</option>
                  </select>
               </div>
            </div>
            <div className="field guest">
               <label htmlFor="guests">Guests *</label>
               <input type="number" placeholder="2" name="guests" {...register('guests')} />
               {errors.guests && <span className="error-message">{errors.guests.message}</span>}
            </div>
            <div className="field">
               <label htmlFor="date">Date & Time *</label>
               <input type="datetime-local" name="date" {...register('date')} />
               {errors.date && <span className="error-message">{errors.date.message}</span>}
            </div>
            <button className="reserve-btn" type="submit">
               Reserve
            </button>
         </fieldset>
      </form>
   );
}

export default Form;
