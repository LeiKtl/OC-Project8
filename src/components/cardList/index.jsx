import './cardList.scss';
import CardItem from '../cardItem';


function CardList({data}) {
    return (
        <div className='cards'>
            <ul className='cardList'>
                {data.map(({id, cover, title}) => (
                    <CardItem 
                        key={id}
                        cover={cover}
                        title={title}
                    />
                ))}
            </ul>
        </div>
    )
};

export default CardList;