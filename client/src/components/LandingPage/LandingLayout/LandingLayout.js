import React, {Component} from 'react';
import AboutPage1 from '../../LandingPage/About/AboutPage1';
import AboutPage2 from '../../LandingPage/About/AboutPage2';
import LandingHome from '../../LandingPage/LandingHome/LandingHome';
import Contact from '../../LandingPage/Contact/Contact';

class LandingLayout extends Component {

    render() {
        return (
            <div>
                <LandingHome />
                <AboutPage1 />
                <AboutPage2 />
                <Contact /> 
            </div>
        );
    }
}

export default LandingLayout;