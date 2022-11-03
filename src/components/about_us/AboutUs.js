import './_about_us.scss';
import Beans from '../../resources/icons/black_beans.png';
import WrapperBeans from '../wrapper_beans/WrapperBeans';

const AboutUs = () => {
    return(
        <section className='about_us'>
            <div className='container'>
                <h4 className='title title_fz24 about_us__title'>About Us</h4>
                <WrapperBeans beans = {Beans} color = "dark"/>
                <div className='about_us__wrapper'>
                <p className='title title_fz14 about_us__text'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face
                </p>
                <p className='title title_fz14 about_us__text'>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend sonrepair day ladies now.
                </p>
                </div>
 
            </div>
        </section>
    )
}

export default AboutUs;