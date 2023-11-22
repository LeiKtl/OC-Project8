import { Link } from 'react-router-dom';
import './cardItem.scss';

function CardItem({cover, title, id}) {
    return (
    <Link to={`/accomodationSheet/${id}`}>
        <li className='cardItem'>
            
            <div className='gradient'></div>
            <img src={cover} alt={`${title} cover`} />
            <h2>{title}</h2>
        </li>
    </Link>
    )
}

export default CardItem;