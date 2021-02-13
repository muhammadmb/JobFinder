import React from 'react';
import './ContactUsFormStyle.css';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const ContactUsForm = () => {
    return (
        <div className="Form">
            <h2>Have some questions?</h2>
            <EmailOutlinedIcon className="FormIcon" />

            <div className="inputs">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="current job" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="message" />

                <div className="Clear"></div>
                <button className="btn btn-primary">Send</button>
            </div>

        </div>
    );
}

export default ContactUsForm;