import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../Images/HomeBackground.jpg';
import './HomeStyle.css';

const Home =() =>{
    return(
        <div className="home BackgroundCover" style={{backgroundImage: `url(${background})`}}>
            <div className="container">
                <p>Your New Beginning Starts Here.</p>
                <Link className="ButtonLink" to = "/Offers"><button className="rounded">Apply For A Job Now</button></Link>
            </div>
        </div>
    );
}

export default Home;