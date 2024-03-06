import React,{useState} from 'react'
import ClientNav from './ClientNav.jsx'
import { Label, TextInput } from 'flowbite-react';
import { HiSearch } from 'react-icons/hi';
import { FiFilter } from "react-icons/fi";
import TableCom from '../TableCom.jsx';
import Drawer from '../Drawer.jsx';

function ClientHome() {
    const [sideNav,setSideNav] = useState(true)

    return (
        <div className='w-full '>
            <ClientNav setSideNav={setSideNav} sideNav ={sideNav}/>


            <form className=" flex flex-wrap justify-center items-center mt-6 md:mt-8 ">
                <TextInput type="text" rightIcon={HiSearch} placeholder="Search.." required className='sm:w-96 w-48' />
                <FiFilter size={25} className='mx-2 cursor-pointer '/>
            </form>

        <TableCom/>

        <div className='absolute top-0 bottom-0 right-0 h-full'>
        <Drawer sideNav ={sideNav} setSideNav ={setSideNav} className="bg-red-500"/>
        </div>
       

        </div>
    )
}

export default ClientHome
