import PromoOurCoffee from "../promo_our_coffee/PromoOurCoffee";
import AboutOurBeans from "../about_our_beans/AboutOurBeans";
import CoffeeSearch from "../coffee_search/CoffeeSearch";
import Footer from '../footer/Footer';
import Woman from '../../resources/img/woman_with_coffee.png';

const second_title = `
        Afraid at highly months do things on at. Situation recommend objection do intention
        so questions. 
        As greatly removed calling pleased improve an. Last ask him cold feel
        met spot shy want. Children me laughing we prospect answered followed. At it went
        is song that held help face.
`
const first_title = "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."

const OurCoffee = () => {
    return(
    <div>
        <PromoOurCoffee/>
        <AboutOurBeans title="About our beans" first_title = {first_title} second_title={second_title} image = {Woman}/>
        <CoffeeSearch/>
        <Footer/>
    </div>
    )
}

export default OurCoffee;