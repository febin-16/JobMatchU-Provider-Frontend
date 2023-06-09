import React, { useState ,useContext, useEffect} from 'react'; 
import {GetDashBoardDetails} from '../api/GetDashBoardDetails'
function Dashboard() {
    const [details,setDetails]=useState(null)
    useEffect(()=>{
        const username=localStorage.getItem('username')
        // const email = localStorage.getItem("email");
        // const username='Febin P Biju'
        async function GetDashBoardDetail(){
            try{
                const details=await GetDashBoardDetails(username)
                console.log(details);
                setDetails(details)
            }
            catch{
                console.log(error);
            }
        }
        GetDashBoardDetail()
    },[])
  return (
    <div className='h-auto w-full flex flex-col'>
        {details && <div>
            <div className='h-[50px] w-full flex justify-center bg-gray-800 rounded-md items-center'>
                <h1 className='text-2xl font-sans font-bold text-gray-100'>Dashboard</h1>
            </div>
            <div className='h-auto w-full flex flex-col justify-center min-px-5 md:px-40 py-5'>
                
                

                            
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row md:px-10 px-4 py-3'>
                                <div  className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="Company Name">
                                    <h1>{details.name}</h1>
                                </div>
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row md:px-10 px-4'>
                                <div className='md:w-2/5 items-start py-3'>
                                    <div  className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="Company Phone Number">
                                        <h1>{details.phone_number}</h1>
                                    </div>
                                    
                                </div>
                                <div className='md:w-2/5 items-start py-3 '>
                                    <div type="text"  className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="Company Email Id">
                                        <h1>{localStorage.getItem("email")}</h1>
                                    </div>
                                </div>
                            </div>
                        
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row md:px-10 px-4 py-3'>
                                <div className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="Company Address">
                                       <h1>{details.address}</h1> 
                                </div>
                            </div>

                            <div className='h-auto md:h-[150px] w-full flex flex-col justify-between md:flex-row md:px-10 px-4 py-3'>
                                <div  className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="About your company">
                                        <h1>{details.description}</h1>
                                </div>
                            </div>

                       
                
            </div>
            </div>}
        </div>
  )
}

export default Dashboard
