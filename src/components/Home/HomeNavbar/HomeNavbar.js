import React from 'react';
import Link, {NavLink} from 'react-router-dom';
import '../../LandingPage/LandingNavbar/LandingNavbar.css';
import logo from '../../../images/logo.png';
import '../../Home/HomeNavbar/HomeNavbar.css'
const homeNavbar = (props) => {
    return (
        <div className="container-fluid" id="landingNavContainer" className="homeNavbarContainer">
            <div className="row">
                <NavLink to="/">
                    <div className="col-md-1" id="logoCol">
                        <img src={logo} alt="logo" id="landingNavLogo" style={{display: "inline"}}></img>
                    </div>
                </NavLink>
                <div className="col-md-5" id="landingNavTitle">
                    <h4><b>Simple</b></h4>
                    <h4><b>Signups</b></h4>
                </div>
                <div className="col-md-6" id="landingNavlinks">
                    <NavLink to="/home/registeredEvents" activeClassName="activeNavLink" className="landingNavLink"><b>REGISTERED EVENTS</b></NavLink>
                    <NavLink to="/home/createdEvents" activeClassName="activeNavLink" className="landingNavLink"><b>CREATED EVENTS</b></NavLink>
                    <NavLink to="/home/invites" activeClassName="activeNavLink" className="landingNavLink"><b>INVITES</b></NavLink>
                    <NavLink to="/home/profile" activeClassName="activeNavLink" className="landingNavLink"><b>PROFILE</b></NavLink>
                    <button type="button" activeClassName="activeNavLink" class="btn btn-primary" id="landingNavLoginBtn" 
                        onClick={props.loggingIn}><b>LOGIN</b></button>
                </div>
            </div>
        </div>
    )
};

export default homeNavbar;
