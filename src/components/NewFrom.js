import React from 'react'
import { Formik, Form } from 'formik'
import TextField from './TextField'
import * as Yup from 'yup';

const NewFrom = () => {
    const validation = Yup.object({
        fname: Yup.string()
        .max(15, 'Should be less then 15')
        .required('Requied'),
        lname: Yup.string()
        .max(15, 'Last Name Should be less then 15')
        .required('Requied'),
    })
  return (
    <Formik
        initialValues={{
            fname: '',
            lname: ''
        }}
        validationSchema = {validation}
    >
      {formik => (
          <div>
              <h1>Add Data</h1>
              {console.log(formik.values)}
              <Form>
                <TextField label="First Name" name="fame" placeholder="First Name"  type="text" required/>
                <TextField label="Last Name" name="lame" placeholder="Last Name"  type="text" required/>
                <button className="shadow bg-green-500 text-white font-bold py-2 px-4 hover:bg-green-400 rounded" type='submit'>Add Data</button>           
                <button className="shadow bg-red-500 text-white font-bold py-2 px-4 hover:bg-red-400 rounded" type='reset'>Reset</button> 
              </Form>
          </div>
      )}
    </Formik>
  )
}

export default NewFrom
