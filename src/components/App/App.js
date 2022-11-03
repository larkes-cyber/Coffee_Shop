import './App.scss';
import Promo from '../promo/Promo';
import AboutUs from '../about_us/AboutUs';
import OurBest from '../our_best/OurBest';
import Footer from '../footer/Footer';

function App() {
  return (
    <div className="App">
      <Promo/>
      <AboutUs/>
      <OurBest/>
      <Footer/>
    </div>
  );
}

export default App;
