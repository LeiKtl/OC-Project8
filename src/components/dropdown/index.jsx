import './dropdown.scss';
import arrow from '../../assets/arrowDropdown.svg';
import { useState } from 'react';

function Dropdown(props) {

    const [isClosed, setIsClosed] = useState(true);

    function toggle() {
        setIsClosed(!isClosed);
    };

    return (
        <div className='containerDropdown'>
            <div className='dropdownBtn' onClick={() => toggle()}>
                <h2>{props.title}</h2>
                <img src={arrow} alt="Flèche pour ouvrir le contenant" />
            </div>
            <p className={isClosed ? 'content hide' : 'content'}>{props.textContent}</p>
        </div>
    ) 
};

export default Dropdown;