import React from 'react';
import './AboutPage2.css';
import screenshot from '../../images/placeholder.png';

const aboutPage2 = (props) => {
    return (
        <div className="container-fluid" id="aboutPage2Container">
            <div className="row">
                <div className="col-md-6" id="volunteerTextBox">
                    <h1><b>View events,<br />register for times,<br />get reminders</b></h1>
                </div>
                <div className="col-md-6" id="volunteerScreenshotBox">
                    <img src={screenshot} alt="screenshot" id="organizerScreenshot"></img>
                </div>
            </div>
        </div>
    )
};

export default aboutPage2;
