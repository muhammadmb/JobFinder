import React from "react";
import './FooterStyle.css';
import background from '../Images/FooterBackground.jpg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import PrintIcon from '@material-ui/icons/Print';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const Footer = () => {

    var CurrentYear = new Date().getFullYear();

    return (
        <div className="main" style ={{backgroundImage: `url(${background})`}}>
            <div className="container" >
                <ul className = "list">
                    <h4 className="header">Address</h4>
                    <li>1234 Street Name</li>
                    <li>City, AA 99999</li>
                </ul>

                <ul className = "list">
                    <h4 className="header">Contacts</h4>
                    <li><MailOutlineIcon/> support@mobirise.com</li>
                    <li><PhoneIcon/> +1 (0) 000 0000 001</li>
                    <li><PrintIcon/> +1 (0) 000 0000 002</li>
                </ul>

                <ul className = "list">
                    <h4 className="header">Links</h4>
                    <li><a className="Link" href="#"> JF Blog</a></li>
                    <li><a className="Link" href="#"> About Us</a></li>
                    <li><a className="Link" href="#"> Support</a></li>
                </ul>

                <div className="Clear"></div>

                <hr/>

                <div className="socialMedia">
                    <div>© Copyright {CurrentYear} Free footer templates - All Rights Reserved</div>
                    <div className="icons">
                        <a href="#" ><FacebookIcon /> </a>
                        <a href="#" ><TwitterIcon /> </a>
                        <a href="#" ><InstagramIcon /> </a>
                        <a href="#" ><WhatsAppIcon /> </a>
                        <a href="#" ><LinkedInIcon /> </a>
                        <a href="#" ><YouTubeIcon /> </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;