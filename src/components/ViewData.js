import { dblClick } from '@testing-library/user-event/dist/click'
// import { data } from 'autoprefixer'
import React from 'react'
import axios from 'axios';
import { useState } from 'react';


export default function ViewData(props) {

    const [dataLIst, setdataLIst] = useState([{id:'',fname:'',lname:''}])

    // Make a request for a user with a given ID
axios.get('http://localhost:8000/info')
.then(function (response) {
  // handle success
  console.log('from axios ',response.data);
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
                            </tr>
                        ))} 
                    </tbody>
                </table>
            </div>
        </div>
    )
}