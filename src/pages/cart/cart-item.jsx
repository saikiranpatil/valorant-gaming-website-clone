import React, { useContext } from "react";
import { ShopContext } from "../../components/context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="bg-gray-900 w-[90%] sm:w-[30%] p-6 m-6 rounded-xl flex sm:flex-row flex-col shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <img
        src={productImage}
        alt={productName}
        className="w-full h-auto rounded-lg border-2 border-red-500"
      />
      <div className="mt-4 p-4 m-4 ">
        <p className="text-xl font-bold text-white uppercase tracking-wide">
          {productName}
        </p>
        <p className="text-green-500 text-3xl font-bold mt-2">
          Price: ₹{price}
        </p>
        <div className="mt-4">
          <button
            onClick={() => removeFromCart(id)}
            className="bg-red-600 text-white text-sm px-2 w-[13rem] py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out uppercase tracking-wider font-semibold"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>

  );
};
