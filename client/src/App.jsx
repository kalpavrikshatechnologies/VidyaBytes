import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from './components/AdminHome';

function App() {
  return (    
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<AdminHome/>}/>
        </Routes>
       </BrowserRouter>

  )
}

export default App
