import { Link } from 'react-router-dom';
import './card.scss';

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
}

export default Card;