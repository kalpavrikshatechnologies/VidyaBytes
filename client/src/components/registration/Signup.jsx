import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {

        e.preventDefault();

        if(!name || !email || !phone || !password){
            alert("All field are necessary")  
        }else if (!email.includes("@")) {
            alert("email is incorrect")
        } else if (phone.length < 10) {
            alert("invalid phone number")
        } 
        else{

        const data = await fetch("http://localhost:9000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, password
            })
        });

        const res = await data.json();

        if(res.status === 422){
            alert("user exist")
        }else{
            alert("signup successfull")
            navigate("/login")

        }
    }
}

    return (
        <div className='sm:w-full sm:flex sm:flex-wrap'>
            <div className="left sm:w-2/5">
                <img src="signup.jpg" alt="" className='h-80 w-full object-cover sm:h-screen sm:w-full ' />
            </div>
            <div className="right px-4 sm:w-3/5 flex justify-center items-center mt-8">
                <form class="w-full ">
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 ">Full Name </label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  " required onChange={(e) => setName(e.target.value)}  />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 ">Email  </label>
                        <input type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  " placeholder="name@gmail.com" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 ">Phone No</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  " required onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 "> Password</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                   
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center mb-8" onClick={handleSubmit}>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Signup


