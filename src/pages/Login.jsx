import React, { useEffect, useState } from 'react';
import '../styles/login.css'; // import the CSS file
import { useDispatch,useSelector } from 'react-redux';
import {createUser} from '../redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';


const formData = {
  email: "",
  password:""
};

const Login = () => {

  //using hooks
  const [loginData,setLoginData] = useState(formData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state)=>state.user.data);


//functions of page
  function handleChange(e){
    const {name,value} = e.target;
    setLoginData((prev)=>({...prev,[name]:value}));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(createUser(loginData));
    setLoginData(formData);
  };

  useEffect(()=>{
    if(userData && userData.auth_token){
      navigate("/profile");
    }
  },[userData])

return(
  <>
  
     <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <label>Email</label>
        <input
          type="email"
          name='email'
          value={loginData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          type="password"
          name='password'
          value={loginData.password}
          onChange={handleChange}
          required
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  
  </>
)};

export default Login;
