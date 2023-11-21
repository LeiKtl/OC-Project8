import './home.scss';
import bannerHome from '../../assets/homeBanner.svg';
import Banner from '../../components/banner';
import CardList from '../../components/cardList';
import { lodgingList } from '../../datas/lodgingList';

function Home() {
    return (
        <main>
            <Banner src={bannerHome} alt="Bannière de la page d'acceuil" tagLine="Chez vous, partout et ailleurs"/>
            <CardList data={lodgingList}/>
        </main>
    )
};

export default Home;