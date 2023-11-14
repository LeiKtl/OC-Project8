import logo from '../../assets/LOGOcomputerLogo.svg';
import logoMobile from '../../assets/LOGOmobileLogo.svg'
import './header.scss';

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo de Kasa" className='logoComputer'/>
            <img src={logoMobile} alt="Logo de Kasa" className='logoMobile'/>
            <nav>
                <a href="#">Accueil</a>
                <a href="#">A propos</a>
            </nav>
        </header>
    )
};

export default Header;