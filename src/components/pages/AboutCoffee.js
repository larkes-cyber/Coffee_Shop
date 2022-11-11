import AboutCoffeeWithPicture from '../about_coffee_with_picture/AboutCoffeeWithPicture';
import Footer from '../footer/Footer';
import PromoOurCoffee from '../promo_our_coffee/PromoOurCoffee';


const AboutCoffee = () => {
    return (
        <div>
          <PromoOurCoffee/>
          <AboutCoffeeWithPicture/>
          <div style={{"margin-top":"3%"}}>
             <Footer/>
          </div>
        </div>
    )
}

export default AboutCoffee;