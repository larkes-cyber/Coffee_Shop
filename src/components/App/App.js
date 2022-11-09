import { BrowserRouter, Route, Routes} from "react-router-dom";
import { MainPromo, OurCoffee } from "../pages";
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
            <Route path="/lol" element={<MainPromo/>}/>
            <Route path="/"element={<OurCoffee/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
