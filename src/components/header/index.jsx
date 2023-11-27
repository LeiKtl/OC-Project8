import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/LOGOcomputerLogo.svg';
import logoMobile from '../../assets/LOGOmobileLogo.svg';
import './header.scss';

function Header() {

    const  {pathname} = useLocation();

    return (
        <header className='header'>
            <img src={logo} alt="Logo Kasa" className='header__logo--computer'/>
            <img src={logoMobile} alt="Logo Kasa" className='header__logo--mobile'/>
            <nav className='header__navbar'>
                <Link className={pathname === "/" ? 'header__navbar--home header__navbar--home--underline' : 'header__navbar--home'} to="/">Accueil</Link>
                <Link className={pathname === "/about" ? 'header__navbar--about header__navbar--about--underline' : 'header__navbar--about'} to="/about">A propos</Link>
            </nav>
        </header>
    )
};

export default Header;