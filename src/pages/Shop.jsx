import React from 'react';
import '../styles/shop.css';
import shampoo from '../assets/shampoo.png';
import soap from '../assets/soap.png';
import oil from '../assets/oil.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //products array..
 const products = [
     {
       name: "Goose Shampoo",
       price: "199 Rs",
       description: "Gentle. Nourishing. Pure.",
       image: shampoo
     },
     {
       name:"Goose Soap Bar",
       price:"99 Rs",
       description:"Handcrafted Comfort in Every Wash.",
       image: soap
     },
     {
       name:"Goose oil",
       price:"169 Rs",
       description:"Versatile Hydration, Naturally Bottled.",
       image: oil
     },
     {
       name: "Goose Shampoo",
       price: "199 Rs",
       description: "Gentle. Nourishing. Pure.",
       image: shampoo
     },
     {
       name:"Goose Soap Bar",
       price:"99 Rs",
       description:"Handcrafted Comfort in Every Wash.",
       image: soap
     },
     {
       name:"Goose oil",
       price:"169 Rs",
       description:"Versatile Hydration, Naturally Bottled.",
       image: oil
     },
     {
       name: "Goose Shampoo",
       price: "199 Rs",
       description: "Gentle. Nourishing. Pure.",
       image: shampoo
     },
     {
       name:"Goose Soap Bar",
       price:"99 Rs",
       description:"Handcrafted Comfort in Every Wash.",
       image: soap
     },
     {
       name:"Goose oil",
       price:"169 Rs",
       description:"Versatile Hydration, Naturally Bottled.",
       image: oil
     }
     
   ]
 function CartButton(item){
    dispatch(addToCart(item));
    toast.success("Item Added to Cart");
  }
  return (
    <div>
      <div className="shopSectionHead">
        <div className="shopHead">Goose Shop</div>
        <div className="shopSubHead">State the biggest use case of your product. 
          Briefly expand on how this will help your customers.</div>
      </div>

        <div className="marquee2">
          <marquee>Order 699rs and get a extra 5% discount.</marquee>
        </div>
          <div className="products">
        {products.map((item,index)=>{
          return(
              <div className="productBox" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="pHead" >{item.name}</div>
                <div className="pSubHead">{item.description}</div>
                <div className="price">{item.price}</div>
                <button className='pBtn' onClick={()=>CartButton(item)}>ADD TO CART</button>
              </div>
          )
        })}
        </div>
    </div>
  )
}

export default Shop;