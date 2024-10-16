import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";
// import CTA from "./components/layout/CTA";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Agents from "./components/pages/Agents";
// import Agent from "./components/pages/Agent";
// import Maps from "./components/pages/Maps";
import { ShopContextProvider } from "./components/context/shop-context"
import { Shop } from "./pages/shop/shop"
import { Cart } from "./pages/cart/cart";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import News from "./pages/news/News";
import Reviews from "./pages/reviews/Reviews";
import TermsAndServices from "./pages/about/TermsAndServices";



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
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/reviews" element={<Reviews />} /> 
            <Route path="/TermsAndServices" element={<TermsAndServices/>} /> 
           
            <Route path="*" element={<h1>You Lost In the World of Valorant 😀</h1>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
};

export default App;
