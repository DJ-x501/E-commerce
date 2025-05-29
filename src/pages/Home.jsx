import React from 'react';
import '../styles/home.css';
import { useNavigate } from 'react-router-dom';
//images
import shampoo from '../assets/shampoo.png';
import soap from '../assets/soap.png';
import oil from '../assets/oil.png';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slice/cartSlice';

const products = [
  {
    name: "Goose Shampoo",
    price: "199 Rs",
    description: "Gentle. Nourishing. Pure.",
    image: shampoo
  },
  {
    name: "Goose Soap Bar",
    price: "99 Rs",
    description: "Handcrafted Comfort in Every Wash.",
    image: soap
  },
  {
    name: "Goose oil",
    price: "169 Rs",
    description: "Versatile Hydration, Naturally Bottled.",
    image: oil
  }

];
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

const Home = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cartItems ==> ", cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCart = async (product) => {
    console.log("product ==> ", product);
    await dispatch(addToCart(product));
  };

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
          {products.map((item, index) => {
            return (

              <div className="productBox" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="pHead" >{item.name}</div>
                <div className="pSubHead">{item.description}</div>
                <div className="price">{item.price}</div>
                <button className='pBtn' onClick={() => handleCart(item)}>ADD TO CART</button>
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

export default Home