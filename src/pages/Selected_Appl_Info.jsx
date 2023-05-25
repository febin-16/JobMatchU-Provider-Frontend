import React,{useState, useEffect} from 'react';
import Selected_ApplicantsCard from '../components/Selected_ApplicantsCard';
import {GetSelectedApplDetails} from '../api/GetSelectedApplDetails';
import { useParams } from 'react-router-dom';

const Selected_Appl_Info = () => {
  const route= useParams();
  const [selectedappls,setSelectedAppls] = useState(null);
  useEffect(()=>{
    async function getSelectedAppl(){
      try{
        const job_id = route.job_id;
        const selectedappl = await GetSelectedApplDetails(job_id);
        console.log("selected appl details: ",selectedappl);
        setSelectedAppls(selectedappl);
      }
      catch(error)
      {
        console.error(error);
      }
    }
    getSelectedAppl();
  },[])
  return (
    <div>
      <div className='h-[50px] w-full  flex justify-center bg-gray-300 rounded-md items-center'>
          <h1 className='text-2xl font-sans font-bold text-gray-500'>Selected Applicants</h1>
      </div>
      {selectedappls && selectedappls.map((selectedappl) => {
        return(
          <Selected_ApplicantsCard details={selectedappl} key={selectedappl.id}/>
        )
      })}
      
    </div>
  )
}

export default Selected_Appl_Info
