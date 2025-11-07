import React, { useState } from "react";
import { ReactComponent as MailIcon } from "../asserts/mail.svg";
import mandala from "../asserts/Hero Mandala.png";
import logo from "../asserts/VFilms Logo.png";


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="hero">
      <div className="heroHeader">
        <nav className="nav">
          <div className="navItems">
            <ul className={isOpen ? "open" : ""}>
              <li>Services</li>
              <li>Their Stories</li>
              <li>Our Story</li>
              <li>Varnan</li>
              <li>
                <button className="cntBtn">
                  Let’s Talk
                  <span className="boundingBox">
                    <MailIcon className="mailIcon" />
                  </span>
                </button>
              </li>
            </ul>
            <div className="menu" onClick={toggleMenu}>
              <div className={`bar top ${isOpen ? "open" : ""}`}></div>
              <div className={`bar bottom ${isOpen ? "open" : ""}`}></div>
            </div>
          </div>
        </nav>
      </div>
      <div className="heroContent">
        <div className="leftContent">
          <img src={mandala} className="mandalaImg" alt="" />
          <img src={logo} className="logoImg" alt=""/>
        </div>
        <div className="rightContent">
          <p className="lable1">Varnan is where stories find their voice and form</p>
          <p className="lable2">Films . Brands . Art</p>
          <p className="lable3">Since 2009, V’ve been telling stories - stories of people, their journeys, and the places that shape them.
            Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
            V doesn’t just tell stories - V honors them.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
