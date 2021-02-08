import React from 'react';
import './JobOfferStyle.css';
import { Link } from 'react-router-dom';
import PlaceIcon from '@material-ui/icons/Place';

const JobOffer = () =>{

    return(
        <div className="container jobOfferComponent">
            <h3><Link to="/offer" className="link">Fornt End Developer</Link></h3>
            <p>description description description description description description descr iption descr iption desc ription descrip tion description description description description description description description description  </p>
            <div className="skills">
                <span className="badge badge-secondary">database</span>
                <span className="badge badge-secondary">SQL</span>
                <span className="badge badge-secondary">Datastructure</span>
                <span className="badge badge-secondary">Spring boot</span>
                <span className="badge badge-secondary">java</span>
            </div>
            <div className="country"><PlaceIcon style={{fontSize: 19}}/> United states</div>
        </div>
    );
}

export default JobOffer;