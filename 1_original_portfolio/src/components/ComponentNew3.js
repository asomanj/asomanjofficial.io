// ComponentNew2.js
import React from "react";
import image_2 from "../images/image_2.png";

const ComponentNew2 = () => {
  return (
    <section id="bottom" className="five">
      <div className="container_grouping_partners">
        <div className="grouping_partner_box">
          <div className="img">
            <img
              src={image_2}
              alt="Image_2"
              className="object-cover rounded-md"
            />
          </div>
          <div className="text_box_side_infoOverview">
            <header>
              {/* This has the direction of the header text to the left below, it's not in css */}
              <h2
                className="h2_Museo_boldContact"
                style={{ textAlign: "left" }}
              >
                Innovation and Growth
              </h2>
              <p className="h4_customFontMPlus__Main">
                At the heart of my professional journey is a strong pursuit of
                innovation and growth. I thrive on exploring new ideas, and
                finding creative solutions to challenges. Through a
                forward-thinking mindset, my goal is to continually improve
                myself and pursue innovation in digital and real world
                applications.
              </p>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ComponentNew2;
