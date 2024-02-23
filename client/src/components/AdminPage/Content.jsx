import React from 'react'
import { FaRegStar } from "react-icons/fa6";
import { PiSquaresFour } from "react-icons/pi";
import { AiOutlineProfile } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi2";

function Content() {
    return (
        <div className='sm:w-full h-screen sm:flex'>
            <div className="left  flex bg-yellow-200 p-4 flex-wrap justify-between sm:w-1/5 sm:flex   sm:items-center sm:flex-col sm:justify-start sm:max-h-screen">
                <PiSquaresFour size={22} className='cursor-pointer sm:mt-8' />
                <HiUserGroup size={22} className='sm:my-8 cursor-pointer' />
                <AiOutlineProfile size={22} className='cursor-pointer' />
                <FaRegStar size={22} className='sm:my-8 cursor-pointer' />
            </div>
            <div className="right sm:w-4/5 ">
                <div className='bg-pink-600 p-16 border rounded-xl m-1 text-white font-bold text-xl sm:justify-center sm:items-center sm:flex'>
                    <h1>A place where knowledge reside</h1>
                </div>

                {/* total user */}


                <div className='sm:flex sm:w-full sm:flex-wrap'>
                    <div className=" sm:w-60 p-8 border rounded-xl m-1 ">
                        <h1 className=''>TOTAL USER</h1>
                        <h1 className='text-3xl font-bold'>100</h1>
                    </div>
                    <div className="sm:w-60 p-8 border rounded-xl m-1">
                        <h1>ACTIVE SUBSCRIBER</h1>
                        <h1 className='text-3xl font-bold'>51</h1>
                    </div>
                </div>

                <div className='sm:flex sm:w-full sm:flex-wrap'>
                    <div className="sm:w-60 p-8 border rounded-xl m-1">
                        <h1>AVAILABLE BOOKS</h1>
                        <h1 className='text-3xl font-bold'>999</h1>

                    </div>
                    <div className="sm:w-60 p-8 border rounded-xl m-1">
                        <h1>TOTAL REVENUE</h1>
                        <h1 className='text-3xl font-bold'>Rs.10000</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Content
