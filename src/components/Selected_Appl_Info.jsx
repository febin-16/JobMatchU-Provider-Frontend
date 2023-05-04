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
  return (
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
                    <button className="bg-gray-900 rounded-full px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-gray-500 focus:outline-none">View Details</button>
                </div>
                <div className=" place-self-center flex flex-row pt-2">
                    <button className="bg-gray-900 rounded-full px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-gray-500 focus:outline-none">
                        <div className='place-self-center flex'>
                            <span className='mx-1'>Chat</span>
                            <BsChatDots className='w-[15px] h-[15px] mx-1 place-self-center'/>
                        </div>
                       
                    
                    </button>
                </div>
            </div>
            
			
		</div>

        

	</div>
  )
}

export default Selected_Appl_Info
