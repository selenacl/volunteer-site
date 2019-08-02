import React from 'react';
import './LoginModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

class LoginModal extends React.Component {
    state = {
        showLoginForm: true,
        showSignUpForm: false,
        active: true
    }

    toggleLoginFormHandler = () => {
        this.setState({showLoginForm: true});
        this.setState({showSignUpForm: false});
    }

    toggleSignUpFormHandler = () => {
        this.setState({showSignUpForm: true});
        this.setState({showLoginForm: false});
    }

    toggleClassHandler = () => {
        this.setState({active: !this.state.active});
    }

    render () {
        return (
            <div 
                className="container loginModalCard"
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
                <div className="row">
                    <div className="col-md-5" id="loginModalLeft">
                        <h1 id="loginModalLeftText">Welcome back!</h1>
                    </div>
                    <div className="col-md-7" id="loginModalRight">
                        <div className="row" id="loginExit">
                            <button type="button" activeClassName="activeNavLink" class="btn" id="loginExitButton" onClick={this.props.loggingIn}><FontAwesomeIcon icon={faTimes} /></button>
                        </div>
                        <div className="row loginModalHeader">
                            <div className="col-md-6 loginModalLink">
                                <a href="#" className={this.state.showLoginForm ? "activeLoginLink" : "loginModalLink"} onClick={this.toggleLoginFormHandler}>LOGIN</a>
                            </div>
                            <div className="col-md-6 loginModalLink">
                                <a href="#" className={this.state.showSignUpForm ? "activeLoginLink" : "loginModalLink"} onClick={this.toggleSignUpFormHandler}>SIGN UP</a>
                            </div>
                        </div>
                        { this.state.showLoginForm ?
                        <div>
                            <LoginForm />
                        </div> : 
                        <div>
                            <SignUpForm />
                        </div>
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginModal;
