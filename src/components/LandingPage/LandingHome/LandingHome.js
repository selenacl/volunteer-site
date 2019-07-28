import React from 'react';
import './LandingHome.css';
import screenshot from '../../../images/desktop.png';
import LoginModal from '../../Common/LoginModal/LoginModal';

const landingHome = () => {
    return (
        <div className="container-fluid" id="landingHomeContainer">
            <div className="row">
                <LoginModal />
                <div className="col-md-6" id="landingHomeLeftBox">
                    <h1><b>Easily register for<br />and create events</b></h1>
                </div>
                <div className="col-md-6" id="landingHomeRightBox">
                <img src={screenshot} alt="screenshot" id="screenshot"></img>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <button type="button" class="btn btn-primary" id="learnMoreBtn"><b>LEARN MORE</b></button>
                </div>
            </div>
        </div>
    )
};

export default landingHome;
