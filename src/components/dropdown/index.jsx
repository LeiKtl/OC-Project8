import './dropdown.scss';
import PropTypes from 'prop-types';
import arrow from '../../assets/arrowDropdown.svg';
import { useState, useRef } from 'react';

function Dropdown(props) {
    const dropdownRef = useRef(null);
    const dropdownHeaderRef = useRef(null);
    const dropdownContentRef = useRef(null);
    const [isClosed, setIsClosed] = useState(true);

    function toggle() {
        setIsClosed(!isClosed)

        window.setTimeout(() => {
            dropdownRef.current.style.height = 'auto';
            
        }, 300);

        const headerHeight = dropdownHeaderRef.current.offsetHeight;
        const contentHeight = dropdownContentRef.current.offsetHeight;

        if(!isClosed) {
            dropdownContentRef.current.style.position = 'absolute';
            dropdownRef.current.style.height = `${headerHeight + contentHeight}px`;
            window.setTimeout(() => {
                dropdownRef.current.style.height = `${headerHeight}px`;
            }, 0);
        } else {
            dropdownContentRef.current.style.position = 'relative';
            dropdownRef.current.style.height = `${headerHeight}px`;
            window.setTimeout(() => {
                dropdownRef.current.style.height = `${headerHeight + contentHeight}px`;
            }, 0);
        }
    };
    

    return (
        <section className='container_dropdown' onClick={() => toggle()} ref={dropdownRef} >
            <div className='container_dropdown__btn' ref={dropdownHeaderRef} >
                <h2 className='container_dropdown__title' >{props.title}</h2>
                <img className={isClosed ? 'container_dropdown__arrow container_dropdown__arrow--close' : 'container_dropdown__arrow container_dropdown__arrow--open'} src={arrow} alt="Flèche pour ouvrir le contenant" />
            </div>

            <div className={isClosed ? 'container_dropdown__content container_dropdown__content--notActive' : 'container_dropdown__content container_dropdown__content--active'} ref={dropdownContentRef}>
            {props.title === "Equipements" ? (
                <ul className={isClosed ? 'container_dropdown__content--text' : 'container_dropdown__content--text'}>
                    {props.textContent}
                </ul>
            ) : (
                <p className={isClosed ? 'container_dropdown__content--text' : 'container_dropdown__content--text '}>{props.textContent} </p>
            )}   
            </div>
        </section>
    ) 
};

Dropdown.propTypes = {
    title : PropTypes.string,
};

export default Dropdown;