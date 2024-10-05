import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  


  const whatsapp = () => {
    // Collecting the product IDs from the cart
    const productIdsInCart = PRODUCTS.filter((product) => cartItems[product.id] > 0)
                                      .map((product) => product.id);
                                      
    // Create the WhatsApp message
    const message = `Hello, I would like to place an order for product IDs: ${productIdsInCart.join(', ')}. Subtotal: ₹${totalAmount}`;
    
    // Encode and open WhatsApp link
    const url = `https://wa.me/918511037477?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  

  

  const navigate = useNavigate();

  return (
    <div className="cart">
      {/* <div>
        <h1>Your Cart Items</h1>
      </div> */}
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div>
          <div className="subtotal">
            <p><b> Subtotal: ₹{totalAmount} </b></p>
          </div>
          <div >

            <button className="btn mt-16" onClick={whatsapp}>
              <span className="btn__inner">
                <span className="btn__slide"></span>
                <span className="btn__content text-secondary">
                  BUY
                </span>
              </span>
            </button>

          </div>

        </div>

      ) : (
        <div className="blankCart">
        <button className="btn mt-16" onClick={() => navigate("/shop")}>
              <span className="btn__inner">
                <span className="btn__slide"></span>
                <span className="btn__content text-secondary">
                  CONTINUE SHOPPING 
                </span>
              </span>
            </button>
        </div>
      )}
    </div>
  );
};
