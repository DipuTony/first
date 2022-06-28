import React, { useContext } from 'react'
import { useState, useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from './Context';
import ShowData from './ShowData';

const NewFrom = () => {
  const fNameinputRef = useRef(null)
  const lNameinputRef = useRef(null)
  const imginputRef = useRef(null)
  const handleRef = () => {
    fNameinputRef.current.value = "";
    lNameinputRef.current.value = "";
    imginputRef.current.value = "";
  }

  const value = useContext(Context);
  // console.log("this is useContxt", value);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [imgUrl, setUrl] = useState("");

  const toastMsg = (e) => toast(e);

  const insertData = (e) => {
    e.preventDefault();
    // console.log(`First name is ${fname} and Last Name is ${lname}`);

    axios({
      method: 'post',
      url: 'http://localhost:3000/info',
      data: {
        fname: fname,
        lname: lname,
        imgUrl: imgUrl
      }
    }).then(
      // console.log("Added"),
      toastMsg('Data Added Successfully')

    );
  }
  return (
    <div>
      <form onSubmit={insertData}>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">          
              <ShowData />
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add Data</h2>
              <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                <input type="text" ref={fNameinputRef} placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Last Name</label>
                <input type="text" ref={lNameinputRef} placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Image Url</label>
                <input type="text" ref={imginputRef} placeholder="Image Url" value={imgUrl} onChange={(e) => setUrl(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button onClick={handleRef} className="text-white bg-blue-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Data</button>
            </div>
          </div>
        </section>
      </form>
    </div>
  )
}

export default NewFrom
