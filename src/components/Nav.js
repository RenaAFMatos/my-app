import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  
  return (
    <nav className="nav-bar">
      <ul className="nav-buttons">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="#">About</Link></li>
        <li><Link to="#">Menu</Link></li>
        <li><Link to="/booking" className={location.pathname === '/reserve-a-table' ? 'active' : ''}>Reservations</Link></li>
        <li><Link to="#">Order Online</Link></li>
        <li><Link to="#">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
