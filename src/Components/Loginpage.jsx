import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';

import "../App.css"
const Loginpage = () => {
 const [login,stateLogin]=useState({
  email:"",
  password:""
 })
 const [loginStatus, setLoginStatus] = useState('');

 useEffect(()=>{
 
  fetchLogin();
 },[])
 const fetchLogin=async()=>{
  
 await axios.post("http://localhost:4001/api/userlogin",login).then((res)=>stateLogin(res.data)).catch((error)=>console.error(error))
 };

const handleLogin = async (event) => {
  try {
    event.preventDefault();

    const response = await axios.post("http://localhost:4001/api/userlogin" );
    const responseData = response.data;

    console.log("Login successful", responseData);
    setLoginStatus('Login successful');
    return { message: "login successful", data: responseData };
  } catch (error) {
    console.error("Login failed", error);
    setLoginStatus('Login failed');
    return { message: "login failed", error: error.message };
  }
};

 console.log(login);

 return (
  

  <div class='container'>
         <h1 class="welcome">Welcome to login page</h1>

    <div class="signup">
      Don't have a account yet? <Link to='Sign Up' >Sign Up</Link>
      </div>
  <div class="box">
         <h2 style={{marginLeft:"4%",fontSize:"20px",  color: "white"}}>Email:</h2>
        <input class="logemail"
          type="email"
          placeholder="Email"
          value={login.email}
          onChange={(e) => stateLogin({ ...login, email: e.target.value })}
        />
        <div>
        <h2 style={{marginLeft:"4%",fontSize:"20px",  color: "white"}}>password:</h2>

        <input class="logpassword"
          type="password"
          placeholder="Password"
          value={login.password}
          onChange={(e) => stateLogin({ ...login, password: e.target.value })}
        />
        </div>
        <button class="loginbutton" onClick={handleLogin}>Login</button>
        <p class="loginmsg" style={{fontSize:"20px"}}>{loginStatus}</p>
        <div class="reset">
   <Link to='resetpassword'>Resetpassword</Link>
   </div>
      </div>
      
</div>
 );
};

export default Loginpage;