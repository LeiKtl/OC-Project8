import { Link } from 'react-router-dom';
import './error.scss';

function Error() {
    return (
        <main className='error'>
            <span className='errorNumber'>404</span>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="link" to="/">Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default Error;