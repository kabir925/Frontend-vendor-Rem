import React from "react";
import './Navbar.css'
import Sidebar from './Sidebar';
import { NavLink } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="appone">
            <div className='Head-class'>
                <Sidebar />

                <ul>
                    <li><NavLink class="active" to="/">Home</NavLink></li>
                    <li><NavLink to="/bankdetails">News</NavLink></li>
                    <li><NavLink to="/taxdetails">Contact</NavLink></li>

                </ul>

            </div>
        </div>
    )
}

export default NavBar