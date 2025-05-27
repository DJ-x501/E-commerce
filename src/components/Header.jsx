import React from 'react';
import logo from '../assets/user.png';
import cart from '../assets/cart.png';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="sale"><marquee>Get 20% off on your first order!!</marquee></div>
      <div className="navbar">
        <div className="title">GOOSE</div>
        <div className="links">
          <button  className='btn' onClick={()=>navigate("/")}>Home</button>
          <button  className='btn' onClick={()=>navigate("shop")}>Shop</button>
          <button  className='btn' onClick={()=>navigate("contact")}>Contact Us</button>
        </div>
        <div className="user">
          <button className='btn' onClick={()=>navigate('login')}><img src={logo} alt='user'/></button>
          <button className='btn' onClick={()=>navigate('cart')}><img src={cart} alt='cart'/></button>
        </div>
      </div>
    </div>
  )
}

export default Header;