import React, {useState, useEffect} from 'react'
import ApplicantsCard from '../components/ApplicantsCard'
import { GetApplicantsDetails } from '../api/GetApplicantsDetails';
import { useParams } from 'react-router-dom'; //to get Route given by useNavigate
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
    <div>
      {applicants && applicants.map((applicant) => {
        return(
          <ApplicantsCard details={applicant} key={applicant.id}/>
        )
      })}
      
    </div>
  )
}

export default Applicants_Info
