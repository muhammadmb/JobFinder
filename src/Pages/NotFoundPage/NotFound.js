import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundStyle.css';

const NotFound =()=>{

    return (
        <div className="NotFoundMain">
            <div className="container">
                <div className="Clear"></div>
                <section className="error-container">
                    <span>4</span>
                    <span><span className="screen-reader-text">0</span></span>
                    <span>4</span>
                </section>
                <h1>The page you are looking for does not exist. <Link className="offersLink" to="/offers"> Here Your offers</Link></h1>

            </div>
        </div>
    );

}

export default NotFound;