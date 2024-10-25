import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../components/context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data; 
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const [showCartButton, setShowCartButton] = useState(false); 
  const cartItemCount = cartItems[id];
  const originalPrice = price + 500;
  const navigate = useNavigate(); 

  const handleAddToCart = () => {
    setShowCartButton(true);
    setTimeout(() => setShowCartButton(false), 10000); 
  };

  const handleButtonClick = () => {
    if (cartItemCount > 0) {
      removeFromCart(id);
    } else {
      addToCart(id);
      handleAddToCart();
    }
  };

  return (
    <div className="product-card bg-[#292929] shadow-lg hover:shadow-2xl rounded-lg p-4 transition-all duration-300 ease-in-out">
      <img src={productImage} alt={productName} className="w-full object-scale-down rounded-md mb-4" />
      <div className="product-info">
        <h2 className="font-semibold text-lg text-gray-800 text-center">{productName}</h2>
        <div className="flex justify-center items-center mt-2">
          <span className="text-red-500 line-through text-sm m-1">₹{originalPrice}</span>
          <span className="text-green-600 font-bold text-2xl m-1">₹{price}</span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="btn" onClick={handleButtonClick}>
          <span className="btn__inner">
            <span className="btn__slide"></span>
            <span className={`btn__content text-secondary sm:text-xl text-[10px] ${cartItemCount > 0 ? "bg-[#131313]": ""}`}>
              {cartItemCount > 0 ? "REMOVE" : "ADD TO CART"}
              {cartItemCount > 0 && <> ({cartItemCount})</>}
            </span>
          </span>
        </button>
      </div>
      {showCartButton && (
        <div 
          className="checkout-cart-button animated-cart-button fixed bottom-10 right-10 bg-red-500 text-white rounded-lg p-3 shadow-lg cursor-pointer transition-transform transform scale-100 hover:scale-105"
          onClick={() => navigate('/cart')}
        >
          <i><a>/icon/</a></i>
          CheckOut Cart 
        </div>
      )}
    </div>
  );
};
