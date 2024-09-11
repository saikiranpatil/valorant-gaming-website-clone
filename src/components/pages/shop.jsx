import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product A', price: 30, quantity: 1 },
    { id: 2, name: 'Product B', price: 20, quantity: 2 },
  ]);

  const whatsappNumber = "+918511037477 "; // Replace with the actual WhatsApp number

  // Function to handle quantity increase
  const increaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  // Function to handle quantity decrease
  const decreaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedItems);
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to generate the WhatsApp message link
  const generateWhatsAppLink = () => {
    const itemsMessage = cartItems
      .map((item) => `${item.name} (x${item.quantity}): $${item.price * item.quantity}`)
      .join('%0A'); // '%0A' is the encoded line break for URLs
    const totalAmount = calculateTotal();
    const message = `Hello, I would like to buy the following items:%0A${itemsMessage}%0ATotal: $${totalAmount}`;
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <div>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>Your Cart</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>{item.name}</div>
                <div>Price: ${item.price}</div>
                <div>
                  Quantity:
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  {item.quantity}
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${calculateTotal()}</h3>

          {/* Center the Buy Now button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <a href={generateWhatsAppLink()} >
          <button className="btn">
          <span className="btn__inner">
            <span className="btn__slide"></span>
            <span className="btn__content text-secondary">Buy </span> 
          </span>
        </button>
        </a> 
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
