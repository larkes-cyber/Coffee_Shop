import './_promo.scss';
import WrapperBeans from '../wrapper_beans/WrapperBeans';
import BeansIcon from '../../resources/icons/beans.png';
const Promo = () => {
    return(
        <section className='promo'>
            <div className='container'>
                <h1 className='title title_fz40 promo__title'>Everything You Love About Coffee</h1>
                <WrapperBeans beans = {BeansIcon} color = "white"/>
                <h4 className='title title_fz24 promo__subtitle'>We makes every day full of energy and taste Want to try our beans?</h4>
                <button href='#' className='promo__button'><span className='title title_fz14'>More</span></button>
            </div>
        </section>
    )
}

export default Promo;