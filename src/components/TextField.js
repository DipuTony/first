import React from 'react'
import { useField } from 'formik'

const TextField = ({label, ...props}) => {

    const [field, meta] = useField(props);
    console.log(field, meta);

  return (
    <div>
        <label htmlFor={field.name}>{label}</label>
      <input 
      {...field} {...props}
      placeholder="First Name" 
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-54 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
      />
                 
    </div>
  )
}

export default TextField
