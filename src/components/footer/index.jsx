import logo from '../../assets/LOGOfooterLogo.svg';
import './footer.scss';

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
};

export default Footer;