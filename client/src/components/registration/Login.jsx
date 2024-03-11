
import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (!email || !password) {
            alert("All field are necessary")
        } else if (!email.includes("@")) {
            alert("email is incorrect")
        } else {

            const data = await fetch("http://localhost:9000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            const res = await data.json();
            
            
            if (res.status === 200) {
                alert("Login Successfull")
                navigate("/home")
            }else if(res.status === 422){
                alert('invalid username or password')
            }else{
                alert('user not exist')

            }


        }
    }

    return (
        <div className='sm:w-full sm:flex sm:flex-wrap'>
            <div className="left sm:w-2/5">
                <img src="login.jpg" alt="" className='h-80 w-full object-cover sm:h-screen sm:w-full ' />
            </div>
            <div className="right px-4 sm:w-3/5 flex justify-center items-center mt-8">
                <form class="w-full ">

                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 ">Email  </label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="name@gmail.com" required onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 "> Password</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div class="flex items-start mb-5">

                        <label class="ms-2 text-sm font-medium text-blue-700 cursor-pointer " onClick={()=>navigate('/forgotpass')}>Forgot Password ?</label>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center mb-8" onClick={handleSubmit}>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Login
