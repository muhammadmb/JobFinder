import React from 'react';
import { Link } from 'react-router-dom';
import './LoginFormStyle.css'
import background from '../../Images/loginBackground.jpg'

const LoginForm =()=>{

    return (
        <div className = "login" style={{backgroundImage: `url(${background})`}}>
            <div className="container">

                <div className="message">
                    <p>
                        Welcome to the biggest job offers website
                    </p>
                </div>

                <div className="loginForm">

                    <h3>Login</h3>
                    <input type="text" placeholder = "Email" />
                    <input type = "password" placeholder = "Password" />
                    <a href = "#">Forgote password?</a>
                    <button className="btn btn-success" type = "button"> LOGIN </button>
                    <p>Don't have an account? <Link to= "signup">Signup Now</Link></p>

                </div>
                <div className="Clear"></div>
            </div>
        </div>

    );

}

export default LoginForm;