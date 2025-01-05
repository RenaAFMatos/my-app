import bruschetta from "../../assets/images/bruchetta.svg";
import greek_salad from "../../assets/images/greek-salad.jpg";
import lemon_dessert from "../../assets/images/lemon dessert.jpg";
import restaurant_food from "../../assets/images/restauranfood.jpg"

function Main() {
  return (
    <main className="main">
      <div className="hero-wrapper">
        <div className="hero">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist
            </p>
            <button className="button">Reserve a table</button>
          </div>
          <img src={restaurant_food} alt="Restaurant food presentation" className="hero-photo"/>
        </div>
      </div>
      <div className="highlights">
        <h1 className="titles">This weeks specials</h1>
        <button className="button">Online Menu</button>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={greek_salad} alt="Our greek salad" className="photo" />
          <h3>Greek Salad</h3>
          <h3>$ 12.99</h3>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.{" "}
          </p>
          <h3 className="order">Order a delivery</h3>
        </div>
        <div className="card">
          <img src={bruschetta} alt="Our bruschetta" className="photo" />
          <h3>Bruchetta</h3>
          <h3>$ 5.99</h3>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared
            with garlic and seasoned with salt and olive oil.
          </p>
          <h3 className="order">Order a delivery</h3>
        </div>
        <div className="card">
          <img
            src={lemon_dessert}
            alt="Our lemon dessert"
            className="photo"
          />
          <h3>Lemon Dessert</h3>
          <h3>$ 5.00</h3>
          <p>
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be
            imagined.
          </p>
          <h3 className="order">Order a delivery</h3>
        </div>
      </div>
    </main>
  );
}

export default Main;
