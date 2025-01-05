import './Homepage.css';
import Header from '../Header.js'
import Main from './Main.js'
import Nav from '../Nav.js'
import Footer from '../Footer.js'
import Testimonials from './Testimonials.js'
import Chicago from './Chicago.js'


function Homepage() {
  return (
    <div className='container'>
      <Header className="header"/>
      <Nav className="navbar"/>
      <Main/>
      <Testimonials/>
      <Chicago/>
      <Footer/>
    </div>
  );
}

export default Homepage;
