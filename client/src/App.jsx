import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AdminHome from './components/AdminHome';
import LoginSignup from './components/LoginSignup';

function App() {
  return (    
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<AdminHome/>}/>
           <Route path='/login' element={<LoginSignup/>}/>
           <Route path="*" element={<Navigate to="/" />} />
        </Routes>
       </BrowserRouter>

  )
}

export default App
