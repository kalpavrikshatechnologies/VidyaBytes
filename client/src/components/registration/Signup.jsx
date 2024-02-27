import React from 'react'

function Signup() {
    return (
        <div className='sm:w-full sm:flex sm:flex-wrap'>
            <div className="left sm:w-2/5">
                <img src="signup.jpg" alt="" className='h-80 w-full object-cover sm:h-screen sm:w-full '/>
            </div>
            <div className="right px-4 sm:w-3/5 sm:px-20 sm:flex sm:flex-col sm:justify-center ">
                <div className='flex flex-col flex-wrap justify-center items-center'>
                <h1 className='my-4 font-bold text-md'>Signup</h1>
                </div>
                <form >
                <h1 className='font-semibold sm:my-4'>Name</h1>
                    <input type="text" className='bg-gray-200 rounded-xl border-gray-300 mt-2 w-full'  />

                    <h1 className='font-semibold sm:my-4'>Mobile no.</h1>
                    <input type="text" className='bg-gray-200 rounded-xl border-gray-300 mt-2 w-full'  />
                
                    <h1 className='mt-2 font-semibold sm:my-4'>Password</h1>
                    <input type="text" className='bg-gray-200 rounded-xl border-gray-300 mt-2 w-full' />

                    <h1 className='my-2 text-sm'>Forgot Password? <span className='text-blue-600 cursor-pointer'>Click here</span></h1>

                    <div className='bg-[#FF8575] p-2.5 rounded-xl flex flex-wrap justify-center items-center cursor-pointer sm:my-6'>
                    <button className='text-white font-bold '>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
