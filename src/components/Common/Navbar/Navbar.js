import React, { Component } from 'react';
import './Navbar.css';
import Link, {NavLink} from 'react-router-dom';
import logo from '../../../images/logo.png';
import * as actionTypes from '../../../store/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal';

class Navbar extends Component {
    state = {
        showingLogin: false,
    }

    loginHandler = () => {
        this.setState({showingLogin: !this.state.showingLogin});
    }

    logoutHandler = () => {

    }

    render () {
        return (
            <div className="container-fluid" id="navContainer">
                <div className="row">
                <LoginModal 
                    showingLogin={this.loginHandler}
                    show={this.state.showingLogin}/>

                    <NavLink to="/">
                        <div className="col-md-1" id="logoCol">
                            <img src={logo} alt="logo" id="navLogo" style={{display: "inline"}}></img>
                        </div>
                    </NavLink>
                    <div className="col-md-1" id="navTitle">
                        <h4><b>Simple</b></h4>
                        <h4><b>Signups</b></h4>
                    </div>
    
                    { this.props.location.pathname === '/' ?
                        <div className="col-md-10" id="navlinks">
                            <NavLink to="/home/registeredEvents" activeClassName="activeNavLink" className="navLink"><b>AUTH HOME</b></NavLink>
                            <a href="#landingHomeContainer" class="navLink"><b>HOME</b></a>
                            <a href="#aboutPage1Container" class="navLink"><b>ABOUT</b></a>
                            <a href="#contactContainer" class="navLink"><b>CONTACT</b></a>
                            <button type="button" class="btn btn-primary" id="navLoginBtn" 
                                onClick={() => this.loginHandler()}><b>LOGIN</b></button>
                        </div> : 
                        <div className="col-md-10" id="navlinks">
                            <NavLink to="/home/registeredEvents" activeClassName="activeNavLink" className="navLink"><b>REGISTERED EVENTS</b></NavLink>
                            <NavLink to="/home/createdEvents" activeClassName="activeNavLink" className="navLink"><b>CREATED EVENTS</b></NavLink>
                            <NavLink to="/home/invites" activeClassName="activeNavLink" className="navLink"><b>INVITES</b></NavLink>
                            <NavLink to="/home/profile" activeClassName="activeNavLink" className="navLink"><b>PROFILE</b></NavLink>
                            <NavLink to="/">
                                <button type="button" activeClassName="activeNavLink" class="btn btn-primary" id="navLoginBtn" 
                                onClick={() => this.logoutHandler()}><b>LOGOUT</b></button>
                            </NavLink>
                        </div>
                    }
    
                </div>
            </div>
        )
    }

};

export default withRouter(Navbar);
