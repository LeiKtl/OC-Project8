import './home.scss';
import bannerHome from '../../assets/homeBanner.svg';
import Banner from '../../components/banner';
import CardsList from '../../components/cardsList';
import { housingList } from '../../datas/housingList';

function Home() {
    return (
        <main>
            <Banner src={bannerHome} alt="Bannière de la page d'acceuil" tagLine="Chez vous, partout et ailleurs"/>
            <CardsList data={housingList}/>
        </main>
    )
};

export default Home;