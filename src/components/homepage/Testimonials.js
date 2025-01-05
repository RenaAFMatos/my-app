import Bella from "../../assets/images/Bella.jpg";
import Johnny from "../../assets/images/Johnny.jpg";
import Kim from "../../assets/images/Kim.jpg";
import Silvia from "../../assets/images/Silvia.jpg";

function Testimonials() {
  return (
    <div className="testimonials-wrapper">
      <h1 className="testimonial-title">Testimonials</h1>
      <div className="rating-card-container">
        <div className="rating-card">
          <h3>Rating</h3>
          <img src={Johnny} alt="Johnny's Rating" className="profile-pic"/>
          <h4>Johnny</h4>
          <p>
            “Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”
          </p>
        </div>
        <div className="rating-card">
          <h3>Rating</h3>
          <img src={Silvia} alt="Silvia's Rating" className="profile-pic"/>
          <h4>Silvia</h4>
          <p>“We had such a great time celebrating my grandmothers bitthday!”</p>
        </div>
        <div className="rating-card">
          <h3>Rating</h3>
          <img src={Bella} alt="Bella's Rating" className="profile-pic"/>
          <h4>Bella</h4>
          <p>“Best Feta Salad in town. Flawless everytime!”</p>
        </div>
        <div className="rating-card">
          <h3>Rating</h3>
          <img src={Kim} alt="Kim's Rating" className="profile-pic"/>
          <h4>Kim</h4>
          <p>“Such a chilled out atmosphere - love it!”</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
