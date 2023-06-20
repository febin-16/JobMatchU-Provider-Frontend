import React,{useState, useEffect} from 'react';
import Selected_ApplicantsCard from '../components/Selected_ApplicantsCard';
import {GetSelectedApplDetails} from '../api/GetSelectedApplDetails';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

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
    <div className='bg-gray-900'>
      <div className='h-[50px] w-full  flex justify-center bg-gray-900 rounded-md items-center'>
          <h1 className='text-2xl font-sans font-bold text-gray-100'>Selected Applicants</h1>
      </div>
      {selectedappls && selectedappls.map((selectedappl) => {
        return(
          <Selected_ApplicantsCard details={selectedappl} key={selectedappl.id}/>
        )
      })}
      
      <Footer />

    </div>
  )
}

export default Selected_Appl_Info
