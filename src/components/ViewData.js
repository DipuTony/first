import { dblClick } from '@testing-library/user-event/dist/click'
import { data } from 'autoprefixer'
import React from 'react'


export default function ViewData(props) {

    getFetchUsers() {
        this.setState({
            loading: true
        }, () => {
            fetch("http://localhost:8000/info").then(res => res.json()).then(result => this.setState({
                loading: false,
                users: result
            })).catch(console.log);
        });
    }

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

                        {/* {myData.info.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.fname}</td>
                                <td>{e.lname}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}