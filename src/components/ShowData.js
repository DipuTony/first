import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { RiDeleteBin2Fill, RiEdit2Fill } from "react-icons/ri";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ShowData(props) {

    const defUrl = "https://i.ibb.co/L1tmLD5/unkwn.jpg";
    const [editBtn, setEditbtn] = useState("Add");
    const [dataLIst, setdataLIst] = useState([{ id: '', fname: '', lname: '', imgUrl:'' }])
    const toastMsg = (e) => toast(e);

    // const editHandle = (id) => {
    //     console.log("Edit Clicked..", id);
    //     setEditbtn("Update");
    // }

    const deleteHandle = (id) => {
        axios.delete(`http://localhost:3000/info/${id}`)
            .then(res => {
                toastMsg('Deleted Successfully...');
            })
    }

    // Make a request for a user with a given ID
    useEffect(() => {
        console.log("Page Lod")
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
    },[dataLIst]);
    return (
        <div>
            {/* <button onClick={dataLoad}>Click</button> */}
            <section className="text-gray-600 body-font">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">ID</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">First Name</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Last Name</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Image</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Edit</th>
                            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataLIst.map((e) => (
                            <tr key={e.id}>
                                <td className="border-t-2 border-gray-200 px-4 py-3">{e.id}</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">{e.fname}</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">{e.lname}</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3"><img src={e.imgUrl ? e.imgUrl : defUrl } className="h-10 w-10 border rounded" alt={`${e.fname}`} /></td>
                                <td className="border-t-2 border-gray-200 px-4 py-3"><RiEdit2Fill onClick={() => props.editHandle(e.id)} /></td>
                                <td className="border-t-2 border-gray-200 px-4 py-3"><RiDeleteBin2Fill onClick={() => deleteHandle(e.id)} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}
