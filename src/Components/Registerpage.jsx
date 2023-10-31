import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Registerpage = () => {
 const [register, setRegister] = useState({
   username: '',
   email: '',
   password: '',
 });

 const [registrationStatus, setRegistrationStatus] = useState({
   message: '',
   success: false,
 });
  useEffect(()=>{
   fetchdata()
   },[])
   const fetchdata=async()=>{
    await axios.post("http://localhost:4001/api/userRegister").then((res)=>(setRegister(res))).catch((err)=>(console.error(err)))
  
   }

 const handleRegister = async (event) => {
   try {
     event.preventDefault();

     const response = await axios.post('http://localhost:4001/api/userRegister', register);
     const responseData = response.data;

     console.log('Registration successful', responseData);
     setRegistrationStatus({ message: 'Registration successful', success: true });
   } catch (error) {
     console.error('Registration failed', error);
     setRegistrationStatus({ message: 'Registration failed', success: false });
   }
 };

 return (
   <div>
     <h2 class="registerPage">Register page</h2>
     <form onSubmit={handleRegister}>
        <h2 style={{marginLeft:"30%",fontSize:"20px", color: "white" }}>UserName</h2>
         <input
         class="registerUsername"
           type="text"
           value={register.username}
           placeholder="Username"
           onChange={(e) => setRegister({ ...register, username: e.target.value })}
         />
      
       <div>
       <h2 style={{marginLeft:"30%",fontSize:"20px",  color: "white" }}>Enter Email</h2>

         <input
         class="registerEmail"
           type="email"
           value={register.email}
           placeholder="Email"
           onChange={(e) => setRegister({ ...register, email: e.target.value })}
         />
       
       </div>
       <h2 style={{marginLeft:"30%",fontSize:"20px",  color: "white" }}>Enter Password</h2>

         <input
         class="registerPassword"
           type="password"
           value={register.password}
           placeholder="Password"
           onChange={(e) => setRegister({ ...register, password: e.target.value })}
         />
      <div>
      <button class="reregisterButton" type="submit">Register</button>

      </div>
     </form>
   
          <p class="registermsg" style={{fontSize:"20px"}}>{registrationStatus.message}</p>

     <div class="registerLogin">
     <Link to='/' >Login</Link>

     </div>

   </div>
 );
};


export default Registerpage;
