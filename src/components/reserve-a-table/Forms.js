function Forms() {
  return (
    <div className="form-wrapper">
      <form className="form">
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname" name="fname" required />
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname" name="lname" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone"/>
        <label htmlFor="date">Date of the reservation:</label>
        <input type="date" id="date" name="date" required />
        <label htmlFor="time">Time of the reservation:</label>
        <input type="time" id="time" name="time" required />
        <input type="submit" value="Reserve the table!" />
      </form>
    </div>
  );
}

export default Forms;
