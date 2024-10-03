import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  const  Original = price + 500;

  return (



    <div className="product">
      <img src={productImage} />
      <br />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <span className="original-price">₹{Original}</span>
          <span className="discounted-price"> ₹{price}</span>
      </div>
      <button className="btn mt-16" onClick={() => addToCart(id)}>
        <span className="btn__inner">
          <span className="btn__slide"></span>
          <span className="btn__content text-secondary">
            ADD TO CART {cartItemCount > 0 && <> ({cartItemCount})</>}
          </span>
        </span>
      </button>
    </div>
  );
};


