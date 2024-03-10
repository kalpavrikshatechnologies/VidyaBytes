import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Login from './components/registration/Login';
import Signup from './components/registration/Signup';
import Home from './components/HomePage/Home';
import ClientHome from './components/client/ClientHome';
import AddBook from './components/admin/AddBook';


function App() {
  return (    
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path='/login' element={<Login />} />
           <Route path='/signup' element={<Signup />} />
           <Route path='/client' element={<ClientHome />} />
           <Route path='/addbook' element={<AddBook />} />
           <Route path="*" element={<Navigate to="/" />} />
        </Routes>
       </BrowserRouter>

  )
}

export default App;
