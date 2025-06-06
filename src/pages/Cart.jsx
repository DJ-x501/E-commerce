import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cart ==> ", cart);
  const { items, total } = cart;

  return (
    <div className="wrapper">
      {/* Cart Items */}
      {items.length>=0?items.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.image} alt={item.name} className="cart-item-img" />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
          <div className="cart-item-price">₹ {item.price}</div>
        </div>
      )):<div className='emptyCart'>Your cart is empty</div>}

      {/* Cart Summary */}
      <div className="cart-summary-card">
        <h2>Total Amount</h2>
        <div className="total-price">₹ {total}</div>
        
      </div>
    </div>
  );
};

export default Cart;
