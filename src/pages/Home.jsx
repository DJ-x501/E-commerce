import React from 'react';
import '../styles/home.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProduct } from '../redux/slice/cartSlice';
import { addToCart } from '../redux/slice/cartSlice';
import { useEffect,useState } from 'react';
import axios from 'axios';







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
;
  const navigate = useNavigate();
  const [products,setProducts]= useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state)=>state )

  async function productApi() {
  const res = await axios.get("http://localhost:8000/products");
  const data = await res.data;
  console.log(data);
  setProducts(data);
}

  useEffect(() => {
  productApi();
}, []);

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
          {products.slice(0,3).map((item, index) => {
            return (

              <div className="productBox" key={index}>
                <img src={`http://localhost:8000${item.image}`} alt={item.name} />

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