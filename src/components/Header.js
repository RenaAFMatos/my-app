import logo from '../assets/images/Logo.svg'

function Header() {
    return <header className='header'>
        <img src={logo} alt="Restaurant logo"/>
    </header>;
}

export default Header;