import React, { useState ,useContext, useEffect} from 'react'; 
import {GetDashBoardDetails} from '../api/GetDashBoardDetails'
function Dashboard() {
    const [details,setDetails]=useState(null)
    useEffect(()=>{
        //const username=localStorage.getItem('username')
        const username='Febin P Biju'
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
                <div className='h-[50px] w-full flex justify-center bg-gray-300 rounded-md items-center'>
                    <h1 className='text-2xl font-sans font-bold text-gray-500'>Dashboard</h1>
                </div>
            <div className='h-auto w-full flex flex-col justify-center min-px-5 md:px-40 py-5'>
                
                

                            <h1 className='text-2xl font-serif font-bold text-gray-500 pl-4 pt-4 pb-2'>Dashboard Details</h1>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row md:px-10 px-4 py-3'>
                                <div  className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Company Name">
                                    <h1>{details.name}</h1>  
                                </div>
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row md:px-10 px-4'>
                                <div className='md:w-2/5 items-start py-3'>
                                    <div  className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Company Phone Number">
                                        <h1>9999999999</h1>
                                    </div>
                                    
                                </div>
                                <div className='md:w-2/5 items-start py-3 '>
                                    <div type="text"  className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Company Email Id">
                                        <h1>abc@gmail.com</h1>
                                    </div>
                                </div>
                            </div>
                        
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row md:px-10 px-4 py-3'>
                                <div className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Company Address">
                                       <h1>Mumbai, Maharashtra, India</h1> 
                                </div>
                            </div>

                            <div className='h-auto md:h-[150px] w-full flex flex-col justify-between md:flex-row md:px-10 px-4 py-3'>
                                <div  className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="About your company">
                                        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h1>
                                </div>
                            </div>

                       
                
            </div>
            </div>}
        </div>
  )
}

export default Dashboard
