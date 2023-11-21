import './about.scss';
import bannerAbout from '../../assets/aboutBanner.svg'
import Banner from '../../components/banner';
import Dropdown from '../../components/dropdown';

function About() {
    return (
        <main>
            <Banner src={bannerAbout} alt="Bannière de la page a propos"/>
            <div className='containerDropdown'>
                <Dropdown title="Fiabilité" textContent=""/>
                <Dropdown title="Respect" textContent=""/>
                <Dropdown title="Service" textContent=""/>
                <Dropdown title="Sécurité" textContent=""/>
            </div>
        </main>
    )
}

export default About