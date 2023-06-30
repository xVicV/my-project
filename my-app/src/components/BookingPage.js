import React from 'react';
import "../styles/Booking.css";
import Form from './Form';

function BookingPage() {

   return (
      <div className="res-content-wrapper">
         <div className="res-content-container">
            <div className="text">
               <h2>Discover the ideal mix of traditional food</h2>
               <p>At Little Lemon, we are extremely proud to offer our customers a fantastic luxury experience that combines a hint of tradition food.</p>
               <p>Reserve a table with us to indulge in this extraordinary experience.</p>
            </div>
            <div className="form">
               <h1>Table Reservation</h1>
               <p>Please complete and submit the form below to make a reservation for your table at Little Lemon!</p>
               <Form />
            </div>
         </div>
      </div>
   )
}

export default BookingPage