import React from "react";
import Logo from "../asserts/VFilms Logo.png";
import Pin from "../asserts/pin.png";
import Card from "../asserts/card.png";
import { ReactComponent as Gate } from "../asserts/gate.svg";
import { ReactComponent as Group } from "../asserts/group.svg";
import { ReactComponent as Vector1 } from "../asserts/vector1.svg";
import { ReactComponent as Vector2 } from "../asserts/vector2.svg";
import { ReactComponent as Vector3 } from "../asserts/vector3.svg";

const AboutTeam = () => {
    return (
        <div className="aboutTeam">
            <div className="navLogoContainer">
                <img src={Logo} alt="" className="navLogo" />
            </div>
            <div className="aboutCard">
                <img src={Pin} alt="" className="pin" />
                <p className="cardContent">
                    Some craft films. Some build brands. Some curate art. We bring it all together - a collective of storytellers driven by one belief: every project deserves to be more than just a message; it should become a masterpiece.
                    From first spark to final frame, from raw ideas to timeless visuals - we shape stories that stay with you.
                </p>
                <img src={Card} alt="" className="card" />
            </div>
            <Gate className="gateImg"/>
            <Group className="group" />
            <Vector1 className="vector1"/>
            <span className="grp1">Branding Experts</span>
            <Vector2 className="vector2"/>
            <span className="grp2">Film Makers</span>
            <Vector3 className="vector3"/>
            <span className="grp3">Art Curators</span>
        </div>

    );
}

export default AboutTeam;