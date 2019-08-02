import React from 'react';
import './LandingNavbar.css';
import Link, {NavLink} from 'react-router-dom';
import logo from '../../../images/logo.png';

const navbar = (props) => {
    return (
        <div className="container-fluid" id="landingNavContainer">
            <div className="row">
                <NavLink to="/">
                    <div className="col-md-1" id="logoCol">
                        <img src={logo} alt="logo" id="landingNavLogo" style={{display: "inline"}}></img>
                    </div>
                </NavLink>
                <div className="col-md-5" id="landingNavTitle">
                    <h4><b>Ready</b></h4>
                    <h4><b>Registers</b></h4>
                </div>
                <div className="col-md-6" id="landingNavlinks">
                    <NavLink to="/home/registeredEvents" activeClassName="activeNavLink" className="landingNavLink"><b>AUTH HOME</b></NavLink>
                    <a href="#landingHomeContainer" class="landingNavLink"><b>HOME</b></a>
                    <a href="#aboutPage1Container" class="landingNavLink"><b>ABOUT</b></a>
                    <a href="#contactContainer" class="landingNavLink"><b>CONTACT</b></a>
                    <button type="button" class="btn btn-primary" id="landingNavLoginBtn" 
                        onClick={props.loggingIn}><b>LOGIN</b></button>
                </div>
            </div>
        </div>
    )
};

export default navbar;
