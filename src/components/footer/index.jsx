import logo from '../../assets/LOGOfooterLogo.svg';
import './footer.scss';

function Footer() {
    return (
        <footer className='footer'>
            <img className='footer__img' src={logo} alt="Logo Kasa" />
            <p className='footer__content'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
};

export default Footer;