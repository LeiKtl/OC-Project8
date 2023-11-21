import './home.scss';
import Banner from '../../components/banner';
import CardList from '../../components/cardList';
import { lodgingList } from '../../datas/lodgingList';

function Home() {
    return (
        <main>
            <Banner tagLine="Chez vous, partout et ailleurs"/>
            <CardList data={lodgingList}/>
        </main>
    )
};

export default Home;