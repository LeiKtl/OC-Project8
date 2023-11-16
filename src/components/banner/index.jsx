import bannerHome from '../../assets/homeBanner.svg';
import './banner.scss';

function Banner() {
    return (
        <div className='banner'>
            <img src={bannerHome} alt="Home page banner" />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
};

export default Banner;