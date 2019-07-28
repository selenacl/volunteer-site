import React, {Component} from 'react';
import LandingNavbar from '../../LandingPage/LandingNavbar/LandingNavbar';
import AboutPage1 from '../../LandingPage/About/AboutPage1';
import AboutPage2 from '../../LandingPage/About/AboutPage2';
import LandingHome from '../../LandingPage/LandingHome/LandingHome';
import Contact from '../../LandingPage/Contact/Contact';
import LoginModal from '../../Common/LoginModal/LoginModal';

class LandingLayout extends Component {
    state = {
        loggingIn: false
    }

    loginHandler = () => {
        this.setState({loggingIn: true});
    }

    render() {
        return (
            <div>
                <LandingNavbar 
                    loggingIn={this.loginHandler}/>
                <LoginModal 
                    show={this.state.loggingIn}/>
                <LandingHome />
                <AboutPage1 />
                <AboutPage2 />
                <Contact />
            </div>
        );
    }
}

export default LandingLayout;