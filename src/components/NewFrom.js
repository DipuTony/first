import React from 'react'
import { Formik, Form } from 'formik'
import TextField from './TextField'

const NewFrom = () => {
  return (
    <Formik
        initialValues={{
            fname: '',
            lname: ''
        }}
    >
      {formik => (
          <div>
              <h1>Add Data</h1>
              <Form>
                <TextField label="First Name" name="fame" type="text"/>
                <TextField label="Last Name" name="lame" type="text"/>
              </Form>
          </div>
      )}
    </Formik>
  )
}

export default NewFrom
