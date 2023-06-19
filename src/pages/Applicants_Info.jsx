import React, {useState, useEffect} from 'react'
import ApplicantsCard from '../components/ApplicantsCard'
import { GetApplicantsDetails } from '../api/GetApplicantsDetails';
import { useParams } from 'react-router-dom'; //to get Route given by useNavigate
import Footer from '../components/Footer';
const Applicants_Info = () => {
  const route= useParams();
  const [applicants,setApplicants] = useState(null);
  useEffect(()=>{
    async function getApplicants(){
      try{
        const job_id = route.job_id;
        const applicant = await GetApplicantsDetails(job_id);
        console.log("applicants details: ",applicant);
        setApplicants(applicant);
      }
      catch(error)
      {
        console.error(error);
      }
    }
    getApplicants();
  },[])
  
  return (
    <div className='bg-gray-900'>
      <div className='h-[50px] w-full  flex justify-center rounded-md items-center'>
          <h1 className='text-2xl font-sans font-bold text-gray-100'>Applicants</h1>
      </div>
      {applicants && applicants.map((applicant) => {
        return(
          <ApplicantsCard details={applicant} key={applicant.id}/>
        )
      })}

      <Footer />
      
    </div>
  )
}

export default Applicants_Info
