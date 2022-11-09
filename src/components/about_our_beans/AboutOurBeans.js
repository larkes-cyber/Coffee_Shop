import './_about_our_beans.scss';
import Woman from '../../resources/img/woman_with_coffee.png';
import WrapperBeans from '../wrapper_beans/WrapperBeans';
import Beans from '../../resources/icons/black_beans.png';

const AboutOurBeans = () => {
    return(
        <section className='about_our_beans'>
            <div className='container'>
                <div className='about_our_beans__wrapper'>
                    <div><img src={Woman} className="about_our_beans__image" alt='woman_coffee'/></div>
                    <div className='about_our_beans__content'>
                        <h4 className='title title_fz24 about_our_beans__title'>About our beans</h4>
                        <WrapperBeans beans = {Beans} color = "dark" />
                        <div className='about_our_beans__wrap_text'>
                          <p className='title title_fz14 about_our_beans__text'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                          <p className='title title_fz14 about_our_beans__text'>Afraid at highly months do things on at. Situation recommend objection do intentionso questions. As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.</p>
                        </div>   
                    </div>
                </div>
                <div className='about_our_beans__divider'></div>
            </div>
        </section>
    )
}

export default AboutOurBeans;