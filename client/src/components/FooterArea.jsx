import React from "react";
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterArea() {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div>
            <Footer container className="">
                <div className="w-full text-center">
                    <div className="sm:flex sm:justify-between">
                        <div className="flex flex-wrap justify-center items-center ">
                            <img src="Logo.png" alt="" />
                            <h1 className="text-lg">𝐕𝐢𝐝𝐲𝐚 𝐁𝐲𝐭𝐞𝐬</h1>
                        </div>
                        <div className=" flex flex-wrap justify-center items-center gap-2">
                            <h1>About</h1>
                            <h1>Facilities</h1>
                            <h1>Locations</h1>
                            <h1>Contact</h1>

                        </div>
                    </div>


                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright by="𝐕𝐢𝐝𝐲𝐚 𝐁𝐲𝐭𝐞𝐬" year={year} />
                        <div className="flex justify-center gap-4 my-4">
                            <BsInstagram size={25} className="text-red-600 cursor-pointer" />
                            <BsGithub size={25} className="text-black cursor-pointer" />
                            <BsFacebook size={25} className="text-blue-600 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    )
}

