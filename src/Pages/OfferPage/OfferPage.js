import React from 'react';
import './OfferPageStyle.css';

const OfferPage = () =>{

    return(
        <div className="container">
            <div className ="offerDetails">
                <h3>Front End Developer</h3> 
                <span>Software engineering</span>
                <hr/>
                <span>2021/ 7/ 8</span>
                <span>Entry Level - 1 Years Experience</span>

                <p>description description description description description description descr iption descr iption desc ription descrip tion description description description description description description description description</p>
                <hr/>
                
                <h4>Job requirments</h4>
                <ul>
                    <li>Soft Skills</li>
                    <li>Managment</li>
                    <li>familiar with Ruby</li>
                    <li>+1 years experience with React, HTML, CSS, and JavaScript</li>
                    <li>Build restful API</li>
                </ul>
                <div className="skills">
                    <span className="badge badge-secondary">database</span>
                    <span className="badge badge-secondary">SQL</span>
                    <span className="badge badge-secondary">Datastructure</span>
                    <span className="badge badge-secondary">Spring boot</span>
                    <span className="badge badge-secondary">java</span>
                </div>

                <textarea className="CoverLetter" placeholder="Cover letter"/>

                <a href=""><button className="btn btn-primary"> Apply </button></a>

            </div>
        </div>
    );

}

export default OfferPage;