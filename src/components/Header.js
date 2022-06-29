import React from 'react'
import { SiYoutubestudio } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <div>
            <header className="text-black-600">
                <div className="flex p-4 bg-blue-400">
                    <a className="flex title-font font-medium items-center text-gray-900 ">
                        <div style={{ color: '#8830f2' }}> <SiYoutubestudio size={30} /></div>
                        <span className="ml-3 text-xl">{props.title}</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
                        <Link to="/about" className="mr-5 hover:text-gray-900">About</Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-0 md:mt-0">{props.date} </button>
                </div>
            </header>
        </div>
    )
}
