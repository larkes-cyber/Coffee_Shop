import AboutOurBeans from "../about_our_beans/AboutOurBeans";
import PromoPleasureCoffee from "../promo_pleasure_coffee/PromoPleasureCoffee";
import CoffeeCard from '../coffee_card/CoffeeCard';
import Coffee from '../../resources/img/foggy_coffee.png';
import Footer from '../footer/Footer';
import './_coffee_pleasure.scss';

const first_title = "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.";
const second_title = `
    Afraid at highly months do things on at. Situation recommend objection do intention
    so questions. 
    As greatly removed calling pleased improve an. Last ask him cold feel
    met spot shy want. Children me laughing we prospect answered followed. At it went
    is song that held help face.
`;
const cards = [<CoffeeCard/>,<CoffeeCard/>,<CoffeeCard/>,<CoffeeCard/>,<CoffeeCard/>,<CoffeeCard/>]

const CoffeePleasure = () => {
    return(
        <div>
            <PromoPleasureCoffee/>
            <AboutOurBeans first_title = {first_title} second_title = {second_title} image = {Coffee} title = "About our goods"/>
            <div className="coffee_pleasure__wrapper">
                {cards}
            </div>
            <Footer/>
        </div>
    )
}

export default CoffeePleasure;