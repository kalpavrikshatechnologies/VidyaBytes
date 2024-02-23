import React from 'react'
import { Avatar } from 'flowbite-react';

function Pop() {
    return (
        <div className='absolute bg-gray-200 w-56 border   left-0 top-0 bottom-0 sm:w-96'>
            <div className='flex flex-col flex-wrap justify-center items-center'>
                <h1 className='mt-8 text-md font-semibold'>Profile</h1>
                <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" className=' mt-12 h-20 ' size={30} />
                <h1 className='mt-12 font-semibold'>PREMANAND CHOUHAN</h1>
                <h1 className='font-semibold'>Admin</h1>
            </div>

            <div className=''>
                <h1 className='p-2  flex flex-wrap mx-2 mt-4 text-md font-bold border cursor-pointer'>Edit Profile</h1>
                <h1 className='p-2  flex flex-wrap mx-2 mt-4 text-md font-bold border cursor-pointer'>About Us</h1>
                <h1 className='p-2  flex flex-wrap mx-2 mt-4 text-md font-bold border cursor-pointer'>Help and Support</h1>
                <h1 className='p-2  flex flex-wrap mx-2 mt-4 text-md cursor-pointer font-bold border'>Report Bug</h1>
                <h1 className='p-2 bg-red-500 flex flex-wrap mx-2 mt-4 text-md font-bold border cursor-pointer rounded-xl justify-center'>Logout</h1>
            </div>
            

        </div>
    )
}

export default Pop
