import './carrousel.scss';
import arrowRight from '../../assets/Vector.svg';
import arrowLeft from '../../assets/Vectorleft.svg';
import { useState } from 'react';

function Carrousel(props) {

    const [picture, setPicture] = useState(0);

    function nextPicture() {
        if (picture === props.numbSlides -1) {
            setPicture(0);
        }
        else {
            setPicture(picture +1)
        }
    };

    function previewPicture() {
        setPicture(picture -1);
        if (picture === 0) {
            setPicture(props.numbSlides -1);
        }
        else {
            setPicture(picture -1)
        }
    }

    return (
        <div className='carrousel'>
            <img className='carrousel__img' src={props.src[picture]} alt={props.alt} />
            <div className='carrousel__arrow'>
                <img className={props.numbSlides === 1 ? 'hide' : 'carrousel__arrow--right'} src={arrowRight} alt="Flèche droite" onClick={nextPicture}/>
                <img className={props.numbSlides === 1 ? 'hide' : 'carrousel__arrow--left'} src={arrowLeft} alt="Flèche gauche" onClick={previewPicture}/>
            </div>
            
            <span className={props.numbSlides === 1 ? 'hide' : 'carrousel__pagination'}>{picture +1}/{props.numbSlides}</span>
        </div>
    )
}

export default Carrousel;