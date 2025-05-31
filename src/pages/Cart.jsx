import React from 'react';
import '../styles/cart.css';


const Cart = () => {
  
  return (
    <div>
      <div className="cartHead">
        User Cart
      </div>
      <div className="cartDiv">
      <div className="cartContainer">
         <div className="img">
          <img src={`http://localhost:8000${userCart[0].image}`} alt='' />

         </div>
         <div className="textContainer">
          <div className="cartHead">
            {userCart[0].name}
          </div>
          <div className="cardDescription">{userCart[0].description}</div>
          <div className="cartPrice">{userCart[0].price}</div>
         </div>
      </div>

      </div>
    </div>
  )
}

export default Cart