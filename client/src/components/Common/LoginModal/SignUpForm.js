import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './LoginModal.css';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions/authActions';

class SignUpForm extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {},
        success: false
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }

        this.props.registerUser(newUser, this.props.history);
    }

    render () {
        let { errors, success } = this.state;

        return (
            <div className="row loginModalSignUpForm">
                <div className="form loginModalSignUpForm">
                    <form onSubmit={this.onSubmit} noValidate>
                        <div className="form-group">
                            <input 
                                type="text" 
                                class="form-control" 
                                className={classnames('signUpTextBox', {
                                    'invalid': errors.firstName
                                })}
                                aria-describedby="enterFirstName" 
                                placeholder="First Name"
                                value={this.state.firstName}
                                name="firstName"
                                onChange={this.onChange}>
                            </input>
                            {errors.firstName && (<div className="invalid-text">{errors.firstName}</div>)}
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                class="form-control" 
                                className={classnames('signUpTextBox', {
                                    'invalid': errors.lastName
                                })}
                                aria-describedby="enterLastName" 
                                placeholder="Last Name"
                                value={this.state.lastName}
                                name="lastName"
                                onChange={this.onChange}>
                            </input>
                            {errors.lastName && (<div className="invalid-text">{errors.lastName}</div>)}
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                class="form-control" 
                                className={classnames('signUpTextBox', {
                                    'invalid': errors.email
                                })}
                                aria-describedby="enterEmail" 
                                placeholder="Your Email"
                                value={this.state.email}
                                name="email"
                                onChange={this.onChange}>
                            </input>
                            {errors.email && (<div className="invalid-text">{errors.email}</div>)}
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                class="form-control" 
                                className={classnames('signUpTextBox', {
                                    'invalid': errors.password
                                })}
                                placeholder="Password"
                                value={this.state.password}
                                name="password"
                                onChange={this.onChange}>
                            </input>
                            {errors.password && (<div className="invalid-text">{errors.password}</div>)}
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                class="form-control" 
                                className={classnames('signUpTextBox', {
                                    'invalid': errors.confirmPassword
                                })}
                                placeholder="Confirm Password"
                                value={this.state.confirmPassword}
                                name="confirmPassword"
                                onChange={this.onChange}>
                            </input>
                            {errors.confirmPassword && (<div className="invalid-text">{errors.confirmPassword}</div>)}
                        </div>
                        {success ? <p>Congrats, you're signed up! Please login.</p> : null}
                        <button type="submit" class="btn btn-primary" id="signUpSubmitBtn" onClick={this.onClick}>SIGN UP</button>
                    </form>
                </div>
                
            </div>
        );
    }
}

SignUpForm.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(SignUpForm));
