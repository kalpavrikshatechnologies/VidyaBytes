import React from 'react'
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { Sidebar } from 'flowbite-react';
import { MdOutlineArrowCircleLeft } from "react-icons/md";

function Drawer({ sideNav,setSideNav }) {
    return (
        <div>
            {
                sideNav === true ? (
                    <Sidebar aria-label="Sidebar with logo branding example " className='border shadow-xl h-screen sm:w-96 w-screen'>
                        <div className='flex flex-wrap justify-between items-center mb-6 mt-4 sm:mb-8 sm:mt-4'>
                            <MdOutlineArrowCircleLeft size={25} className='cursor-pointer' onClick={()=>setSideNav(!sideNav)}/>
                            <h1 className='sm:text-lg font-bold'>Profile</h1>
                            <h1 ></h1>


                        </div>

                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item href="#" icon={HiChartPie}>
                                    Dashboard
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiViewBoards}>
                                    Kanban
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiInbox}>
                                    Inbox
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiUser}>
                                    Users
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiShoppingBag}>
                                    Products
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                    Sign In
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiTable}>
                                    Sign Up
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                ) : ''
            }

        </div>
    )
}

export default Drawer
