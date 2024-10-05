import React, { useContext } from "react";
import { ShopContext } from "../../components/context/shop-context";
import { PRODUCTS } from "../../components/products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  

  const whatsapp = () => {
    const url = `https://wa.me/${918511037477}`;
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
          <div>
            <p className="text-2xl text-green-500"><b> Subtotal: ₹{totalAmount} </b></p>
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
