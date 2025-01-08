import './Homepage.css';
import Header from '../Header.js'
import Main from './Main.js'
import Nav from '../Nav.js'
import Footer from '../Footer.js'
import Testimonials from './Testimonials.js'
import Chicago from './Chicago.js'

function Homepage() {
  return (
    <div className="container">
      <div className="header"><Header/></div>
      <div className="nav-bar"><Nav/></div>
      <Main/>
      <Testimonials/>
      <Chicago/>
      <div className="footer"><Footer/></div>
    </div>
  );
}

export default Homepage;
