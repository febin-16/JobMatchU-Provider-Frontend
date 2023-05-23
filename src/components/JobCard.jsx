import React, {useState} from 'react'
import { BiMoney } from "react-icons/bi";
import {BsBriefcaseFill} from "react-icons/bs";
import {FcLike} from "react-icons/fc";
import {HiOutlineClipboardList} from "react-icons/hi";
import {AiOutlineHeart} from "react-icons/ai";
import Applicants_Info from './Applicants_Info';
import Selected_Appl_Info from './Selected_Appl_Info';
import { Link } from 'react-router-dom';

// bg-gradient-to-r from-gray-400 to-gray-500
// bg-zinc-400 bg-blend-color
// bg-gradient-to-l from-zinc-400 via-zinc-300 to-zinc-400

function JobCard({details}){
	// const [liked,setLiked] = useState(false);
    //const [clicked,setClicked] = useState("Profile")


  return (
    <div className='w-full h-auto pb-2 flex flex-row justify-center p-3 md:px-40'>	
		<div className="flex justify-between w-full min-h-[250px] h-auto md:h-[250px] border border-solid rounded-xl p-4 bg-gray-200 hover:shadow-md drop-shadow-md hover:shadow-gray-400">
            <div className=''>
                <div className="flex justify-between items-center py-3 ">
                    <h2 className="text-2xl font-bold text-gray-900 mr-4">{details.title}</h2>
                </div>
                <div className=''>
                    <h3 className="flex flex-wrap text-xl font-large text-gray-900 pt-1">{details.locationtype}</h3>
                    <h3 className="flex flex-wrap text-xl font-large text-gray-900 pt-1">{details.location}</h3>
                    <h3 className="flex flex-wrap text-xl font-large text-gray-900 pt-1">{details.stripend}</h3>    
                </div>
                <div className='flex flex-row flex-wrap space-x-2 pt-2'>
                    {details.tags.map((i) => {
                        return(
                            <div className='flex bg-gray-300 rounded'>
						        <HiOutlineClipboardList className='place-self-center'/>
						        <span>{i}</span>
					        </div>
                        );
                    })}
				</div>
            </div>
			{/* w-fill h-fill */}
            <div className='flex flex-col justify-center'>
                <div className=" place-self-center flex pt-2">
                    {/* {clicked ? < Applicants_Info/> :} */}
                    <Link to='/Profile/Applicants_Info'>
                        <button className="bg-gray-900 rounded-full px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-gray-500 focus:outline-none">View Applicants</button>
                    </Link>
                </div>
                <div className=" place-self-center flex pt-2">
                    <Link to='/Profile/Selected_Applicants_Info'>
                        <button className="bg-gray-900 rounded-full px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-gray-500 focus:outline-none" >Selected Applicants</button>

                    </Link>
                </div>
            </div>

			
		</div>

        

	</div>
  )
}

export default JobCard
