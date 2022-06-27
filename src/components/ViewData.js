import React from 'react'
// import { useTable } from "react-table";
import myData from '../data/data.json'

const DisplayData = myData.map((e) => {
    return (
        <div key={e.id}>

            <table>
                <tbody>
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.fname}</td>
                        <td>{e.lname}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
})

export default function ViewData(props) {
    return (
        <div>
            <h1>This is {props.title}</h1>
            <div id='viewData'>
                {DisplayData}
            </div>
        </div>
    )
}