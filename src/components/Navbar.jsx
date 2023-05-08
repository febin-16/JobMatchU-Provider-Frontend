import React, { useState, useEffect} from 'react';
import {FaUserCircle} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import config from '../config';
import axios from "axios";
import { BASE_URL } from '../constants/urls';


const CLIENT_ID = config.googleClientId;

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(false);

    
    useEffect(() => {
        setProfile(true);
        const username = localStorage.getItem("username");
        const email = localStorage.getItem("email");
        const image_url = localStorage.getItem("image_url");
        const userInfo = {
          username: username,
          email: email,
          image_url: image_url,
        };
        if (username == null || email == null || image_url == null) {
          setUser(null);
        } else {
          setUser(userInfo);
        }
    // }, [profile]);
    }, [profile]);

    const handleLogin = async (googleData) => {
        console.log(googleData);
        try {
          const response = await axios.post(BASE_URL + "api/auth/google/", {
            token: googleData.credential,
          });
          const data = response.data;
          console.log(data.user.username);
          const userInfo = {
            username: data.username,
            email: data.email,
            image_url: data.image_url,
          };
          setUser(userInfo);
          localStorage.setItem("username", data.user.username);
          localStorage.setItem("email", data.user.email);
          localStorage.setItem("image_url", data.user.image_url);
          console.log(localStorage);
        } catch (error) {
          console.error(error);
        }
    };
    
      const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("image_url");
      };

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
                    <div className="flex flex-col md:flex-row items-center">
                        <button className='mr-2 md:mr-7 hover:cursor-pointer hover:shadow-md py-1'>
                            <span className='font-semibold text-xl'>Notifications</span>
                        </button>
                        <button className='mr-2 md:mr-7 hover:cursor-pointer hover:shadow-md py-1'>
                            <span className='font-semibold text-xl'>Messages</span>
                        </button>
                        <Link className="mr-2 md:mr-7 md:place-self-center hover:cursor-pointer hover:shadow-md py-1" to="/Profile">
                            <FaUserCircle className='w-8 h-8' />
                        </Link>
                        <div className="flex items-center py-1 mr-2">
                            <GoogleOAuthProvider clientId={CLIENT_ID}>
                                <div>
                                {user ? (
                                    <div>
                                    <button
                                        className=" px-3 py-2 mx-1 rounded text-center text-sm bg-blue-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-0 md:w-auto"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                    </div>
                                ) : (
                                    <div className="spacer">
                                    <GoogleLogin
                                        shape="square"
                                        onSuccess={handleLogin}
                                        onFailure={console.error}
                                    />
                                    </div>
                                )}
                                </div>
                            </GoogleOAuthProvider>
                        </div>
                    </div>
                </div>
            </div> 
        </nav>
    </header>
    
  );
}

export default Navbar;
