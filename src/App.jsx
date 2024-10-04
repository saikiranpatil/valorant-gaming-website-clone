import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/home/Home";
// import CTA from "./components/layout/CTA";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Agents from "./components/pages/Agents";
// import Agent from "./components/pages/Agent";
// import Maps from "./components/pages/Maps";
import { ShopContextProvider } from "./components/context/shop-context"
import { Shop } from "./components/pages/shop/shop"
import { Cart } from "./components/pages/cart/cart";



const App = () => {

  return (
    <ShopContextProvider>
      <Router>
        <div className="w-full overflow-hidden">
          <Navbar />
          <Routes>
            <Route excat path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
};

export default App;
