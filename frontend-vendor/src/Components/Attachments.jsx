import React from "react";
import './Attachments.css';
import Sidebar from "./Sidebar";

import { NavLink } from "react-router-dom";
import FaceIcon from '@mui/icons-material/Face';
const Attachments = () => {
    const formsubmit = (e) => {

        e.preventDefault();
        console.log("function is working")
        let formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        console.log(formData)

    };
    return (
        <div className='Appone'>
            <div className='Head-class'>
                <Sidebar />

                <div className="container">
                    <form onSubmit={(event) => {
                        formsubmit(event);

                    }}>
                        <div className="white-bar">
                            <span class="name">Ankush Thakur</span>
                            <div class="icon">
                                <FaceIcon />
                            </div>
                        </div>

                        {/* Navbar code */}
                        <ul className="hero-section">
                            <li><NavLink className="active" to="/">Home</NavLink></li>
                            <li><NavLink className="active" to="/taxdetails">Tax Details</NavLink></li>
                            <li><NavLink className="active" to="/bankdetails">Bank Details</NavLink></li>
                            <li><NavLink className="active" to="#">Branch Address</NavLink></li>
                            <li><NavLink className="active" to="/attachments">Attachments</NavLink></li>
                            <li><NavLink className="active" to="#">Other Details</NavLink></li>
                        </ul>

                        <label for="attachment" className="labelone">Attachment 1</label>
                        <input type="file" id="attachment"/>
                           


                            {/* <div className='head-closed '>
                            <div className='closed-class'>
                                <div class="form-container">
                                    <div className='hero-head'>
                                        <label for="pancard" class="form-label">PAN</label>
                                        <input type="number" id="pancard" name="pancard" className="form-control" />
                                    </div>
                                    <div className='hero-head'>
                                        <label for="gstnumber" class="form-label">GST</label>
                                        <input type="text" id="address" name="address" className="form-control" />
                                    </div>
                                </div>

                            </div>
                        </div> */}
                            <div className="nextbutton">
                                <button type="submit" className="next-btn">
                                    Next
                                </button>
                            </div>

                    </form>
                </div >
            </div>
        </div>
    )
}

export default Attachments;