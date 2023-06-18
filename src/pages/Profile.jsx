import React,{useState,useEffect} from 'react'
import Profile_Info from '../components/Profile_Info'
import { Link } from 'react-router-dom'
import JobCard from '../components/JobCard'
import Navbar from '../components/Navbar'
import Selected_Appl_Info from '../components/Selected_ApplicantsCard'
import Applicants_Info from '../components/ApplicantsCard'
import { getJobDetails } from '../api/GetJobDetails'
import Dashboard from '../components/Dashboard'

const Profile = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [prof, setProf] = useState("Profile");
  const [jobs,setJobs]= useState(null);
  useEffect(()=>{
    async function getJobs(){  //to get the jobs by this user which is got as return of getJobDetails
      try{
        const username = localStorage.getItem('username');
        const job = await getJobDetails(username);
        console.log("job details",job);
        setJobs(job);
      }
      catch(error)
      {
        console.error(error);
      }
    }
    getJobs();
  },[])
  return (
    // <div>
    //   <Profile_Info />
    // </div>
    <main
      className="min-h-screen w-full bg-gray-100 text-gray-700"
      x-data="layout"
    >
      

      <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-3xl"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
          <div>{prof}</div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`h-screen flex w-72  flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2 ${
            isOpen ? "block" : "hidden"
          } md:block`}
          x-show="asideOpen"
        >
          <Link
            onClick={() => setProf("Dashboard")}
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
          >
            <span className="text-2xl">
              <i className="bx bx-home"></i>
            </span>
            <span>Dashboard</span>
          </Link>

          {/* <Link
            onClick={() => setProf("Chat")}
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
          >
            <span className="text-2xl">
              <i className="bx bx-cart"></i>
            </span>
            <span>Chat</span>
          </Link> */}

          <Link
            onClick={() => setProf("Jobs")}
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
          >
            <span className="text-2xl">
              <i className="bx bx-shopping-bag"></i>
            </span>
            <span>My Jobs</span>
          </Link>

          <Link onClick={()=>setProf("Profile")}  className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
              <span className="text-2xl"><i className="bx bx-user"></i></span>
              <span>Profile</span>
          </Link>
            </aside>
            {prof=="Profile" && 
                <div className="w-full p-4">
                    <Profile_Info/>
                </div>
            }   
            {prof=="Chat" && 
                <div className="w-full p-4">
                    Chat
                </div>
            }  
            {prof=="Dashboard" && 
                <div className="w-full p-4">
                    <Dashboard/>
                </div>
            }  
            {/* <div className={`${isOpen ? "hidden":"block"} w-full p-4 md:block`} ></div> */}
             {prof=="Jobs" && 
                <div className={`${isOpen ? "hidden":"block"} w-full p-4 md:block`} >
                  <div className='h-[50px] w-full flex justify-center bg-gray-300 rounded-md items-center'>
                      <h1 className='text-2xl font-sans font-bold text-gray-500'>My Jobs</h1>
                  </div>
                  {jobs&&jobs.map((job)=>{
                    return(
                      <JobCard  details={job} key={job.id}/>
                    );
                  })}
                </div>
            } 
            </div>

            

    </main>

    
  )
}

export default Profile
