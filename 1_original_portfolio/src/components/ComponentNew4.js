// ComponentNew2.js
import React from "react";
import image_4 from "../images/roll_forming_machine.png";

const ComponentNew4 = () => {
  return (
    <section id="bottom" className="five">
      <div className="container_grouping_partners">
        <div className="grouping_partner_box_2">
          <div className="text_box_side_infoOverview">
            <header>
              {/* This has the direction of the header text to the left below, it's not in css */}
              <h2
                className="h2_Museo_boldContact"
                style={{ textAlign: "center" }}
              >
                Skills
              </h2>
              <p className="h4_customFontMPlus__Main">
                <li>Engineering and Front-end development</li>
                <li>Mech Eng: 3D CAD Skills</li>
                <li>Mech Eng: Designing Functional equipment</li>
                <li>Mech Eng: GD&T</li>
                <li>Computer Programming: React, PHP, Javascript, Python,</li>
                <li>Tailwind, NEXT ide</li>
                <li>VR Reality and 3D webspaces</li>
              </p>
            </header>
          </div>
          <div className="img">
            <img
              src={image_4}
              alt="Image_4"
              className="object-cover rounded-md"
              style={{ width: "620px", height: "650px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ComponentNew4;
