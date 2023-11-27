import './tag.scss';

function Tag(props) {
    return (
        <li className='tag'>{props.textContent}</li>  
    )  
};

export default Tag;