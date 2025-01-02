import './App.css';
import Header from './Header'
import Main from './Main.js'
import Nav from './Nav.js'
import Footer from './Footer.js'

function App() {
  return (
    <div className='container'>
      <Header className="header"/>
      <Nav className="navbar"/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
