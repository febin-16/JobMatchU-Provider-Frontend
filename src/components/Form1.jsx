import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomDatePicker from './Datepic';
import {AiOutlinePlusCircle} from "react-icons/ai";
import { getProviderId } from '../api/GetProviderId';
import { JobPostUpdate } from '../api/JobPostUpdate';
import { getCategoryDetails } from '../api/GetCategoryDetails';


//import {AiOutlineCloudUpload, AiOutlineMinusCircle} from 'react-icons/ai';


function Form1() {

  const [categoryDetails, setCategoryDetails] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(()=>{
    async function getCategory(){  //to get the jobs by this user which is got as return of getJobDetails
      try{
        const username = localStorage.getItem('username');
        const categoryDet = await getCategoryDetails();
        console.log("Cat details",categoryDet);
        setCategoryDetails(categoryDet);
      }
      catch(error)
      {
        console.error(error);
      }
    }
    getCategory();
  },[])

    const initialValues = {
        locationtype:"",
        hrs:"",
        start_date:"",
        end_date: "",
        count: "",
        stripend:"",
        title:"",
        description:"",
        jobtype:"",
        location : '',
        category : '',

    };

    const [tags,setTags] = useState([]);
    const [input,setInput] = useState('');

    function handleTagChange(event){
        setInput(event.target.value);
    }

    

    function handleTagSubmit(event){
        event.preventDefault();
        setTags([...tags,input]);
        setInput("");
        // setTags(event.target.value);
        console.log("got : ",tags);
    }

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
    locationtype: Yup.string().required('Location type is required'),
  jobtype: Yup.string().required('Job type is required'),
  hrs: Yup.number().required("Hours per week is required"),
  start_date:Yup.date().required("Start date is required").nullable(),
  end_date:Yup.date().required("End date is required") ,
  count:Yup.number().required("Number of people is required"),
  stripend:Yup.number(),
  title: Yup.string().required("Job Title required"),
  description: Yup.string().required("Job Description required"),
  tag : Yup.string(),
  location : Yup.string().required('Location is required'),
  category : Yup.string().required('Category is required'),
});


async function onSubmit(values, {setSubmitting, resetForm}) {
        //console.log(values);
        try {
          const today = new Date();
          const startDate = new Date(values.start_date);
          const endDate = new Date(values.end_date);

          if (startDate < today) {
            alert("Start date cannot be earlier than today's date");
            return;
          }

          if (startDate > endDate) {
            alert("Start date cannot be later than end date");
            return;
          }
          console.log(selectedCategory)
           // console.log(values);
            values = {...values,tags : tags};
            values = {...values,subcategory:selectedCategory[0].id}
            console.log("new values: ",values);
            const username = localStorage.getItem("username");
            const response = await getProviderId(username);
            let profileInfo;
            let profil = localStorage.getItem("ProfileInfo");
          //  console.log("own id: ",response.id);
            const owner = response.id;
            console.log("profile: ",profil);
            values = {...values, username: username};
            if(profil == null){
              profileInfo = '';
              alert('Please Update Your Profile');
            }
            else{
              profileInfo = JSON.parse(profil);
              delete values.category
              await JobPostUpdate(values);
              resetForm();
            }
          } catch (error) {
            alert("Job Posting Failed");
            console.log(error);
          } finally {
            setSubmitting(false);
          }
    }


  return (
    <div>
      <div className='h-auto w-full flex flex-col justify-center px-5 md:px-40 py-5 bg-[#F9F5EB]'>
                
                <Formik 
                initialValues = {initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                    {({setFieldValue, isSubmitting }) => (
                      
                       <div className='w-7/8'>
                      <Form>

                            <h1 className='text-2xl font-serif font-bold text-gray-1000 pt-4 pb-2'>Basic Details</h1>
                           
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row py-3'>
                                <div className='w-full items-start  '>
                                    <label className='text-lg font-serif  text-gray-700 mb-5'>Job Title</label>
                                    
                                        <Field type="text" name="title" className='outline outline-gray-300 rounded-sm px-2 s w-full focus:outline-form-border  placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                        </Field>
                                        <ErrorMessage style={{ color: 'red' }} name="title" component="div" />
                                </div>
                            </div>
                             <div className='h-auto w-full flex flex-row justify-between md:flex-row py-3'>
                                <div className='py-3 flex flex-col w-1/2'>
                                  <label htmlFor="jobtype" className='py-1'>Job Type</label>
                                    <Field as="select" name="jobtype" className="w-4/5 outline outline-gray-300 rounded-sm px-2  focus:outline-form-border  placeholder-gray-300 focus:ring-1 focus:ring-cyan-500">
                                      <option value="">Select an option</option>
                                      {jobtypeoptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                          {option.label}
                                        </option>
                                      ))}
                                    </Field>
                                    <ErrorMessage name="jobtype" style={{ color: 'red' }} component="div" />
                                 </div>
                                <div className='py-3 flex flex-col w-1/2'>
                                <label htmlFor="locationtype" className='py-1'>Location type</label>
                                    <Field as="select" name="locationtype" className="w-full outline outline-gray-300 rounded-sm px-2  focus:outline-form-border  placeholder-gray-300 focus:ring-1 focus:ring-cyan-500">
                                      <option value="">Select an option</option>
                                      {locntypeoptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                          {option.label}
                                        </option>
                                      ))}
                                    </Field>
                                    <ErrorMessage name="locationtype" style={{ color: 'red' }} component="div" />
                                   </div>
                             </div> 
                             {categoryDetails && 
                                 <div  className='h-auto w-full flex flex-row justify-between md:flex-row py-3'>
                                 <div className='py-3 flex flex-col w-1/2'>
                                   <label htmlFor="category" className='py-1'>Category</label>
                                     <Field  as="select" name="category" className="w-4/5 outline outline-gray-300 rounded-sm px-2  focus:outline-form-border  placeholder-gray-300 focus:ring-1 focus:ring-cyan-500" onChange={e => {
                                       const id = categoryDetails.filter((item)=>item.name==e.target.value)
                                       setSelectedCategory(id);
                                      setFieldValue('category',e.target.value);
                                    
                                     }}>
                                       <option value="">Select an option</option>
                                       {categoryDetails.map((option) => (
                                         <option key={option.id} value={option.name}>
                                           {option.name}
                                         </option>
                                       ))}
                                     </Field>
                                     <ErrorMessage name="category" style={{ color: 'red' }} component="div" />
                                     
                                  </div>
                                 
                              </div> 
                             }
                           
                            <div className='h-auto w-full flex flex-row justify-between md:flex-row py-3'>
                                <div className='w-1/2 flex flex-col'>
                                    <label className='text-lg font-serif  text-gray-700 w-full'>Hours per week</label>
                                    <Field type="text" name="hrs" className='outline outline-gray-300 rounded-sm py-1 px-2 w-4/5 focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="hrs" component="div" />
                                </div>
                                <div className='w-1/2  flex flex-col'>
                                    <label className='text-lg font-serif  text-gray-700 w-full'>Location</label>
                                    <Field type="text" name="location" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="location" component="div" />
                                </div>
                                
            
                             
                            </div>
                            <div className='h-auto w-full flex flex-row justify-between  md:flex-row py-3'>
                              <div className="w-1/2 flex flex-col">
                              <label className='text-lg font-serif  text-gray-700 w-full'>Start date</label>
                              <Field component={CustomDatePicker} name="start_date" className="outline outline-gray-300 rounded-sm px-2 s w-full focus:outline-form-border  placeholder-gray-300 focus:ring-1 focus:ring-cyan-500"/>
                               <ErrorMessage name="start_date"  style={{ color: 'red' }}  component="div" />
                                
                              </div>
                            
                              <div className=" w-1/2 flex flex-col">
                                <label className='text-lg font-serif  text-gray-700 w-full'>End date</label>
                                <Field component={CustomDatePicker} name="end_date" className="outline outline-gray-300 rounded-sm px-2 s w-full focus:outline-form-border  placeholder-gray-300 focus:ring-1 focus:ring-cyan-500"/>
                               <ErrorMessage name="end_date"  style={{ color: 'red' }}  component="div" />
                              </div>
                            
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row py-3'>
                                <div className='w-full md:w-full items-start'>
                                  <label className='text-lg font-serif  text-gray-700'>How many people needed </label>
                                </div>
                                <div className='md:w-full w-full items-start '>
                                    <Field type="text" name="count" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="count" component="div" />
                                </div>
                            </div>
                            <div className='h-auto w-full flex flex-row justify-between md:flex-row py-3'>
                             
                                    <label className='text-lg font-serif  text-gray-700 w-2/5'>Pay Rate</label>
                                
                                    <Field type="text" name="stripend" className=' w-1/2 outline outline-gray-300 rounded-sm py-1 focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="stripend" component="div" />
                                    
                              
                            </div>
                            <div className='w-full flex flex-col md:flex-row py-3 md:items-center'>
                                    <label className='text-lg font-serif  text-gray-700 pr-4 '>Tags</label>
                                    <div className='flex flex-row w-full'>
                                        <Field type="text" name="tag" value={input} onChange={handleTagChange} className='outline outline-gray-300 rounded-sm py-1 px-2 w-full md:w-3/4 focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                        </Field>
                                        <span className='p-2 place-self-center' onClick={handleTagSubmit}>
                                            <AiOutlinePlusCircle className='place-self-center w-[30px] h-[30px]'/>
                                        </span>
                                    </div>
                                    
                                    
                                    <div className='w-full flex flex-row flex-wrap px-2 mt-2 py-2'>
                                        {tags.map((tag, index) => (
                                            <div className='bg-gray-300 rounded-full p-2 mx-2 ' key={index}>{tag}</div>
                                        ))}
                                    </div>

                            </div>
                             <div className='h-auto w-full flex flex-col justify-between md:flex-col py-3'>
                                <div className='w-full  md:3/5 items-start '>
                                  <label className='text-lg font-serif  text-gray-700'>Job Description</label>
                                </div>
                                <div className='w-full md:3/5  items-start  '>
                                    <Field type="text" name="description" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full h-20 focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="description" component="div" />
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














