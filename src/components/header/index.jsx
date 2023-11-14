import logo from '../../assets/LOGOcomputerLogo.svg';
import './header.scss';

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo de Kasa" />
            <nav>
                <a href="#">Accueil</a>
                <a href="#">A propos</a>
            </nav>
        </header>
    )
};

export default Header;