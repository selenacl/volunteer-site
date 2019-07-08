import React from 'react';
import './AboutPage1.css';
import screenshot from '../../images/placeholder.png';

const aboutPage1 = (props) => {
    return (
        <div className="container-fluid" id="aboutPage1Container">
            <div className="row">
                <div className="col-md-6" id="organizerScreenshotBox">
                    <img src={screenshot} alt="screenshot" id="organizerScreenshot"></img>
                </div>
                <div className="col-md-6" id="organizerTextBox">
                    <h1><b>Create events,<br />add timeslots,<br />send reminders</b></h1>
                </div>
            </div>
            
        </div>
    )
};

export default aboutPage1;
