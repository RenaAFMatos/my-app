import {useState, React, useReducer} from 'react';
import './ReserveTable.css';
import Header from '../Header.js'
import Nav from '../Nav.js'
import Footer from '../Footer.js'
import ChooseTable from './ChooseTable.js'
import BookingForm from './BookingForm.js'
import { fetchAPI } from './api'; // Assuming fetchAPI is imported from an api file
import { useNavigate } from 'react-router-dom';
import { submitAPI } from './api';

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload);
    default:
      return state;
  }
};

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    if (submitAPI(formData)) {
      navigate('/booking-confirmation');
      return true;
    }
    return false;
  };

  return (
    <div className='container'>
      <div className='header'><Header/></div>
      <div className='nav-bar'><Nav/></div>
      <div className='reservation-content'>
        <ChooseTable/>
        <BookingForm 
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
      <div className='footer'><Footer/></div>
    </div>
  );
}
