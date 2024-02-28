import React from 'react'
import { Card } from 'flowbite-react';

function Packages() {
  return (
    <div>

      <div className='relative z-0 sm:mb-8 mt-8'>
        <img src="sus.jpg" className='h-60 object-cover w-full' />
        <div className='flex flex-wrap justify-center items-center'>
          <h1 className='z-10 px-8 -mt-60 text-white font-bold text-sm sm:text-xl'>𝐏𝐚𝐜𝐤𝐚𝐠𝐞𝐬 𝐟𝐨𝐫 𝐬𝐭𝐮𝐝𝐞𝐧𝐭 𝐬𝐭𝐮𝐝𝐲 𝐜𝐚𝐛𝐢𝐧 𝐢𝐧 𝐋𝐢𝐛𝐫𝐚𝐫𝐲</h1>
        </div>
      </div>



      <div className=' m-2 sm:m-4 sm:mt-12 mt-8 sm:flex sm:flex-wrap gap-4 sm:justify-center'>

        <Card className='sm:w-80 sm:h-96 mb-4 shadow-xl   '>
          <div className=' mb-16'>
            <h5 className="mb-2  text-lg sm:text-xl font-medium text-gray-500 ">Basic plan</h5>
            <div className="flex items-baseline my-8">
              <span className="text-xl sm:text-3xl font-semibold">₹</span>
              <span className=" text-xl sm:text-3xl font-extrabold tracking-tight">99</span>
              <span className="ml-1 text-xl font-normal text-gray-500 ">/2month</span>
            </div>
            <ul className="my-3 sm:my-4 space-y-4 sm:space-y-4  ">
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-[#222F5E] "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">6 hrs a day</span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-[#222F5E] "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Basic sitting area
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-[#222F5E] "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">Free wifi</span>
              </li>

            </ul>
          </div>

          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-[#222F5E] px-5  py-2.5 text-center text-sm font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-cyan-200 cursor-pointer"
          >
            Choose plan
          </button>
        </Card>

        <Card className='sm:w-80 sm:h-96 mb-4 shadow-xl'>
          <h5 className="mb-2  text-lg sm:text-xl font-medium text-gray-500 ">Silver plan</h5>
          <div className="flex items-baseline text-gray-">
            <span className="text-xl sm:text-3xl font-semibold">₹</span>
            <span className=" text-xl sm:text-3xl font-extrabold tracking-tight">199</span>
            <span className="ml-1 text-xl font-normal text-gray-500 ">/6month</span>
          </div>
          <ul className="my-3 sm:my-4 space-y-4 sm:space-y-4">
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-[#222F5E] "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ">Unlimited time in day</span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-[#222F5E] "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ">
                Comfortable seating area
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-[#222F5E] "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ">Free wifi</span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-[#222F5E] "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ">Free access to books</span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-[#222F5E] "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ">Limited Borrow</span>
            </li>

          </ul>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-[#222F5E] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-cyan-200 cursor-pointer"
          >
            Choose plan
          </button>
        </Card>

        <Card className='sm:w-80 sm:h-96 mb-4 shadow-xl'>
          <h5 className="mb-1  text-lg sm:text-xl font-medium text-gray-500 ">Gold plan</h5>
          <div className="flex items-baseline text-gray-">
            <span className="text-xl sm:text-3xl font-semibold">₹</span>
            <span className=" text-xl sm:text-3xl font-extrabold tracking-tight">999</span>
            <span className="ml-1 text-xl font-normal text-gray-500 ">/12month</span>
          </div>
          <ul className="my-3 sm:my-4 space-y-4 sm:space-y-4">
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-[#222F5E] "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ">Unlimited time in day</span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-[#222F5E] "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ">
                Premium seating area
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-[#222F5E] "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ">Free wifi</span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-[#222F5E] "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ">Unlimited access to book </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-[#222F5E] "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ">Unlimited Borrow</span>
            </li>


          </ul>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-[#222F5E] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-cyan-200 cursor-pointer"
          >
            Choose plan
          </button>
        </Card>






      </div>
    </div>
  )
}

export default Packages
