import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Navbar } from 'flowbite-react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Navbar fluid rounded className="bg-gray-200 py-4">
      <Link to='/'><Navbar.Brand className="cursor-pointer ">
          
          <img src="Logo.png" className="mr-2 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-md font-semibold dark:text-white">𝐕𝐢𝐝𝐲𝐚 𝐁𝐲𝐭𝐞𝐬</span>
          
        </Navbar.Brand></Link>
        <div className=" md:order-2 flex flex-wrap justify-center items-center">
       <Link to='signup'><button className="bg-[#222F5E] p-2 sm:w-20 text-sm rounded-lg text-white   cursor-pointer mx-1">Signup</button></Link>
          <Navbar.Toggle className="p-0 m-0"/>
        </div>
        <Navbar.Collapse className="mx-1.5 ">
          <Navbar.Link href="#" active className="cursor-pointer">
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="cursor-pointer">About</Navbar.Link>
          <Navbar.Link href="#" className="cursor-pointer">Facilities</Navbar.Link>
          <Navbar.Link href="#" className="cursor-pointer">Location</Navbar.Link>
          <Navbar.Link href="#" className="cursor-pointer">Contact us</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
