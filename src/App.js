import "./styles/reset.css";
import "./styles/common.css";

import Arrivals from "./components/category/Arrivals";
import Brands from "./components/brands/Brands";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Promo2 from "./components/promo2/Promo2";
import Favorites from "./components/category/Favourites";
import MobileApp from "./components/mobileApp/MobileApp";
import Cta from "./components/cta/Cta";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Promo2 />
      <Favorites />
      <MobileApp />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
