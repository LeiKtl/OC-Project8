import './housingSheet.scss';
import { housingList } from '../../datas/housingList';
import Carrousel from '../../components/carrousel';
import Dropdown from '../../components/dropdown';
import Tag from '../../components/tag';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Sheet () {
    const {id} = useParams();
    const navigate = useNavigate();
    
    const housing = housingList.find(house => house.id === id);

    useEffect(() => {
        if (!housing) {
            navigate("/error404");
        }
    })

        return (
            <main className='sheet'>
                <Carrousel numbSlides={housing.pictures.length} src={housing.pictures} alt="Photos de " />
                <section className='sheet_all_informations'>
                    <section className='sheet__informations'>
                        <h2 className='sheet__informations--title'>{housing.title}</h2>
                        <p className='sheet__informations--content'>{housing.location}</p>
                        <ul className='sheet__informations--tag-list'>
                            {housing.tags.map((tag, index) => (
                                <Tag key={index} textContent={tag}/>
                            ))}
                        </ul>
                    </section>
                    <section className='sheet__member'>
                        <h3 className='sheet__member--name'>{housing.host.name}</h3>
                        <img className='sheet__member--img' src={housing.host.picture} alt=''/>
                        <div className='sheet__member--stars'>

                        </div>
                    </section>
                </section>

                <section className='sheet__dropdown'>
                    <Dropdown title="Description" textContent={housing.description} />
                    <Dropdown title="Equipements" textContent={
                    <>
                    {housing.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li> 
                     ))}
                    </>}
                    />
                </section>
            </main>
        )
}

export default Sheet;