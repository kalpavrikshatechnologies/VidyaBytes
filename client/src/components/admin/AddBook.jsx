import React, { useState } from 'react'
import ClientNav from '../client/ClientNav'
import { HiSearch } from 'react-icons/hi';
import { FiFilter } from "react-icons/fi";
import { Label, TextInput, FileInput } from 'flowbite-react';
import TableCom from '../TableCom';
import Drawer from '../Drawer';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { FileInput, Label } from 'flowbite-react';

function AddBook() {
    const [sideNav, setSideNav] = useState(false)

    const [data, setData] = useState({
        image: "",
        title: "",
        genre: "",
        author: "",
});
    const [error, setError] = useState("");
    const navigate = useNavigate();

const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
};
const handlePhoto = (e) => {
    setData({...data, image: e.target.files[0]});
}

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData();
        formData.append('image', data.image);
        formData.append('title', data.title);
        formData.append('genre', data.genre);
        formData.append('author', data.author);
        const url = "http://localhost:9000/api/books/upload";
        await axios.post(url, formData)
        .then(res => {
            alert("Book is successfully added !!")
            // console.log(res.message);
         })
         .catch(err => {
            console.log(err.response.data);
         });
    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message);
        }
    }
};
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
                        <input type="file"
                        placeholder="Image "
                        name="image"
                        accept=".png, .jpg, .jpeg"
                        onChange={handlePhoto}
                        required className="file-input file-input-bordered w-full mb-4" />

                        <label className=''>Title</label>
                        <input type="text"
                        placeholder="Title"
                        name="title"
                        onChange={handleChange}
                        value={data.title}
                        required className="input input-bordered w-full mb-4" />

                        <label >Genres</label>
                        <input type="text" placeholder="tech , fiction , ....."
							name="genre"
							onChange={handleChange}
							value={data.genre}
							required className="input input-bordered w-full " />

                            <label >Author</label>
                        <input type="text" placeholder="Author name "
							name="author"
							onChange={handleChange}
							value={data.author}
							required className="input input-bordered w-full " />
                        {error && <div  >{error}</div>}
                        <button onClick={handleSubmit} className='bg-teal-500 p-4 w-full mt-4 text-black font-bold'>ADD</button>
                        

                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button  className="btn">Close</button>
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
