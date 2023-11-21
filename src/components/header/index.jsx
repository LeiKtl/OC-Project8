import { Link } from 'react-router-dom';
import logo from '../../assets/LOGOcomputerLogo.svg';
import logoMobile from '../../assets/LOGOmobileLogo.svg';
import './header.scss';

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo Kasa" className='logoComputer'/>
            <img src={logoMobile} alt="Logo Kasa" className='logoMobile'/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
        </header>
    )
};

export default Header;