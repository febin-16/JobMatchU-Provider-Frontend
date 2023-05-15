import React, {useState} from 'react'
import { BiMoney } from "react-icons/bi";
import {BsBriefcaseFill,BsChatDots} from "react-icons/bs";
import {FcLike} from "react-icons/fc";
import {HiOutlineClipboardList} from "react-icons/hi";
import {AiOutlineHeart} from "react-icons/ai";

// bg-gradient-to-r from-gray-400 to-gray-500
// bg-zinc-400 bg-blend-color
// bg-gradient-to-l from-zinc-400 via-zinc-300 to-zinc-400

function Selected_Appl_Info(){
	const [liked,setLiked] = useState(false);

    const [showModal,setShowModel] = useState(false);
    function handleClick(){
		console.log("jdsoajdo");
		setShowModel(!showModal)
	}
  return (
    <div>
        <div className='w-full h-auto pb-2 flex flex-row justify-center p-3 md:px-40'>	
            <div className="flex justify-between w-full min-h-[250px] h-auto md:h-[250px] border border-solid rounded-xl p-4 bg-gray-200 hover:shadow-md drop-shadow-md hover:shadow-gray-400">
                <div className=''>
                    <div className="flex justify-between items-center py-3 ">
                        <h2 className="text-2xl font-bold text-gray-900 mr-4">Selected Applicants Name</h2>
                    </div>
                    <div className=''>
                        <h3 className="flex flex-wrap text-xl font-large text-gray-900 pt-1">Applicants email</h3>
                        <h3 className="flex flex-wrap text-xl font-large text-gray-900 pt-1">Applicants phone_number</h3>
                        <h3 className="text-xl font-large text-gray-900 pb-1">rating 3/5</h3>
                        
                        
                    </div>
                </div>
                {/* w-fill h-fill */}
                <div className='flex flex-col justify-center'>
                    <div className=" place-self-center flex pt-2">
                        <button className="bg-gray-900 rounded-full px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-gray-500 focus:outline-none" onClick={handleClick}>View Details</button>
                    </div>
                    {/* <div className=" place-self-center flex flex-row pt-2">
                        <button className="bg-gray-900 rounded-full px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-gray-500 focus:outline-none">
                            <div className='place-self-center flex'>
                                <span className='mx-1'>Chat</span>
                                <BsChatDots className='w-[15px] h-[15px] mx-1 place-self-center'/>
                            </div>
                        
                        
                        </button>
                    </div> */}
                </div>
                
                
            </div>

        </div>

        {showModal && ( 
			<div>
				<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
					<div className="relative  w-full md:w-3/4 md:h-3/4 my-6 mx-auto max-w-5xl bg-gray-300 rounded-xl shadow-xl overflow-y-scroll scroll-hidden">
						<div className="border-0 relative flex flex-col w-full outline-none focus:outline-none">
							<div className="relative  pl-4 py-4 md:p-6 flex-auto md:ml-8">
								<div className='flex flex-col border-b solid border-gray-400 pb-2'>
									<h1 className='text-2xl font-semibold text-gray-950 py-1'>Basic Details</h1>

								</div>
								<div className='flex flex-col pl-6'>
									<h1 className='text-xl text-gray-800 py-1 pt-2'>Name</h1>
									<h1 className='text-xl text-gray-800 py-1'>Phone Number</h1>
									<h1 className='text-xl text-gray-800 py-1'>email</h1>
									<h1 className='text-xl text-gray-800 py-1'>Address</h1>
									<h1 className='text-xl text-gray-800 py-1'>Pincode</h1>
								</div>
								<div className='flex flex-col border-b solid border-gray-400 pb-2'>
									<h1 className='text-2xl font-semibold text-gray-800 py-1'>Academic Details</h1>

								</div>
								<div className='flex flex-col pl-6'>
									<h1 className='text-xl text-gray-800 py-1 pt-2'>Level of education</h1>
									<h1 className='text-xl text-gray-800 py-1'>Field of study</h1>
									<h1 className='text-xl text-gray-800 py-1'>Skills</h1>
								
								</div>
								<div className='flex flex-col border-b solid border-gray-400 pb-2'>
									<h1 className='text-2xl font-semibold text-gray-800 py-1'>Work Experience Details</h1>

								</div>
								<div className='flex flex-col pl-6'>
									<h1 className='text-xl text-gray-800 py-1 pt-2'>Job title</h1>
									<h1 className='text-xl text-gray-800 py-1 pb-6'>Job description</h1>								
								</div>

								<div className='flex justify-end p-2 mb-2'>
                                    {/* <div className=" place-self-center flex flex-row pt-2">
                                        <button className="bg-gray-900 rounded-full px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-gray-500 focus:outline-none">
                                            <div className='place-self-center flex'>
                                                <span className='mx-1'>Chat</span>
                                                <BsChatDots className='w-[15px] h-[15px] mx-1 place-self-center'/>
                                            </div>    
                                        </button>
                                    </div>	 */}
								</div>
								
								
								<div className="flex items-center justify-end p-6 border-t border-solid border-gray-400 rounded-b">
                  					<button
                    				className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    				type="button"
                    				onClick={handleClick}
                 					>
                    				Close
                  					</button>
                				</div>
								
							</div>
							
						</div>
					</div>
				</div>
				<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
			</div>
		)}
    </div>
    
  )
}

export default Selected_Appl_Info
