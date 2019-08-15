import React from 'react';
import './LoginModal.css';

function loginForm() {
    return (
        <div className="row loginModalLoginForm">
            <div className="form loginModalLoginForm">
                <div className="form-group">
                    <input type="email" class="form-control" className="loginTextBox" id="loginEmail" aria-describedby="enterEmail" placeholder="Your Email"></input>
                </div>
                <div className="form-group">
                    <input type="password" class="form-control" className="loginTextBox" id="loginPassword" placeholder="Password"></input>
                </div>
                <button type="submit" class="btn btn-primary" id="loginSubmitBtn">LOGIN</button>
            </div>
        </div>
    );
}

export default loginForm;
