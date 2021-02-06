import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../Images/loginBackground.jpg';
import './SignupStyle.css';

const Signup = () => {
    return(
        <div className="SignupMain" style={{backgroundImage: `url(${background})`}}>
            <div className="container" >
                <div className="signupForm">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email" />
                    <input type="phone" placeholder="Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button className="btn btn-success">Create Account</button>
                    <p>Already have an account? <Link className="link" to="/login">Login</Link></p>
                </div>

                <div className="message">
                    <h3>Glade to see YOU.</h3>
                    <p>Get Your oppertunity now with +10000 job offer around the world every day.</p>
                </div>
                <div className="Clean"></div>
            </div>
        </div>
        
    );
}

export default Signup;