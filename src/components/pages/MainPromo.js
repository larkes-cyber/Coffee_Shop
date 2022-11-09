import AboutUs from "../about_us/AboutUs";
import Footer from "../footer/Footer";
import OurBest from "../our_best/OurBest";
import Promo from "../promo/Promo";

const MainPromo = () => {
    return(
        <div>
            <Promo/>
            <AboutUs/>
            <OurBest/>
            <Footer/>
        </div>
    )
}

export default MainPromo;