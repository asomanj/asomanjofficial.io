// ComponentNew1.js
import React from "react";
import image_1 from "../images/image_1.png";

const ComponentNew1 = () => {
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
                style={{ textAlign: "left" }}
              >
                Passion for Mechanical Engineering
              </h2>
              <p className="h4_customFontMPlus__Main">
                Passion for Mechanical Engineering With an unwavering passion
                for mechanical engineering, I find joy in unraveling the
                complexities of machinery and turning innovative concepts into
                tangible solutions. My commitment to precision and creativity
                drives me to continuously explore and contribute to the
                ever-evolving world of mechanical design.
              </p>
              {/* Button */}
              <div className="col-12 p-3">
                <input type="submit" value="Read More" />
              </div>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ComponentNew1;
