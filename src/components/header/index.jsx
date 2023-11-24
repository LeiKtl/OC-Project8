import { Link } from 'react-router-dom';
import logo from '../../assets/LOGOcomputerLogo.svg';
import logoMobile from '../../assets/LOGOmobileLogo.svg';
import './header.scss';

function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="Logo Kasa" className='header__logo--computer'/>
            <img src={logoMobile} alt="Logo Kasa" className='header__logo--mobile'/>
            <nav className='header__navbar'>
                <Link className='header__navbar--home' to="/">Accueil</Link>
                <Link className='header__navbar--about' to="/about">A propos</Link>
            </nav>
        </header>
    )
};

export default Header;