import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomDatePicker from './Datepic';


//import {AiOutlineCloudUpload, AiOutlineMinusCircle} from 'react-icons/ai';


function Form1() {

  const initialValues = {
    locntype:"",
    hrs:"",
    start_date:"",
    end_date: "",
    no_of_people: "",
    pay_rate:"",
    job_title:"",
    job_desc:"",
    jobtype:"",
};
const jobtypeoptions = [
  { value: 'parttime', label: 'parttime' },
  { value: 'internship', label: 'internship' },
  { value: 'freelance', label: 'freelance' },
  { value: 'fulltime', label: 'fulltime' },
  { value: 'any', label: 'any'},
];

const locntypeoptions = [
  { value: 'remote', label: 'remote' },
  { value: 'hybrid', label: 'hybrid' },
  { value: 'on-site', label: 'on-site' },
];

// const {user} = useContext(UserContext)
// const [file, setFile]  = useState()


    // function handleFile(event){
    //     setFile(event.target.files[0])
    // }

const validationSchema = Yup.object().shape({
  locntype: Yup.string('locntype is required'),
  jobtype: Yup.string('jobtype is required'),
  hrs: Yup.number().required("hrs per week is required"),
  start_date:Yup.date().required("start date is required").nullable(),
  end_date:Yup.date().required("end date is required") ,
  no_of_people:Yup.number().required("no of people  required"),
  pay_rate:Yup.number(),
  job_title: Yup.string("job title required"),
  job_desc: Yup.string("job description required")

});


async function onSubmit(values, {setSubmitting, resetForm}) {
        //console.log(values);
        try {
            console.log(values);
            const username = localStorage.getItem("username");
            console.log(username);
            await ProfileUpdate(username, values,1);
            alert("Profile Updated successful");
            localStorage.setItem('ProfileInfo',JSON.stringify(values))
            resetForm();
          } catch (error) {
            alert("Registration closed");
            console.log(error);
          } finally {
            setSubmitting(false);
          }
    }


  return (
    <div>
      <div className='h-auto w-full flex flex-col justify-center px-5 md:px-40 py-5'>
                
                <Formik 
                initialValues = {initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                    {({ isSubmitting }) => (
                      
                       <div className='w-7/8'>
                      <Form>

                            <h1 className='text-2xl font-serif font-bold text-gray-1000 pt-4 pb-2'>Basic Details</h1>
                           
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row py-3'>
                                <div className='w-full items-start  '>
                                    <label className='text-lg font-serif  text-gray-700 mb-5'>job title</label>
                                    
                                        <Field type="text" name="job_title" className='outline outline-gray-300 rounded-sm px-2 s w-full focus:outline-form-border  placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                        </Field>
                                        <ErrorMessage style={{ color: 'red' }} name="job_title" component="div" />
                                </div>
                            </div>
                             <div className='h-auto w-full flex flex-row justify-between md:flex-row py-3'>
                                <div className='py-3 flex flex-col w-1/2'>
                                  <label htmlFor="jobtype" className='py-1'>JobType</label>
                                    <Field as="select" name="jobype" className="w-4/5">
                                      <option value="">Select an option</option>
                                      {jobtypeoptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                          {option.label}
                                        </option>
                                      ))}
                                    </Field>
                                    <ErrorMessage name="jobtype" />
                                 </div>
                                <div className='py-3 flex flex-col w-1/2'>
                                <label htmlFor="locntype" className='py-1'>Locn type</label>
                                    <Field as="select" name="locntype" className="w-full">
                                      <option value="">Select an option</option>
                                      {locntypeoptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                          {option.label}
                                        </option>
                                      ))}
                                    </Field>
                                    <ErrorMessage name="locntype" />
                                   </div>
                             </div> 
                           
                            <div className=' w-full  items-start flex flex-col justify-between md:flex-col py-3 '>
                            
                                <label className='text-lg font-serif  text-gray-700 w-full'>How many hours per week</label>
                                <Field type="text" name="hrs" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                </Field>
                                <ErrorMessage style={{ color: 'red' }} name="hrs" component="div" />
            
                             
                            </div>
                            <div className='h-auto w-full flex flex-row justify-between item-stretch md:flex-row py-3'>
                              <div className="w-1/2 flex flex-col ">
                              <label className='text-lg font-serif  text-gray-700'>start date</label>
                              <Field component={CustomDatePicker} name="start_date" className="w-4/5 "/>
                               <ErrorMessage name="end_date"  style={{ color: 'red' }}  component="div" />
                                
                              </div>
                            
                              <div className="w-1/2 flex flex-col">
                                <label className='text-lg font-serif  text-gray-700'>End date</label>
                                <Field component={CustomDatePicker} name="end_date" className="w-full"/>
                               <ErrorMessage name="end_date"  style={{ color: 'red' }}  component="div" />
                              </div>
                            
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row py-3'>
                                <div className='w-full md:w-full items-start'>
                                  <label className='text-lg font-serif  text-gray-700'>How many people needed </label>
                                </div>
                                <div className='md:w-full w-full items-start '>
                                    <Field type="text" name="no_of_people" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="no_of_people" component="div" />
                                </div>
                            </div>
                            <div className='h-auto w-full flex flex-row justify-between md:flex-row py-3'>
                             
                                    <label className='text-lg font-serif  text-gray-700 w-2/5'>Pay Rate</label>
                                
                                    <Field type="text" name="pay_rate" className=' w-1/2 outline outline-gray-300 rounded-sm py-1 focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="pay_rate" component="div" />
                                    
                              
                            </div>
                             <div className='h-auto w-full flex flex-col justify-between md:flex-col py-3'>
                                <div className='w-full  md:3/5 items-start '>
                                  <label className='text-lg font-serif  text-gray-700'>Job Description</label>
                                </div>
                                <div className='w-full md:3/5  items-start  '>
                                    <Field type="text" name="job_desc" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full h-20 focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="job_desc" component="div" />
                                </div>
                            </div>
                           
                    <div className='flow-root'>
                    
                    <button 
                        type="submit" 
                       disabled={isSubmitting}
                        className='float-right bg-gray-900 rounded-full px-6 py-2 text-sm font-semibold text-slate-200 text-xl hover:bg-slate-600'>
                        continue
                    </button>
                      </div>
                       </Form>
                      </div>
                    )}
                </Formik>
            </div>
    </div>
  )
}

export default Form1;
