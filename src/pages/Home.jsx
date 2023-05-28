import React from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Employer_of_choice from '../assets/Employer_of_choice.png';
import Profile from './Profile';
import Applicants_Info from '../components/Applicants_Info';
import Selected_Appl_Info from '../components/Selected_Appl_Info';

function Home(){
  return (
    <div className='flex flex-col'>
     <Navbar />
      <HeroSection />
       <Profile /> 
      {/* <Applicants_Info /> */}
      {/* <Profile /> */}
	</div>
  )
}
export default Home;
