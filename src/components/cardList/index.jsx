import './cardList.scss';
import { lodgingList } from '../../datas/lodgingList';
import CardItem from '../cardItem';

function CardList() {
    return (
        <div className='cards'>
            <ul className='cardList'>
                {lodgingList.map(({ id, title, cover }) => (
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