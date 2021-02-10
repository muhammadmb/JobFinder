import React from 'react';
import './ContactStyle.css';
import Background from '../../Images/ContactBg.jpg';
import PhoneIcon from '@material-ui/icons/Phone';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

const Contact = () =>{
    return(

        <div className="ContactMain">
            <div className="Background" style={{backgroundImage: `url(${Background})`}}>
            <div className="Contact">
                <div className="container">
                    <h3>Get in touch</h3>
                    <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us.</p>

                    <div className="ContactBox">
                        <div className="TalkToSales">
                            <div className="icon"><PhoneIcon style={{fontSize: 85}}/></div>
                            <h4>Talk To Marketing</h4>
                            <p>Interested in JF? Just pick up the phone to chat with a member of our marketing team.</p>
                            <span>+1 887 555 0000</span>
                            <span>+1 887 555 0001</span>
                        </div>

                        <div className="Conversation">
                            <div className="icon"><QuestionAnswerIcon style={{fontSize: 85}}/></div>
                            <h4>Contact Customer Support</h4>
                            <p>Sometime you need a little help from your friends. Or a JF support. Don't worry, We are here for you.</p>
                            <button className="btn btn-primary">Contact Support</button>
                        </div>
                        <div className="Clear"></div>
                    </div>
                </div>
            </div>
        </div></div>

    );
}

export default Contact;
