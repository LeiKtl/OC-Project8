import star from '../../assets/star.svg';
import PropTypes from 'prop-types';
import './stars.scss';

function Stars(props) {
    const rate = [];

    for (let i = 0; i < 5; i++) {
        rate.push(
            <img className={ props.data > i ? 'stars__container--img stars__container--img--active' : 'stars__container--img'} key={i} src={star} alt=''/>
        )
    }

    return (
        <div className='stars__container'>
            {rate}
        </div>
    ) 
};

Stars.propTypes = {
    data : PropTypes.number,
};

export default Stars