import React, { useState ,useContext} from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {AiOutlineCloudUpload, AiOutlineMinusCircle} from 'react-icons/ai';
// import {BsPlusCircle} from 'react-icons/bs';
import { ProfileUpdate } from '../api/ProfileUpdate';
// import { UserContext } from '../context/UserContextProvider';


function Profile_Info(){

    const initialValues = {
        name: "",
        // c_email: "",
        phone_number: "",
        description: "",
        address: ""
    };

    const [file, setFile]  = useState()

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Company_name is required"),
        phone_number: Yup.string().required("Company contact number is required").length(10),
        address: Yup.string().required("Company address is required"),
        description : Yup.string()

    });

    async function onSubmit(values, {setSubmitting, resetForm}) {
        try {
            const username = localStorage.getItem("username");
            await ProfileUpdate(username, values,1);
            alert("Profile Updated successfully");
            localStorage.setItem('ProfileInfo',JSON.stringify(values))
            resetForm();
          } catch (error) {
            alert("Profile Updation closed");
            console.log(error);
          } finally {
            setSubmitting(false);
          }
    }


    return (
        <div className='h-auto w-full flex flex-col bg-gray-900'>
            <div className='h-[50px] w-full flex justify-center bg-gray-800 rounded-md items-center'>
                <h1 className='text-2xl font-sans font-bold text-gray-100'>Profile</h1>
            </div>
            <div className='h-auto w-full flex flex-col justify-center min-px-5 md:px-40 py-5'>
                
                <Formik 
                initialValues = {initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>

                            <h1 className='text-2xl font-serif font-bold text-gray-100 pl-4 pt-4 pb-2'>Profile Details</h1>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row md:px-10 px-4 py-3'>
                                <Field type="text" name="name" className='text-gray-100 outline bg-gray-900 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="Company Name">
                                        
                                </Field>
                                <ErrorMessage style={{ color: 'red' }} name="name" component="div" />
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row md:px-10 px-4'>
                                    <Field type="text" name="phone_number"  className='text-gray-100  outline bg-gray-900 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="Company Phone Number">
                                        
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="phone_number" component="div" />
                                
                                
                            </div>
                        
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row md:px-10 px-4 py-3'>
                                <Field type="text" name="address" className='text-gray-100  outline bg-gray-900 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="Company Address">
                                        
                                </Field>
                                <ErrorMessage style={{ color: 'red' }} name="address" component="div" />
                            </div>

                            <div className='h-auto md:h-[150px] w-full flex flex-col justify-between md:flex-row md:px-10 px-4 py-3'>
                                <Field type="text" name="description" className='text-gray-100  outline bg-gray-900 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="About your company">
                                        
                                </Field>
                                <ErrorMessage style={{ color: 'red' }} name="description" component="div" />
                            </div>

                            <div className='px-4 md:px-10 py-3'>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className='bg-gray-700 rounded-full px-6 py-2 text-sm font-semibold text-slate-200 text-xl hover:bg-slate-600'>
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