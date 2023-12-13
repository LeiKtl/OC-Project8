import './tag.scss';
import PropTypes from 'prop-types';

function Tag(props) {
    return (
        <li className='tag'>{props.textContent}</li>  
    )  
};

Tag.propTypes = {
    textContent : PropTypes.string,
};

export default Tag;