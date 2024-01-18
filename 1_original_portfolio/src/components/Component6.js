// Component6.js
import React from "react";
import image_1 from "../images/image_1.png";
import resumePDF from "../extraDocs/JAMES ASOMANI-RESUME-Alberta-11232023.pdf";

const Component6 = () => {
  return (
    <section id="bottom" className="five">
      <div className="container_grouping_partners">
        <div className="grouping_partner_box">
          <div className="img">
            <img
              src={image_1}
              alt="Image_1"
              className="object-cover rounded-md"
            />
          </div>
          <div className="text_box_side_infoOverview">
            <header>
              {/* This has the direction of the header text to the left below, it's not in css */}
              <h2
                className="h2_Museo_boldContact"
                style={{ textAlign: "left" }}>
                Profile Overview
              </h2>
              <p className="h4_customFontMPlus__Main">
                Hi, I'm James Asomani, a seasoned design professional who enjoys
                tinkering within the physical and digital realms.
                With seven years of experience as a senior engineer, I've
                collaborated with multiple OEMs, honing my skills in mechanical
                engineering (3D CAD, GD&T, back-end programming).
                <p></p>
                My background includes serving as a Senior Engineer at AISIN
                Technical Center/Toyota. Through this time, I managed programs
                for prominent OEMs and contributed to in-house design
                development for Toyota's Tundra truck.
              </p>
              <p></p>
              <p className="h4_customFontMPlus__Main">
                I've begun to delve more into the digital domain, pursuing my
                interests in programming, mechanical servo motors and
                manufacturing, and battery technology. For example I created
                this site/landing page!  Looking forward to hearing from you in the near future.
              </p>
              <p>
                {/* Button */}
                <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                  <button>Resume</button>
                </a>
              </p>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Component6;
