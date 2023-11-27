import './dropdown.scss';
import arrow from '../../assets/arrowDropdown.svg';
import { useState } from 'react';

function Dropdown(props) {

    const [isClosed, setIsClosed] = useState(true);

    function toggle() {
        setIsClosed(!isClosed);

    };

    return (
        <section className='container_dropdown'>
            <div className='container_dropdown__btn' onClick={() => toggle()}>
                <h2 className='container_dropdown__title'>{props.title}</h2>
                <img className={isClosed ? 'container_dropdown__arrow' : 'container_dropdown__arrow container_dropdown__arrow--active'} src={arrow} alt="Flèche pour ouvrir le contenant" />
            </div>
            
            {props.title === "Description" ? (
                <p className={isClosed ? 'container_dropdown__content container_dropdown__content--hide' : 'container_dropdown__content'}>{props.textContent}</p>
            ) : (
                <ul className={isClosed ? 'container_dropdown__content container_dropdown__content--hide' : 'container_dropdown__content'}>
                    {props.textContent}
                </ul> 
            )}     
           
        </section>
    ) 
};

export default Dropdown;