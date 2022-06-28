import React, { useContext } from 'react'
import { useState } from 'react';
import { Formik, From } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from './Context';


export default function MyForm() {

    const value = useContext(Context);
    console.log("this is useContxt", value);

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const toastMsg = (e) => toast(e);

    const insertData = (e) => {
        e.preventDefault();
        // console.log(`First name is ${fname} and Last Name is ${lname}`);

        axios({
            method: 'post',
            url: 'http://localhost:3000/info',
            data: {
                fname: fname,
                lname: lname
            }            
        }).then(            
            console.log("Added"),
            toastMsg('Data Added Successfully')
            
        );
    }

    return (
        <div>
            <h1>This is From Area</h1>
            <form className="w-full max-w-sm" onSubmit={insertData}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            First Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input type="text" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Last Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input type="text" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">           
                        <button className="shadow bg-green-500 text-white font-bold py-2 px-4 hover:bg-green-400 rounded" type='submit'>Add Data</button>                   
                    </div>
                </div>
            </form>
        </div>
    )
}