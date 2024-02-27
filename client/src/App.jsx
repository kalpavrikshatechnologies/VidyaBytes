import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AdminHome from './components/AdminPage/AdminHome';
import Login from './components/registration/Login';
import Home from './components/Home/Home';

function App() {
  return (    
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path='/admin' element={<AdminHome />} />
           <Route path='/login' element={<Login />} />
           <Route path="*" element={<Navigate to="/" />} />
        </Routes>
       </BrowserRouter>

  )
}

export default App;
