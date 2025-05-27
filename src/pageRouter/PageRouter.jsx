import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';

const PageRouter = () => {
  return (
    
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
            
        </Routes>
  )
}

export default PageRouter;