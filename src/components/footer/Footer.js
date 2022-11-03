import './_footer.scss';
import Beans from '../../resources/icons/border_black_beans.png';
import BlackBeans from '../../resources/icons/black_beans.png';
import WrapperBeans from '../wrapper_beans/WrapperBeans';

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='container'>
                <div className='footer__nav'>
                    <div className='footer__text_icon'>
                        <img src = {Beans} alt = "beans"/>
                        <div className='title title_fz12 footer__item'>Coffee house</div>
                    </div>
                    <div className='title title_fz12 footer__item'>Our coffee</div>
                    <div className='title title_fz12 footer__item'>For your pleasure</div>
                </div>
                <WrapperBeans beans = {BlackBeans} color = "dark" />
            </div>
        </footer>
    )
}

export default Footer;