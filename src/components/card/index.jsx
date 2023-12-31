import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import './card.scss';

/**@description Send to the housing sheet when clicking on the card */
function Card({cover, title, id}) {
    return (
    <Link to={`/accomodationSheet/${id}`}>
        <li className='card'>
            <div className='card--gradient'></div>
            <img className='card__img' src={cover} alt={`${title} cover`} />
            <h2 className='card__title'>{title}</h2>
        </li>
    </Link>
    )
};

Card.propTypes = {
    cover : PropTypes.string,
    title : PropTypes.string,
    id : PropTypes.string,
};

export default Card;