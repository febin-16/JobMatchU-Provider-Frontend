import React, { useState} from 'react';
import {FaUserCircle} from 'react-icons/fa';
import { Link } from "react-router-dom";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='bg-white'>
        <nav className="container w-full mx-auto px-6 py-3 ">
            <div className='flex flex-col md:flex-row md:justify-between md:items-center '>
                <div className="flex justify-between items-center">
                    <div className='flex items-center'>
                        <Link
                            className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
                            to="/"
                        >
                            JobMatchU
                        </Link>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                            aria-label="toggle menu"
                        >
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                <path
                                    fillRule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={` md:flex items-end ${ 
                isOpen ? "block" : "hidden"
                } `}
                >
                    <div className="flex flex-col md:flex-row items-end">
                        <button className='mr-2 md:mr-10 hover:cursor-pointer hover:shadow-md py-1'>
                            <span className='font-semibold text-xl'>Notifications</span>
                        </button>
                        <button className='mr-2 md:mr-10 hover:cursor-pointer hover:shadow-md py-1'>
                            <span className='font-semibold text-xl'>Messages</span>
                        </button>
                        <button className='md:place-self-center hover:cursor-pointer hover:shadow-md py-1'>
                            {/* <FaUserCircle className='w-8 h-8' /> */}
                        </button>
                    </div>
                </div>
            </div> 
        </nav>
    </header>
    
  );
}

export default Navbar;
