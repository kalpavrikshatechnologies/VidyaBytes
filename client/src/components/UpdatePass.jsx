import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import Loader from './loader/Loader'
import './ForgotPass.css'
function UpdatePass() {

  const [password, setPassword] = useState('')
  const [data, setData] = useState(false);
  const { id, token } = useParams();


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === '') {
      alert('Password is required')
    } else {
      const data = await fetch(`http://localhost:9000/update/${id}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ password })
      })


      const res = await data.json();
      if (res.status === 201) {
        alert('password updated')
        navigate('/login')
      }
      console.log(res)

    }
  }

  const verify = async () => {
    const res = await fetch(`http://localhost:9000/verify/${id}/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json()
    if (data.status === 401) {
      navigate('*')
    }


  }



  useEffect(() => {
    verify()
    setTimeout(() => {
      setData(true)
    }, 3000)
  }, [])

  return (

    <>
      {
        data ? (
         
          <div className='h-screen flex flex-wrap justify-center items-center'>
            <div class="card">
              <button class="dismiss font-bold " type="button" onClick={() => navigate('/forgotpass')}>×</button>
              <div class="header">
                <div class="image" >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <div class="content">
                  <span class="text-green-500 text-2xl font-bold">New Password</span>
                  <p class="message">Thank you for your purchase. you package will be delivered within 2 days of your purchase</p>
                </div>


                <div class="mt-5">
                  <label class="block mb-2 text-md font-semibold text-gray-900 dark:text-white">Password</label>
                  <input type="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required onChange={(e) => setPassword(e.target.value)} />

                </div>

                <div class="actions my-6">

                  <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={handleSubmit}>Update</button>
                </div>
              </div>
            </div>
          </div>
        ) : <Loader />
      }

    </>
  )
}

export default UpdatePass
