import './banner.scss';

function Banner(props) {
    return (
        <div className='banner'>
            <img className='banner__img' src={props.src} alt={props.alt} />
            <p className='banner__content'>{props.tagLine}</p>
        </div>
    )
};

export default Banner;