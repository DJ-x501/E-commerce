import React from 'react';
import '../styles/shop.css';
import shampoo from '../assets/shampoo.png';
import soap from '../assets/soap.png';
import oil from '../assets/oil.png';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const navigate = useNavigate();

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

  return (
    <div>
      <div className="shopSectionHead">
        <div className="shopHead">Goose Shop</div>
        <div className="shopSubHead">State the biggest use case of your product. 
          Briefly expand on how this will help your customers.</div>
      </div>
      
          <div className="products">
        {products.map((item,index)=>{
          return(
              <div className="productBox" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="pHead" >{item.name}</div>
                <div className="pSubHead">{item.description}</div>
                <div className="price">{item.price}</div>
                <button className='pBtn' onClick={()=>navigate("/cart")}>ADD TO CART</button>
              </div>
          )
        })}
        </div>
    </div>
  )
}

export default Shop;