import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getJobDetails } from '../api/GetJobDetails';
import {HiOutlineClipboardList} from "react-icons/hi";
import {AiFillEdit} from 'react-icons/ai';
import EditForm from '../components/EditForm';
import Footer from '../components/Footer';



const JobDetails = () => {
	const route= useParams();
	const [jobs,setJobs]= useState();
	const [clicked,setClicked] = useState(false);
	let curJob;

	function handleEdit(){
		setClicked(true);
	}

	useEffect(()=>{
		async function getJobs(){  //to get the jobs by this user which is got as return of getJobDetails
		try{
			
			const job_id = route.job_id;
			const username = localStorage.getItem('username');
			const job = await getJobDetails(username);
			curJob = job.filter((item)=> item.id == job_id)
			console.log("job details",curJob);
			setJobs(curJob);
			
			console.log("id: ",job_id);
			// console.log("cur jobzzz: ",jobs);
		}
		catch(error)
		{
			console.error(error);
		}
		}
		getJobs();
	},[])

  return (
	<div className=' bg-gray-900'>
		{jobs && <div className='p-4'>
			<div className='h-[50px] flex justify-center bg-gray-900 rounded-md items-center'>
				<h1 className='text-2xl font-sans font-bold text-gray-100'>Job Details</h1>
			</div>
			{!clicked ? (
				<div className='flex p-2 md:m-10 flex-col'>
				<div className='flex flex-col md:flex-row justify-between py-2'>
					<div className='flex flex-col md:flex-row w-2/5 space-x-4 md:space-x-10'>
						<h1 className='text-2xl text-gray-100 py-2'>Job Title : </h1>
						<h1 className='font-semibold text-2xl text-gray-100 py-2'>{jobs[0].title}</h1>
					</div>
					<div className='flex flex-col md:flex-row w-2/5 justify-end space-x-4 md:space-x-10 pr-4 md:pr-20'>
						<div className='flex bg-blue-300 rounded-xl px-2 py-2' onClick={handleEdit}>
							<span className='place-self-center text-xl px-2'>Edit</span>
							<AiFillEdit className='w-[25px] h-[25px] place-self-center'/>
							
						</div>
					</div>
					
				</div>
				<div className='flex flex-col md:flex-row justify-between py-2'>
					<div className='flex flex-col md:flex-row w-2/5 space-x-4 md:space-x-10'>
						<h1 className='text-2xl text-gray-100 py-2'>Job Type : </h1>
						<h1 className='font-semibold text-2xl text-gray-100 py-2'>{jobs[0].jobtype}</h1>
					</div>
					<div className='flex flex-col md:flex-row w-2/5 space-x-4 md:space-x-10'>
						<h1 className='text-2xl text-gray-100 py-2'>Location Type : </h1>
						<h1 className='font-semibold text-2xl text-gray-100 py-2'>{jobs[0].locationtype}</h1>
					</div>
					
				</div>
				<div className='flex flex-col md:flex-row justify-between py-2'>
					<div className='flex flex-col md:flex-row w-2/5 space-x-4 md:space-x-10'>
						<h1 className='text-2xl text-gray-100 py-2'>Hours per week : </h1>
						<h1 className='font-semibold text-2xl text-gray-100 py-2'>{jobs[0].hrs}</h1>
					</div>
					<div className='flex flex-col md:flex-row w-2/5 space-x-4 md:space-x-10'>
						<h1 className='text-2xl text-gray-100 py-2'>Location : </h1>
						<h1 className='font-semibold text-2xl text-gray-100 py-2'>Location: {jobs[0].location}</h1>
					</div>
					
				</div>
				<div className='flex flex-col md:flex-row justify-between py-2'>
					<div className='flex flex-col md:flex-row w-2/5 space-x-4 md:space-x-10'>
						<h1 className='text-2xl text-gray-100 py-2'>Starting date : </h1>
						<h1 className='font-semibold text-2xl text-gray-100 py-2'>{jobs[0].start_date}</h1>
					</div>
					<div className='flex flex-col md:flex-row w-2/5 space-x-4 md:space-x-10'>
						<h1 className='text-2xl text-gray-100 py-2'>Ending date : </h1>
						<h1 className='font-semibold text-2xl text-gray-100 py-2'>{jobs[0].end_date}</h1>
					</div>
					
				</div>
				<div className='flex flex-col md:flex-row justify-between py-2'>
					<div className='flex flex-col md:flex-row w-2/5 space-x-4 md:space-x-10'>
						<h1 className='text-2xl text-gray-100 py-2'>Hiring Insights : </h1>
						<h1 className='font-semibold text-2xl text-gray-100 py-2'>{jobs[0].count}</h1>
					</div>
					<div className='flex flex-col md:flex-row w-2/5 space-x-4 md:space-x-10'>
						<h1 className='text-2xl text-gray-100 py-2'>Pay rate : </h1>
						<h1 className='font-semibold text-2xl text-gray-100 py-2'>{jobs[0].stripend}</h1>
					</div>
					
				</div>
				<div className='flex flex-row flex-wrap space-x-4 md:space-x-4 pt-2 py-4'>
					<h1 className='text-2xl text-gray-100 py-2'>Tags : </h1>
					{jobs[0].tags.map((i,index) => {
						return(
							<div className='flex bg-gray-300 rounded-xl px-2 py-2' key={index}>
								<HiOutlineClipboardList className='place-self-center'/>
								<span className='place-self-center'>{i}</span>
							</div>
						);
					})}
				</div>
				<div className='flex flex-col md:flex-row space-x-4 md:space-x-10 '>
						<h1 className='text-2xl text-gray-100 py-2'>Full Description: </h1>
						<h1 className='font-semibold text-2xl text-gray-100 py-2'>{jobs[0].description}</h1>
				</div>
			</div>
			) : <>
				<EditForm details={jobs} />	
			</>
			}
		</div> }

		<Footer />
		
	</div>
  )
}

export default JobDetails
