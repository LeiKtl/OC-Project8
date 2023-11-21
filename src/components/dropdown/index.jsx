import './dropdown.scss';
import arrow from '../../assets/arrowDropdown.svg';

function Dropdown(props) {
    return (
        <div className='dropdown'>
            <h2>{props.title}</h2>
            <img src={arrow} alt="Flèche pour ouvrir le contenant" />
        </div>
    )
};

export default Dropdown;