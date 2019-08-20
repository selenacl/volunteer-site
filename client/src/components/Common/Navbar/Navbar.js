import React, { Component } from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import logo from '../../../images/logo.png';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';
import LoginModal from '../LoginModal/LoginModal';

class Navbar extends Component {
    state = {
        showingLogin: false
    }

    loginHandler = () => {
        this.setState({showingLogin: !this.state.showingLogin});
    }

    logoutHandler = (e) => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render () {
        const { isAuthenticated} = this.props.auth;

        const landingLinks = (
            <div>
            <NavLink to="/home/registeredEvents" activeClassName="activeNavLink" className="navLink"><b>AUTH HOME</b></NavLink>
            <a href="#landingHomeContainer" class="navLink"><b>HOME</b></a>
            <a href="#aboutPage1Container" class="navLink"><b>ABOUT</b></a>
            <a href="#contactContainer" class="navLink"><b>CONTACT</b></a>
            <button type="button" class="btn btn-primary" id="navLoginBtn" 
                onClick={() => this.loginHandler()}><b>LOGIN</b></button>
            </div>
        );

        const authLinks = (
            <div>
            <NavLink to="/home/registeredEvents" activeClassName="activeNavLink" className="navLink"><b>REGISTERED EVENTS</b></NavLink>
            <NavLink to="/home/createdEvents" activeClassName="activeNavLink" className="navLink"><b>CREATED EVENTS</b></NavLink>
            <NavLink to="/home/invites" activeClassName="activeNavLink" className="navLink"><b>INVITES</b></NavLink>
            <NavLink to="/home/profile" activeClassName="activeNavLink" className="navLink"><b>PROFILE</b></NavLink>
            <NavLink to="/">
                <button type="button" activeClassName="activeNavLink" class="btn btn-primary" id="navLoginBtn" 
                onClick={(e) => this.logoutHandler(e)}><b>LOGOUT</b></button>
            </NavLink>
            </div>
        );

        return (
            <div className="container-fluid" id="navContainer">
                <div className="row">
                <LoginModal 
                    showingLogin={this.loginHandler}
                    show={isAuthenticated ? false : this.state.showingLogin}/>

                    <NavLink to="/">
                        <div className="col-md-1" id="logoCol">
                            <img src={logo} alt="logo" id="navLogo" style={{display: "inline"}}></img>
                        </div>
                    </NavLink>
                    <div className="col-md-1" id="navTitle">
                        <h4><b>Simple</b></h4>
                        <h4><b>Signups</b></h4>
                    </div>
    
                    <div className="col-md-10" id="navlinks">
                        {this.props.location.pathname === '/' ? landingLinks : authLinks}
                    </div> 
    
                </div>
            </div>
        )
    }

};

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(withRouter(Navbar));
