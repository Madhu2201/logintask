import React from 'react';
import Loginpage from './Components/Loginpage';
import Registerpage from './Components/Registerpage';
import { Routes,Route} from 'react-router-dom';
import ResetPassword from './Components/ResetPassword';

const App = () => {
  return (
    <div class="mainpage">
       <div>
      <Routes>
        <Route path='/' element={<Loginpage/>} />
        <Route path='sign Up' element={<Registerpage/>} />
        
          <Route path='resetpassword' element={<ResetPassword/>} />
        
      </Routes>
      </div>

    </div>
  );
};

export default App;