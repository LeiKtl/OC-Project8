import './home.scss';
import bannerHome from '../../assets/homeBanner.svg';
import Banner from '../../components/banner';
import CardsList from '../../components/cardsList';
import { lodgingList } from '../../datas/lodgingList';

function Home() {
    return (
        <main>
            <Banner src={bannerHome} alt="Bannière de la page d'acceuil" tagLine="Chez vous, partout et ailleurs"/>
            <CardsList data={lodgingList}/>
        </main>
    )
};

export default Home;