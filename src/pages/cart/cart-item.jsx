import React, { useContext } from "react";
import { ShopContext } from "../../components/context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} className="w-full h-auto rounded-lg" />
      <div className="description mt-4">
        <p className="text-lg font-semibold">
          <b>{productName}</b>
        </p>
        <p className="text-green-500 text-base text-[25px] font-bold p-2 m-2">Price: ₹{price}</p>
        <div className="countHandler p-2 m-2">
          <button
            onClick={() => removeFromCart(id)}
            className="bg-red-500 text-white p-2 m-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out text-sm"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};
