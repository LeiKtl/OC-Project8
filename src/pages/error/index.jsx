import { Link } from 'react-router-dom';
import './error.scss';

function Error() {
    return (
        <main className='error'>
            <span className='error__number'>404</span>
            <p className='error__content'>Oups! La page que <br className='error__content--hide'/> vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default Error;