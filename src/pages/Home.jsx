import React from 'react';
import '../styles/home.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { toast } from 'react-toastify';
import {addToCart} from '../redux/slice/cartSlice';
//images
import shampoo from '../assets/shampoo.png';
import oil from '../assets/oil.png';
import soap from '../assets/soap.png';


const reviews = [
  {
    name: "Dhananjay",
    review: "This is very good company with a wide variety of products. Products here is suitable for all skin type."
  },
  {
    name: "Dhananjay",
    review: "This is very good company with a wide variety of products. Products here is suitable for all skin type."
  },
  {
    name: "Dhananjay",
    review: "This is very good company with a wide variety of products. Products here is suitable for all skin type."
  },
];
const products = [
  { name: "Goose Shampoo", price: "199", description: "Gentle. Nourishing. Pure.", image: shampoo, id: 1 },
  { name: "Goose Soap Bar", price: "99", description: "Handcrafted Comfort in Every Wash.", image: soap, id: 2 },
  { name: "Goose Oil", price: "169", description: "Versatile Hydration, Naturally Bottled.", image: oil, id: 3 },
  { name: "Goose Shampoo", price: "199", description: "Gentle. Nourishing. Pure.", image: shampoo, id: 4 },
  { name: "Goose Soap Bar", price: "99", description: "Handcrafted Comfort in Every Wash.", image:soap, id: 5 },
  { name: "Goose Oil", price: "169", description: "Versatile Hydration, Naturally Bottled.", image: oil, id: 6 },
  { name: "Goose Shampoo", price: "199", description: "Gentle. Nourishing. Pure.", image: shampoo, id: 7 },
  { name: "Goose Soap Bar", price: "99", description: "Handcrafted Comfort in Every Wash.", image: soap, id: 8 },
  { name: "Goose Oil", price: "169", description: "Versatile Hydration, Naturally Bottled.", image: oil, id: 9 },
];

const Home = () => {
//all the hooks used.
  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  
  //page functions

  function CartButton(item){
    dispatch(addToCart(item));
    toast.success("Item Added to Cart");
  }
  return (
    <div>
      <div className="background">
        <div className="textBox">
          <div className="text">
            <div className="head">
              GOOSE
            </div>
            <div className="subHead">
              Glow Naturally — Skincare products crafted for radiant, healthy skin.
            </div>
            <button className='shopBtn' onClick={() => navigate("shop")} >SHOP NOW </button>
          </div>
        </div>
      </div>
      <div className="productSection">
        <div className="productHead">
          Feature Collection
        </div>
        <div className="productSubHead">
          Glow Naturally — Skincare products crafted for radiant, healthy skin.

        </div>
        <button className='pBtn' onClick={() => { navigate("shop") }}>View All</button>
         <div className="products">
          {products.slice(0,3).map((item, index) => {
            return (

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
      <div className="section2">
        <div className="sectionHead">This is special announcement.</div>
        <div className="sectionSubHead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente, deserunt rem placeat repellat velit alias ipsam! Voluptas cumque aliquid fuga quod temporibus!</div>
        <button className='shopBtn' onClick={() => navigate("shop")}>Shop Now</button>
      </div>
      <div className="section3">
        <div className="reviewHeading">Some of our happy customers....</div>
        <div className="reviewSection">
          {
            reviews.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <div className="reviewHead">{item.name}</div>
                  <div className="review">{item.review}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home;