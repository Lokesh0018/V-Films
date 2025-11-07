import React from "react";
import Logo from "../asserts/VFilms Logo.png";
import { ReactComponent as Ul } from "../asserts/UL.svg";
import Person1 from "../asserts/person1.png";
import Person2 from "../asserts/person2.png";
import Person3 from "../asserts/person3.png";
import Tape from "../asserts/tape.png";
const Services = () => {
    return (
        <div className="services">
            <div className="navLogoContainer">
                <img src={Logo} alt="" className="navLogo" />
            </div>
            <div className="servicesHeader">
                <p>The storyboard reveals the breadth of our craft.</p>
                <Ul />
            </div>
            <img src={Tape} alt="" className="tape t1" />
            <img src={Tape} alt="" className="tape t2" />
            <img src={Tape} alt="" className="tape t3" />
            <div className="servicesCards">
                <div className="servicesCard c1"><img src={Person1} alt="" /><span>Film Production</span></div>
                <div className="servicesCard c2"><img src={Person2} alt="" /><span>Branding</span></div>
                <div className="servicesCard c3"><img src={Person3} alt="" /><span>Art Curation</span></div>
            </div>
        </div>
    );
}

export default Services;