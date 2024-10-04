import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const navigate = useNavigate();

  const cartItemCount = cartItems[id] || 0;
  const Original = price + 500;

  const handleButtonClick = () => {
    if (cartItemCount === 0) {
      addToCart(id); // Add to cart
    } else {
      navigate("/cart"); // Navigate to cart
    }
  };

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <br />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <span className="original-price">₹{Original}</span>
        <span className="discounted-price"> ₹{price}</span>
      </div>
      <button className="btn mt-16" onClick={handleButtonClick}>
        <span className="btn__inner">
          <span className="btn__slide"></span>
          <span className="btn__content text-secondary">
            {cartItemCount === 0 ? "ADD TO CART" : "GO TO CART"}{" "}
          </span>
        </span>
      </button>
    </div>
  );
};
