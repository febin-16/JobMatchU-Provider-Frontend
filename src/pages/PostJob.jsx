import React, { useState } from 'react';
import Form1 from '../components/Form1';
//import { Formik, Form, Field, ErrorMessage } from "formik";
//import * as Yup from "yup";
const PostJob=()=>{
//   const initialValues = {
//     job_title: "",
//     hrs_to_work:"",
//     start_date:"",
//     end_state: "",
//     no_of_peoples: "",
//     pay_rate_from:"",
//     pay_rate_to:"",
//     job_desc:"",
   
// };
// const validationSchema = Yup.object().shape({
//   job_title: Yup.string().required("Job title is required"),
//   hrs_to_work: Yup.string().required("Hours to work is required"),
//   start_date: Yup.string().required("Start date of work is required"),
//   end_date: Yup.string().required("End date of work is required"),
//   no_of_peoples: Yup.string().required("Number of peoples required for job is required"),
//   pay_rate_from: Yup.string().required("Starting range of pay is required"),
//   city: Yup.string("Ending range of pay is required"),
//   job_desc: Yup.string().required("Job description is required"),

// });


  return (
    <div className='min-h-screen bg-blue-100'>
      {/* <div className='min-h-screen bg-blue-200 border-solid border-2 border-sky-100 '>
        <div className='h-[50px] w-full flex justify-center bg-blue-300 rounded-md items-center '>
                <h1 className='text-2xl font-sans  text-black font-bold'>Basic Details</h1>
        </div>

       
       </div> */}

       <Form1 />
    </div>
     );
};
export default PostJob;
