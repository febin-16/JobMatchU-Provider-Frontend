import React from 'react'
import { Formik, Field, Form } from 'formik';
export default function Radiobutton1() {
        const handleSubmit = (values) => {
                console.log(`Jobtype value: ${values.jobtype}`);
               
              };
            
  return (
        <Formik initialValues={{ jobtype: ''}} onSubmit={handleSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
           
          <fieldset>
        
            <legend>Jobtype</legend>
            <div className='h-auto w-full flex flex-col justify-between md:flex-col'>
            <label>
              <Field type="radio" name="jobtype" value="Part Time" checked={values.jobtype === 'Part Time'} onChange={handleChange} />
              Part Time
            </label>
            <label>
              <Field type="radio" name="jobtype" value="Internship" checked={values.jobtype === 'Internship'} onChange={handleChange} />
              Internship
            </label>
            <label>
              <Field type="radio" name="jobtype" value="Freelance" checked={values.jobtype === 'Freelance'} onChange={handleChange} />
              Freelance
            </label>
            <label>
              <Field type="radio" name="jobtype" value="FullTime" checked={values.jobtype === 'FullTime'} onChange={handleChange} />
              Internship
            </label>
            <label>
              <Field type="radio" name="jobtype" value="Any" checked={values.jobtype === 'Any'} onChange={handleChange} />
              Any
            </label>
            </div>
            </fieldset>
         
          <button type="submit"  className='h-8  bg-blue-300 rounded-full px-4 py-2 text-sm font-semibold text-slate-200  hover:bg-slate-600'>Submit</button>
         
         
        </Form>
      )}
    </Formik>
  );
};
