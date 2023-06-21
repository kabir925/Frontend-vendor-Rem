import React from "react";
import './Signup.css'
const Signup = () => {
    const formsubmit = (e) => {
        e.preventDefault();
        console.log("function is working")
        let formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        console.log(formData)
    };
    return (
        <div>
            <section className="hero-section-1">
                <div className="md-1">
                    <h1>hello</h1>
                </div>  
                    <form onSubmit={(event) => {
                        formsubmit(event);

                    }}>
                        <div class="md-hero">
                            <div className='md-3'>
                                <label for="emailadd" class="form-label">Email</label>
                                <input type="email" id="emailadd" name="emailadd" className="form-control" />
                            </div>
                            <div className='md-3'>
                                <label for="pass" class="form-label">Password</label>
                                <input type="password" id="pass" name="pass" className="form-control" />
                            </div>
                            <div className='md-3'>
                                <label for="phnumber" class="form-label">Phone</label>
                                <input type="number" id="phnumber" name="phnumber" className="form-control" />
                            </div>
                        </div>
                        <div className="nextbutton">
                            <button type="submit" className="signup-button">
                                Signup
                            </button>
                        </div>
                    </form>
               
            </section>

        </div>
    )
}
export default Signup;