import bannerHome from '../../assets/homeBanner.svg';
import './banner.scss';

function Banner(props) {
    return (
        <div className='banner'>
            <img src={bannerHome} alt="Home page banner" />
            <p>{props.tagLine}</p>
        </div>
    )
};

export default Banner;