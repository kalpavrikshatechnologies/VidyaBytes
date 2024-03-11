import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

import './ForgotPass.css'
function ForgotPass() {

  const [email, setEmail] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '') {
      alert("enter email")
    } else if (!email.includes("@")) {
      alert("enter valid email")
    } else {

      const data = await fetch("http://localhost:9000/sendpasswordlink", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email
        })
      })


      const res = await data.json();

      if (res.status === 201) {
        alert("Email sent successfully")
      } else if (res.status === 422) {
        alert("Email not registered")

      }
      else {
        alert("Something went wrong")

      }
    }



  }

  return (

    <div className='h-screen flex flex-wrap justify-center items-center'>
      <div class="card">
        <button class="dismiss font-bold " type="button" onClick={() => navigate('/login')}>×</button>
        <div class="header">
          <div class="image" >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </div>
          <div class="content">
            <span class="text-green-500 text-2xl font-bold">Email Verification</span>
            <p class="message">Thank you for your purchase. you package will be delivered within 2 days of your purchase</p>
          </div>


          <div class="mt-5">
            <label class="block mb-2 text-md font-semibold text-gray-900 dark:text-white">Your email</label>
             <input type="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required onChange={(e) => setEmail(e.target.value)} />
            
          </div>

          <div class="actions my-6">
            
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={handleSubmit}>Verify</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ForgotPass
