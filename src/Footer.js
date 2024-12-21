import logo from "./assets/images/Logo.svg";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Restaurant logo" />
      <ul>
        <h6>Contacts</h6>
        <li>First contact</li>
        <li>Second contact</li>
        <li>Third contact</li>
      </ul>
      <ul>
        <h6>Doormat Navigaton</h6>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/order-online">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
      <ul>
        <h6>Social Media</h6>
        <li>
          <a href="/facebook-page">Facebook</a>
        </li>
        <li>
          <a href="/instagram-page">Instagram</a>
        </li>
        <li>
          <a href="/twitter-page">Twiter</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
