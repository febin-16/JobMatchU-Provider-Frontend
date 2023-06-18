import React from 'react';
import Employer_of_choice from '../assets/Employer_of_choice.png';
import { Link, useNavigate } from 'react-router-dom';

const HeroSection = () => {

  let navigate = useNavigate();

  function handlePostJobButton(){
    const username = localStorage.getItem("username");
    if(username==null){
    alert('Please Login First')
    }
    else{
    navigate('/PostJob');
    }
  }

  return (
    // <div className='flex flex-col justify-center items-center p-4 w-full h-auto md:h-auto'>
    //     <img src={Employer_of_choice} alt="" style={{objectFit: 'fill'}} />
    //     <div className='place-self-center'>
    //        <p className='text-lg font-mono'>“Empower your local community by providing part-time job opportunities for students and help them gain valuable work experience”.</p>
    //     </div> 
    //     <div className='place-self-center items-center py-4 md:py-20'>
    //         <button>
    //             <h1 className='p-3 text-xl font-mono font-bold bg-[#3b55a3] rounded-md text-yellow-50 hover:drop-shadow-md hover:bg-[#6688c7]'>Post Job</h1>
    //         </button>
    //     </div>  
    // </div>
    <div className="w-full h-auto bg-gray-50 flex flex-col items-center">
      <section className="p-10  bg-cover bg-center py-32 w-full bg-opacity-32" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${'https://source.unsplash.com/random'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} >
        <div className="container mx-auto text-left text-white">
          <div className="flex items-center">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-medium mb-6">Welcome to JobMatchU</h1>
                <p className='text-lg mb-12 font-mono'>“Empower your local community by providing <br /> part-time job opportunities for students <br /> and help them gain valuable work experience”.</p>
            </div>
            <div className="w-1/2 pl-16">
              <img src="https://source.unsplash.com/random?ux" className="hidden md:block h-64 w-full object-cover rounded-xl" alt="Layout Image"/>
          </div>
            </div>
          </div>
      </section>
      <div className='bg-slate-600 mt-5 p-2 mb-4 rounded-md hover:drop-shadow-md hover:bg-[#7d87bc]'>
        <button onClick={handlePostJobButton}>
            <h1 className='font-bold font-mono text-xl'>Post Job</h1>
        </button>
      </div>
    </div>
  )
}

export default HeroSection
