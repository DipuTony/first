import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { RiDeleteBin2Fill, RiEdit2Fill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewData(props) {

    const [dataLIst, setdataLIst] = useState([{ id: '', fname: '', lname: '' }])
    const toastMsg = (e) => toast(e);

    const editHandle = (id) => {
        console.log("Edit Clicked..", id);
    }

    const deleteHandle = (id) => {
        axios.delete(`http://localhost:3000/info/${id}`)  
      .then(res => {  
        toastMsg('Deleted Successfully...');
      })}

    // Make a request for a user with a given ID
    axios.get('http://localhost:3000/info')
        .then(function (response) {
            //   console.log('from axios ',response.data);
            setdataLIst(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });


    return (
        <div>
            <h1>This is {props.title}</h1>
            <div id='viewData'>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                        </tr>
                    </thead>
                    <tbody>

                        {dataLIst.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.fname}</td>
                                <td>{e.lname}</td>
                                <td><RiEdit2Fill onClick={() =>editHandle(e.id)} /></td>
                                <td><RiDeleteBin2Fill onClick={() =>deleteHandle(e.id)}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}