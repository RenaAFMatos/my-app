import './ReserveTable.css';
import Header from '../Header.js'
import Nav from '../Nav.js'
import Footer from '../Footer.js'
import ChooseTable from './ChooseTable.js'
import Forms from './Forms.js'

function ReserveTable() {
  return (
    <div className='container'>
      <div className='header'><Header/></div>
      <div className='nav-bar'><Nav/></div>
      <div className='reservation-content'>
        <ChooseTable/>
        <Forms/>
      </div>
      <div className='footer'><Footer/></div>
    </div>
  );
}

export default ReserveTable;
