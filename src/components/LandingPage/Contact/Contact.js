import React from 'react';
import './Contact.css';

const contact = () => {
    return (
        <div className="container-fluid" id="contactContainer">
            <div className="row">
                <h2 id="contactHeader">Have a question? Let us know:</h2>
            </div>
            <div className="row">
                <form id="contactForm">
                    <div className="form-group">
                        <input type="email" class="form-control" id="contactEmail" aria-describedby="enterEmail" placeholder="Your Email"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" class="form-control" id="contactSubject" placeholder="Subject Line"></input>
                    </div>
                    <div className="form-group">
                        <textarea class="form-control" id="contactMessage" rows= "10" placeholder="Type your message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" id="contactSubmitBtn">SUBMIT</button>
                </form>
            </div>
        </div>
    )
};

export default contact;
