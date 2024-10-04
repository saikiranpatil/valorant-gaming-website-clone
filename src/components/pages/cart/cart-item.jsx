import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { ShoppingCart , Trash} from "phosphor-react";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ₹{price}</p>
        <div className="delete">
          <button onClick={() => removeFromCart(id)}><Trash size={20}/>delete </button>  
        </div>
      </div>
    </div>
  );
};