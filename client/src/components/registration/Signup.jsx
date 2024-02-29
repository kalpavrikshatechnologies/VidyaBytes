import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Signup() {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
});
    const [error, setError] = useState("");
    const navigate = useNavigate();

const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const url = "http://localhost:8080/api/users";
        const { data: res } = await axios.post(url, data);
        navigate("/login");
        console.log(res.message);
    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message);
        }
    }
};
    return (
        <div className='sm:w-full sm:flex sm:flex-wrap'>
            <div className="left sm:w-2/5">
                <img src="signup.jpg" alt="" className='h-80 w-full object-cover sm:h-screen sm:w-full '/>
            </div>
            <div className="right px-4 sm:w-3/5 sm:px-20 sm:flex sm:flex-col sm:justify-center ">
                <div className='flex flex-col flex-wrap justify-center items-center'>
                <h1 className='my-4 font-bold text-md'>Signup</h1>
                </div>
                <form onSubmit={handleSubmit}>
                <h1 className='font-semibold sm:my-4'>Name</h1>
                    <input  type="text"
							placeholder="Full Name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required  className='bg-gray-200 rounded-xl border-gray-300 mt-2 w-full'  />

                    <h1 className='font-semibold sm:my-4'>Mobile no.</h1>
                    <input type="text"
							placeholder="Phone Number"
							name="phone"
							onChange={handleChange}
							value={data.phone}
							required className='bg-gray-200 rounded-xl border-gray-300 mt-2 w-full'  />

                    <h1 className='font-semibold sm:my-4'>Email</h1>
                    <input type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required className='bg-gray-200 rounded-xl border-gray-300 mt-2 w-full'  />
                
                    <h1 className='mt-2 font-semibold sm:my-4'>Password</h1>
                    <input type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required className='bg-gray-200 rounded-xl border-gray-300 mt-2 w-full' />

                    <h1 className='my-2 text-sm'>Have an account? <Link to='/login'><span className='text-blue-600 cursor-pointer'>Click here</span></Link></h1>
                    {error && <div  >{error}</div>}
                    <div className='bg-[#222F5E] p-2.5 rounded-xl flex flex-wrap justify-center items-center cursor-pointer sm:my-6'>
                    <button className='text-white font-bold '>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
