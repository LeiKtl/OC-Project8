import './about.scss';
import bannerAbout from '../../assets/aboutBanner.svg'
import Banner from '../../components/banner';
import Dropdown from '../../components/dropdown';
import { aboutList } from '../../datas/aboutList'

function About() {

    return (
        <main>
            <Banner src={bannerAbout} alt="Bannière de la page a propos"/>
            <div className='containerDropdowns'>
                {aboutList.map(({title, description, id}) => (
                    <Dropdown key={id} title={title} textContent={description} />
                ))}    
            </div>
        </main>
    );
};

export default About