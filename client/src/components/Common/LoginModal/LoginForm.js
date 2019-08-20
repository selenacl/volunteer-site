import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { loginUser } from '../../../actions/authActions';
import './LoginModal.css';

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        errors: {},
        auth: false
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.setState({auth: nextProps.auth.isAuthenticated});
        }
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(userData);

        this.props.history.push('/home/registeredEvents');
    }

    render () {
        const { errors } = this.state;

        return (
            <div className="row loginModalLoginForm">
                <div className="form loginModalLoginForm">
                    <form onSubmit={this.onSubmit} noValidate> 
                        <div className="form-group">
                            <input 
                                type="email" 
                                class="form-control" 
                                className={classnames('loginTextBox', {
                                    'invalid': errors.email
                                })}
                                id="loginEmail" 
                                aria-describedby="enterEmail" 
                                placeholder="Your Email"
                                name="email"
                                onChange={this.onChange}>
                            </input>
                            {errors.email && (<div className="invalid-text">{errors.email}</div>)}
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                class="form-control" 
                                className={classnames('loginTextBox', {
                                    'invalid': errors.password
                                })}
                                id="loginPassword" 
                                placeholder="Password"
                                name="password"
                                onChange={this.onChange}>
                            </input>
                            {errors.password && (<div className="invalid-text">{errors.password}</div>)}
                        </div>
                        <button type="submit" class="btn btn-primary" id="loginSubmitBtn">LOGIN</button>
                    </form>
                </div>
            </div>
        );
    }
}

LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(withRouter(LoginForm));
