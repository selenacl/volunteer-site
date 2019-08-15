import React from 'react';
import './LoginModal.css';

function signUpForm() {
    return (
        <div className="row loginModalSignUpForm">
            <div className="form loginModalSignUpForm">
                <div className="form-group">
                    <input type="text" class="form-control" className="signUpTextBox" aria-describedby="enterEmail" placeholder="First Name"></input>
                </div>
                <div className="form-group">
                    <input type="text" class="form-control" className="signUpTextBox" aria-describedby="enterEmail" placeholder="Last Name"></input>
                </div>
                <div className="form-group">
                    <input type="email" class="form-control" className="signUpTextBox" aria-describedby="enterEmail" placeholder="Your Email"></input>
                </div>
                <div className="form-group">
                    <input type="password" class="form-control" className="signUpTextBox" placeholder="Password"></input>
                </div>
                <div className="form-group">
                    <input type="password" class="form-control" className="signUpTextBox" placeholder="Confirm Password"></input>
                </div>
                <button type="submit" class="btn btn-primary" id="signUpSubmitBtn">SIGN UP</button>
            </div>
        </div>
    );
}

export default signUpForm;
