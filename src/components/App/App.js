import { BrowserRouter, Route, Routes} from "react-router-dom";
import { MainPromo, OurCoffee,AboutCoffee,CoffeePleasure } from "../pages";
import TopNav from "../top_nav/TopNav";

import './App.scss';
// import Promo from '../promo/Promo';
// import AboutUs from '../about_us/AboutUs';
// import OurBest from '../our_best/OurBest';
// import Footer from '../footer/Footer';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav/>
        <main>
          <Routes>
            <Route path="/our_coffee" element={<OurCoffee/>}/>
            <Route path="/pleasure_coffee"element={<CoffeePleasure/>}/>
            <Route path="/"element={<MainPromo/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
