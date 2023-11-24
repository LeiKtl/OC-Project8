import './cardsList.scss';
import Card from '../card';


function CardsList({data}) {
    return (
        <div className='cards'>
            <ul className='cards-list'>
                {data.map(({id, cover, title}) => (
                    <Card 
                        key={id}
                        id={id}
                        cover={cover}
                        title={title}
                    />
                ))}
            </ul>
        </div>
    )
};

export default CardsList;