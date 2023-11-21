import './banner.scss';

function Banner(props) {
    return (
        <div className='banner'>
            <img src={props.src} alt={props.alt} />
            <p>{props.tagLine}</p>
        </div>
    )
};

export default Banner;