import WrapperBeans from '../wrapper_beans/WrapperBeans';
import CoffeeImg from '../../resources/img/about_coffee.jpg';
import Beans from '../../resources/icons/black_beans.png';
import './_about_coffee_with_picture.scss';

const AboutCoffeeWithPicture = () => {
    return (
        <div className='about_coffee__wrapper'>
            <img src={CoffeeImg} alt = "coffee"/>
            <div className='about_coffee__content'>
                <div className='title title_fz24 about_coffee__title'>About it</div>
                <WrapperBeans beans = {Beans} color = "dark"/>
                <h4 className='title title_fz14' style={{"margin-top":"25px"}}>Country:<span> Brasil</span></h4>
                <h4 className='title title_fz14'>Description:<span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></h4>
                <h4 className='title title_fz14 about_coffee__price'>Price:<span> 16.99$</span></h4>
            </div>
        </div>
    )
}

export default AboutCoffeeWithPicture;