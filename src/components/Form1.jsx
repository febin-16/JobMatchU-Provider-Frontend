import React,{useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Radiobutton1 from './Radiobutton1';
import RadioButton2 from './RadioButton2';
//import {AiOutlineCloudUpload, AiOutlineMinusCircle} from 'react-icons/ai';

function Form1() {

  const initialValues = {
    lcn_type:"",
    hrs:"",
    start_date:"",
    end_date: "",
    no_of_people: "",
    pay_rate_start:"",
    pay_rate_end:"",
    job_title:"",
    job_desc:""
};

const validationSchema = Yup.object().shape({
  lcn_type: Yup.string(),
  hrs: Yup.string().required("hrs per week is required"),
  start_date:Yup.string().required("start date is required"),
  end_date:Yup.string().required("end date is required") ,
  no_of_people:Yup.string().required("no of people  required"),
  pay_rate_start:Yup.string(),
  pay_rate_end:Yup.string(),
  job_title: Yup.string("job title required"),
  job_desc: Yup.string("job description required")

});


async function onSubmit(values, {setSubmitting, resetForm}) {
  console.log(values);
}


  return (
    <div>
      <div className='h-auto w-full flex flex-col justify-center px-5 md:px-40 py-5'>
                
                <Formik 
                initialValues = {initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                       <div className='w-4/5'>
                      

                            <h1 className='text-2xl font-serif font-bold text-gray-1000 pt-4 pb-2'>Basic Details</h1>
                           
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='w-full items-start py-3 '>
                                    <label className='text-lg font-serif  text-gray-700 mb-5'>job title</label>
                                    <div className='pt-2 w-full md:3/5'>
                                        <Field type="text" name="job_title" className='outline outline-gray-300 rounded-sm ml-10 py-1 px-2 space-y-1 w-full focus:outline-form-border focus:ring-1 focus:ring-cyan-500'>
                                        </Field>
                                        <ErrorMessage style={{ color: 'red' }} name="job_title" component="div" />
                                       
                                    </div>
                                  

                                </div>
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='items-strech py-3'>
                                 
                                    
                                    <Radiobutton1/>
                                    
                                 
                                </div>
                                <div className='items-strech py-3'>
                                <RadioButton2/>
                                
                               
                                </div>
                                          
                                    
                          
                              </div>
                           
                            <div className=' w-full  items-start flex flex-col justify-between md:flex-col '>
                              <div>
                                <label className='text-lg font-serif  text-gray-700'>How many hours per week</label>
                              </div>
                              <div className="w-full md:3/5">
                                <Field type="text" name="hrs" className='outline outline-gray-300 rounded-sm py-1 px-2 w-4/5 focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                </Field>
                                <ErrorMessage style={{ color: 'red' }} name="hrs" component="div" />
                              </div>
                             
                            </div>
                            <div className='h-auto w-full flex flex-row justify-between items-stretch md:flex-row pb-4'>
                              <div className="w-1/2 flex flex-col ">
                                <label className='text-lg font-serif  text-gray-700'>start date</label>
                                  <Field type="text" name="start_date" className='outline outline-gray-300 rounded-sm py-1 px-2 w-3/5 focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                      
                                  </Field>
                                  <ErrorMessage style={{ color: 'red' }} name="start_date" component="div" />
                              </div>
                            
                              <div className="w-1/2 flex flex-col">
                                <label className='text-lg font-serif  text-gray-700'>End date</label>
                                  <Field type="text" name="end_date" className='outline outline-gray-300 rounded-sm py-1 px-2 w-3/5 focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                  </Field>
                                  <ErrorMessage style={{ color: 'red' }} name="end_date" component="div" />
                              </div>
                            
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='w-full md:w-3/5 items-start py-3'>
                                  <label className='text-lg font-serif  text-gray-700'>How many people needed </label>
                                </div>
                                <div className='md:w-3/5 w-4/5 items-start py-3'>
                                    <Field type="text" name="no_of_people" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="no_of_people" component="div" />
                                </div>
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-col'>
                                <div className='items-start py-3'>
                                    <label className='text-lg font-serif  text-gray-700'>Pay Rate</label>
                                </div>
                                <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                   <label className='text-lg font-serif  text-gray-700'>From</label>
                                    <Field type="text" name="pay_rate_start" className='outline outline-gray-300 rounded-sm py-1 px-2 w-1/5 focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="pay_rate_start" component="div" />
                                     <label className='text-lg font-serif  text-gray-700'>To</label>
                                     <Field type="text" name="pay_rate_end" className='outline outline-gray-300 rounded-sm py-1 px-2 w-1/5 focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="pay_rate_end" component="div" />
                                     <label className='text-lg font-serif  text-gray-700'>Per Month</label>
                                </div>
                            </div>
                             <div className='h-auto w-full flex flex-col justify-between md:flex-col'>
                                <div className='w-full  md:3/5 items-start py-3'>
                                  <label className='text-lg font-serif  text-gray-700'>Job Description</label>
                                </div>
                                <div className='w-full md:3/5  items-start py-3'>
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
                       
                      </div>
                    )}
                </Formik>
            </div>
    </div>
  )
}

export default Form1;
