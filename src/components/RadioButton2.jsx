import React from 'react'
import { Formik, Field, Form } from 'formik';
export default function RadioButton2() {
        const handleSubmit = (values) => {
                console.log(`Locntype value: ${values.locntype}`);
               
              };
  return (
        <Formik initialValues={{ locntype: ''}} onSubmit={handleSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            
            <fieldset>
              <legend>Location Type</legend>
              <div className='h-auto w-full flex flex-col justify-between md:flex-col'>
              <label>
                <Field type="radio" name="locntype" value="Remote" checked={values.locntype === 'Remote'} onChange={handleChange} />
                Remote
              </label>
              <label>
                <Field type="radio" name="locntype" value="Hybrid" checked={values.jobtype === 'Hybrid'} onChange={handleChange} />
                Hybrid
              </label>
              <label>
                <Field type="radio" name="locntype" value="On-site" checked={values.jobtype === 'On-site'} onChange={handleChange} />
                On-site
              </label>
             </div>
              
            </fieldset>
           
            <button type="submit"   className='h-8 bg-blue-300 rounded-full px-4 py-2 text-sm font-semibold text-slate-200  hover:bg-slate-600'>Submit</button>
        
          </Form>
        )}
      </Formik>
  );
};
