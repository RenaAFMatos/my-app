import { useState} from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  // Form fields state
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "1",
    occasion: "none"
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for date changes
    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', payload: new Date(value) });
    }
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await submitForm(formData);
    if (!success) {
      // Handle submission error
      console.error('Failed to submit booking');
    }
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          placeholder="First Name"
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          placeholder="Last Name"
          id="lname"
          name="lname"
          value={formData.lname}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          placeholder="Phone"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />

        <label htmlFor="date">Date of the reservation:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="time">Time of the reservation:</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleInputChange}
        >
          <option value="None">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Business">Business</option>
        </select>

        <input type="submit" value="Reserve the table!" />
      </form>
    </div>
  );
}
