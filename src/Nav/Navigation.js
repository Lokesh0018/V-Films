import React, { useState } from "react";
import { ReactComponent as MailIcon } from "../asserts/mail.svg";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <div className="nav">
            <div className="navItems">
                <ul className={isOpen ? "open" : ""}>
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/services" >Services</NavLink></li>
                    <li><NavLink to="/about-team">Their Stories</NavLink></li>
                    <li><NavLink to="/about-us">Our Story </NavLink></li>
                    <li><NavLink to="/portofolio">Varnan </NavLink></li>
                    <li>
                        <NavLink to="/contact">
                        <button className="cntBtn">
                            Let’s Talk
                            <span className="boundingBox">
                                <MailIcon className="mailIcon" />
                            </span>
                        </button>
                        </NavLink>
                    </li>
                </ul>
                <div className="menu" onClick={toggleMenu}>
                    <div className={`bar top ${isOpen ? "open" : ""}`}></div>
                    <div className={`bar bottom ${isOpen ? "open" : ""}`}></div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;