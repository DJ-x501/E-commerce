import React from 'react';
import '../styles/cart.css';
import { useSelector } from 'react-redux';

const Cart = () => {
  const userCart = userSelector((state)=>state.cart.items)
  return (
    <div>
      <div className="cartHead">
        User Cart
      </div>
      <div className="cartContainer">
         div.
      </div>
    </div>
  )
}

export default Cart