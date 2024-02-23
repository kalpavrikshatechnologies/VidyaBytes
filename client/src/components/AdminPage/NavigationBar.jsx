import React, { useState } from 'react'
import { Avatar } from 'flowbite-react';
import Pop from './Pop';


function NavigationBar() {

  const [displayProfile,setDisplayProfile] = useState(false)
  console.log(displayProfile)

  const handleClick = () => {
      setDisplayProfile(!displayProfile)
  }
  return (
    <>
      <nav className="  w-full p-4  sm:p-8" >
        <div className="flex flex-wrap justify-between  ">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className='text-md sm:text-xl'>🆅🅸🅳🆈🅰 🅱🆈🆃🅴🆂</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse cursor-pointer " onClick={handleClick}>
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            
          </div>

          {
            displayProfile ? <Pop /> : null
          }
          
        </div>
      </nav>
    </>
  )
}

export default NavigationBar

// 🆅🅸🅳🆈🅰 🅱🆈🆃🅴🆂