import './cardItem.scss';

function CardItem({cover, title}) {
    return (
        <li className='cardItem'>
            <img src={cover} alt={`${title} cover`} />
            <h2>{title}</h2>
        </li>
    )
}

export default CardItem;