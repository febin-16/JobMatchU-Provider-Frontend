import React, { useState ,useContext} from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {AiOutlineCloudUpload, AiOutlineMinusCircle} from 'react-icons/ai';
// import {BsPlusCircle} from 'react-icons/bs';
// import { ProfileUpdate } from '../api/ProfileUpdate';
// import { UserContext } from '../context/UserContextProvider';


function Profile_Info(){

    const initialValues = {
        company_name: "",
        c_email: "",
        c_phone: "",
        c_desc: "",
        c_address: ""
    };

    const [file, setFile]  = useState()
    // const {user} = useContext(UserContext)

    function handleFile(event){
        setFile(event.target.files[0])
        // console.log(event.target.files[0])
    }

    const validationSchema = Yup.object().shape({
        company_name: Yup.string().required("Company_name is required"),
        c_email: Yup.string().required("Company email is required"),
        c_phone: Yup.string().required("Company contact number is required"),
        c_address: Yup.string().required("Company address is required"),
        c_desc : Yup.string()

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
        <div className='h-auto w-full flex flex-col'>
            <div className='h-[50px] w-full flex justify-center bg-gray-300 rounded-md items-center'>
                <h1 className='text-2xl font-sans font-bold text-gray-500'>Profile</h1>
            </div>
            <div className='h-auto w-full flex flex-col justify-center min-px-5 md:px-40 py-5'>
                
                <Formik 
                initialValues = {initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>

                            <h1 className='text-2xl font-serif font-bold text-gray-500 pl-4 pt-4 pb-2'>Profile Details</h1>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row md:px-10 px-4 py-3'>
                                <Field type="text" name="company_name" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Company Name">
                                        
                                </Field>
                                <ErrorMessage style={{ color: 'red' }} name="company_name" component="div" />
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row md:px-10 px-4'>
                                <div className='md:w-2/5 items-start py-3'>
                                    <Field type="text" name="c_phone" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Company Phone Number">
                                        
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="c_phone" component="div" />
                                </div>
                                <div className='md:w-2/5 items-start py-3 '>
                                    <Field type="text" name="c_mail" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Company Email Id">
                                        
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="c_mail" component="div" />
                                </div>
                            </div>
                        
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row md:px-10 px-4 py-3'>
                                <Field type="text" name="c_address" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Company Address">
                                        
                                </Field>
                                <ErrorMessage style={{ color: 'red' }} name="c_address" component="div" />
                            </div>

                            <div className='h-auto md:h-[150px] w-full flex flex-col justify-between md:flex-row md:px-10 px-4 py-3'>
                                <Field type="text" name="c_desc" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="About your company">
                                        
                                </Field>
                                <ErrorMessage style={{ color: 'red' }} name="c_desc" component="div" />
                            </div>

                            <div className='px-4 md:px-10 py-3'>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className='bg-gray-900 rounded-full px-6 py-2 text-sm font-semibold text-slate-200 text-xl hover:bg-slate-600'>
                                Save
                                </button>
                            </div>
                        </Form>
                        
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Profile_Info;