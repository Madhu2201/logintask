import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  { useState,useEffect } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // useEffect(()=>{
  //   fetchdata()
  //   },[])
  //   const fetchdata=async()=>{
  //    await axios.post("http://localhost:4001/api/resetpassword",email).then((res)=>(setEmail(res))).catch((err)=>(console.error(err)))
   
  //   }
 

  const handleResetPassword = async () => {
    try {
      const response = await fetch('http://localhost:4001/api/resetpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error resetting password:', error.message);
      setMessage('Error resetting password. Please try again.');
    }
  };

  return (
    <div>
      <h2 class="resetpage">Reset Password</h2>
      <div>
        <h2 style={{marginLeft:"30%",fontSize:"20px" ,  color: "white"}}>Enter Email</h2>
        <input class="resetemail"
          type="email"
          value={email}
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button class="resetbutton"  onClick={handleResetPassword}>Reset Password</button>
      <p class="resetmsg">
      {message && <p style={{fontSize:"20px"}}>{message}</p>}
      </p>
      <div class="resetlogin">
      <Link to='/' >Login</Link>
   
      </div>
    </div>
  );
};

export default ResetPassword;