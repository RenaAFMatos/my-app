import React from 'react';
import './ReserveTable.css';
import Header from '../Header.js';
import Nav from '../Nav.js';
import Footer from '../Footer.js';
import { Link } from 'react-router-dom';

export default function ConfirmedBooking() {
  return (
    <div className='container'>
      <div className='header'><Header/></div>
      <div className='nav-bar'><Nav/></div>
      <div className='confirmation-content'>
        <div className='confirmation-card'>
          <h1>Booking Confirmed!</h1>
          <div className='confirmation-details'>
            <h2>Thank you for your reservation</h2>
            <p>We look forward to serving you at Little Lemon!</p>
            <p>A confirmation email has been sent to your email address.</p>
          </div>
          <Link to="/" className='home-button'>
            Return to Homepage
          </Link>
        </div>
      </div>
      <div className='footer'><Footer/></div>
    </div>
  );
}
