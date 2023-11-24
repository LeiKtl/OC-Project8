import './housingSheet.scss';
import { lodgingList } from '../../datas/lodgingList';
import Carrousel from '../../components/carrousel';
import Dropdown from '../../components/dropdown';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Sheet () {
    const {id} = useParams();
    const navigate = useNavigate();
    
    const housing = lodgingList.find(house => house.id === id);

    useEffect(() => {
        if (!housing) {
            navigate("/error404");
        }
    })

        return (
            <main className='sheet'>
                <Carrousel />
                <h2>{housing.title}</h2>
                <p>{housing.location}</p>
    
                <div className='sheet__dropdown'>
                    <Dropdown title="Description" textContent={housing.description} />
                    <Dropdown title="Equipements" textContent={
                    <ul>
                    {housing.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li> 
                     ))}
                    </ul>}
                    />
                </div>
            </main>
        )
}

export default Sheet;