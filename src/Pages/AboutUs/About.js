import React from 'react';
import './AboutStyle.css';
import Background from '../../Images/about.jpg';
import pic1 from '../../Images/hire.png' ;
import pic2 from '../../Images/consulting.png' ;
import pic3 from '../../Images/strategy.png' ;
import pic4 from '../../Images/amazon.png' ;
import pic5 from '../../Images/Google.png' ;
import pic6 from '../../Images/intel.jpg' ;
import pic7 from '../../Images/apple.svg' ;
import pic8 from '../../Images/QWC.jpg' ;
import pic9 from '../../Images/microsoft.png';
import pic10 from '../../Images/samsung.png';
import { Link } from 'react-router-dom';

const About = () =>{
    return(

    <div className="aboutMain">
        <div className="header__bg" style={{backgroundImage: `url(${Background})`}}></div>
        <div className="container">
            <h3>About JF</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo sed diam scelerisque hendrerit. Quisque bibendum ligula leo, ut commodo sapien eleifend ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        
            
            <div className="ourServices partation">

                <h2 className="Headers">Our Services</h2>
                <hr className="HR"/>
                <p className="HeaderParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo sed diam scelerisque hendrerit. Quisque bibendum ligula leo, ut commodo sapien eleifend ac.</p>
        
                <div className="service">
                    <img src={pic1} width = "50%"/>
                    <h4>Recruiting</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo sed diam scelerisque hendrerit. Quisque bibendum ligula leo, ut commodo sapien eleifend ac.</p>
                </div>

                <div className="service">
                    <img src={pic2} width = "32%"/>
                    <h4>Consulting</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo sed diam scelerisque hendrerit. Quisque bibendum ligula leo, ut commodo sapien eleifend ac.</p>
                </div>

                <div className="service">
                    <img src={pic3} width = "32%"/>
                    <h4>Strategy</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo sed diam scelerisque hendrerit. Quisque bibendum ligula leo, ut commodo sapien eleifend ac.</p>
                </div>
                
                <div className="Clear"></div>
            </div>

            <div className="clients partation">
                <h2 className="Headers">Clients</h2>
                <hr className="HR"/>
                <p className="HeaderParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo sed diam scelerisque hendrerit. Quisque bibendum ligula leo, ut commodo sapien eleifend ac.</p>

                <img className="Clients-img" src={pic4}></img>
                <img className="Clients-img" src={pic5}></img>
                <img className="Clients-img" src={pic6}></img>
                <img className="Clients-img" src={pic7}></img>
                <img className="Clients-img" src={pic8}></img>
                <img className="Clients-img" src={pic9}></img>
                <img className="Clients-img" src={pic10}></img>

            </div>

            <div className="testimonials partation">
                <h2 className="Headers">Testimonials</h2>
                <hr className="HR"/>
                <p className="HeaderParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo sed diam scelerisque hendrerit. Quisque bibendum ligula leo, ut commodo sapien eleifend ac.</p>

                <div className="testimonialsModels">
                    <p className="testimonialsParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo sed diam scelerisque hendrerit. Quisque bibendum ligula leo, ut commodo sapien eleifend ac.</p>
                    <div className="testimonialfooter">
                        <h4>Steve Jobs</h4>
                        <p>co-founder of Apple Inc.</p>
                    </div>
                </div>

                
                <div className="testimonialsModels">
                    <p className="testimonialsParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo sed diam scelerisque hendrerit. Quisque bibendum ligula leo, ut commodo sapien eleifend ac.</p>
                    <div className="testimonialfooter">
                        <h4>Jeff Bezos</h4>
                        <p>Amazon CEO</p>
                    </div>
                </div>

                
                <div className="testimonialsModels">
                    <p className="testimonialsParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo sed diam scelerisque hendrerit. Quisque bibendum ligula leo, ut commodo sapien eleifend ac.</p>
                    <div className="testimonialfooter">
                        <h4>Bill Gates</h4>
                        <p>co-founder of Microsoft Corporation.</p>
                    </div>
                </div>
                <div className="Clear"></div>

            </div>
        </div>

        <div className="AboutFooter">
            <div className="container">
                <h3>Get Our Services</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo sed diam scelerisque hendrerit. Quisque bibendum ligula leo, ut commodo sapien eleifend ac.</p>
                <Link to="/contact#"><button>Contact Us</button></Link>
            </div>
        </div>
        
    </div>
    );
}

export default About;
