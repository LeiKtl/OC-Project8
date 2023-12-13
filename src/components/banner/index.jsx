import './banner.scss';
import PropTypes from 'prop-types';

function Banner(props) {
    return (
        <div className='banner'>
            <img className='banner__img' src={props.src} alt={props.alt} />
            <p className='banner__content'>{props.tagLine}</p>
        </div>
    )
};

Banner.propTypes = {
    src : PropTypes.string,
    alt : PropTypes.string,
    tagLine : PropTypes.string,
};

export default Banner;