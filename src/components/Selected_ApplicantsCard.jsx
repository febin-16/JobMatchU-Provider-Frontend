import React, {useState} from 'react'
import { BiMoney } from "react-icons/bi";
import {BsBriefcaseFill,BsChatDots} from "react-icons/bs";
import {FcLike} from "react-icons/fc";
import {HiOutlineClipboardList} from "react-icons/hi";
import {AiOutlineHeart} from "react-icons/ai";
import Rating from './Rating';
// bg-gradient-to-r from-gray-400 to-gray-500
// bg-zinc-400 bg-blend-color
// bg-gradient-to-l from-zinc-400 via-zinc-300 to-zinc-400

function Selected_ApplicantsCard({details}){
	console.log("sel det: ",details);
    const [showModal,setShowModel] = useState(false);
    function handleClick(){
		console.log("jdsoajdo");
		setShowModel(!showModal)
	}
  return (
    <div>
        <div className='w-full h-auto pb-2 flex flex-row justify-center p-3 md:px-40'>	
            <div className="flex justify-between w-full min-h-[250px] h-auto md:h-[250px] border border-solid rounded-xl p-4 bg-gray-700 hover:shadow-md drop-shadow-md hover:shadow-gray-400">
				<div className=''>
					<div className="flex justify-between items-center py-3 ">
						<h2 className="text-2xl font-bold text-gray-100 mr-4">{details.student.first_name} {details.student.last_name}</h2>
					</div>
					<div className=''>
						<h3 className="flex flex-wrap text-xl font-large text-gray-100 pt-1">{details.student.student.email}</h3>
						<h3 className="flex flex-wrap text-xl font-large text-gray-100 pt-1">{details.student.phone_number}</h3>
						<h3 className="text-xl font-large text-gray-100 pb-1">Skills: {details.student.skills}</h3>
						
						
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
					<div className="relative w-full md:w-3/4 md:h-3/4 my-6 mx-auto max-w-5xl bg-gray-700 rounded-xl shadow-xl overflow-y-scroll scroll-hidden">
						<div className="border-0 relative flex flex-col w-full outline-none focus:outline-none">
							<div className="relative  pl-4 py-4 md:p-6 flex-auto md:ml-8">
								<div className='flex flex-col border-b solid border-gray-400 pb-2'>
									<h1 className='text-2xl font-semibold text-gray-100 py-1'>Basic Details</h1>

								</div>
								<div className='flex flex-col pl-6'>
									<h1 className='text-xl text-gray-100 py-1 pt-2'>{details.student.first_name} {details.student.last_name}</h1>
									<h1 className='text-xl text-gray-100 py-1'>{details.student.phone_number}</h1>
									<h1 className='text-xl text-gray-100 py-1'>{details.student.student.email}</h1>
									<h1 className='text-xl text-gray-100 py-1'>{details.student.first_name} {details.student.last_name}, {details.student.city}, {details.student.district} district, {details.student.state}</h1>
									<h1 className='text-xl text-gray-100 py-1'>{details.student.pincode}</h1>
								</div>
								<div className='flex flex-col border-b solid border-gray-400 pb-2'>
									<h1 className='text-2xl font-semibold text-gray-100 py-1'>Academic Details</h1>

								</div>
								<div className='flex flex-col pl-6'>
									<h1 className='text-xl text-gray-100 py-1 pt-2'>{details.student.level_of_edu}</h1>
									<h1 className='text-xl text-gray-100 py-1'>{details.student.field_of_study}</h1>
									<h1 className='text-xl text-gray-100 py-1'>{details.student.skills}</h1>
								
								</div>
								<div className='flex flex-col border-b solid border-gray-400 pb-2'>
									<h1 className='text-2xl font-semibold text-gray-100 py-1'>Work Experience Details</h1>

								</div>
								<div className='flex flex-col pl-6'>
									<h1 className='text-xl text-gray-100 py-1 pt-2'>{details.student.job_title}</h1>
									<h1 className='text-xl text-gray-100 py-1 pb-6'>{details.student.job_description}</h1>								
								</div>
								<div className='flex flex-col'>
									<Rating details={details}/>
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

export default Selected_ApplicantsCard
