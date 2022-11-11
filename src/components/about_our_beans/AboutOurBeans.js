import './_about_our_beans.scss';

import WrapperBeans from '../wrapper_beans/WrapperBeans';
import Beans from '../../resources/icons/black_beans.png';

const AboutOurBeans = (props) => {
    return(
        <section className='about_our_beans'>
            <div className='container'>
                <div className='about_our_beans__wrapper'>
                    <div><img src={props.image} className="about_our_beans__image" alt='woman_coffee'/></div>
                    <div className='about_our_beans__content'>
                        <div className='title title_fz24 about_our_beans__title'>{props.title}</div>
                        <WrapperBeans beans = {Beans} color = "dark" />
                        <div className='about_our_beans__wrap_text'>
                          <p className='title title_fz14 about_our_beans__text'>{props.first_title}</p>
                          <p className='title title_fz14 about_our_beans__text'>{props.second_title}</p>
                        </div>   
                    </div>
                </div>
                <div className='about_our_beans__divider'></div>
            </div>
        </section>
    )
}

export default AboutOurBeans;