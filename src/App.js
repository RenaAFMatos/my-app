import { Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage.js';
import BookingPage from './components/reserve-a-table/BookingPage.js';
import ConfirmedBooking from './components/reserve-a-table/ConfirmedBooking';
import './App.css';
import { useReducer } from 'react';

// Export for testing
export function timesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return same available times regardless of date
      return state;
    default:
      return state;
  }
}

// Export for testing
export function initializeTimes() {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
}

function App() {
  const [availableTimes, dispatch] = useReducer(timesReducer, null, initializeTimes);

  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route 
          path="/booking" 
          element={
            <BookingPage 
              availableTimes={availableTimes}
              updateTimes={updateTimes}
            />
          } 
        />
        <Route path="/booking-confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </div>
  );
}

export default App;