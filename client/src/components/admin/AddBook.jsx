import React, { useState } from 'react'
import ClientNav from '../client/ClientNav'
import { HiSearch } from 'react-icons/hi';
import { FiFilter } from "react-icons/fi";
import { Label, TextInput, FileInput } from 'flowbite-react';
import TableCom from '../TableCom';
import Drawer from '../Drawer';
// import { FileInput, Label } from 'flowbite-react';

function AddBook() {
    const [sideNav, setSideNav] = useState(false)

    return (
        <div className='w-full h-screen'>
            <ClientNav setSideNav={setSideNav} sideNav={sideNav} />

            <form className=" flex flex-wrap justify-center items-center px-2 mt-6 md:mt-8 ">
                <TextInput type="text" rightIcon={HiSearch} placeholder="Search.." required className='sm:w-80 w-44' />
                {/* <FiFilter size={25} className='mx-2 cursor-pointer ' /> */}
                <button className="ml-2 bg-black p-2 rounded-md text-white font-bold cursor-pointer" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Book</button>

                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">


                        <label >Add Image</label>
                        <input type="file" className="file-input file-input-bordered w-full mb-4" />

                        <label className=''>Title</label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full mb-4" />

                        <label >Genres</label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />

                        <button className='bg-teal-500 p-4 w-full mt-4 text-black font-bold'>ADD</button>

                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>


            </form>



            <TableCom />

            <div className='absolute top-0 bottom-0 right-0 h-full'>
                <Drawer sideNav={sideNav} setSideNav={setSideNav} />
            </div>

        </div>
    )
}

export default AddBook
