// ComponentNew2.js
import React from "react";
import image_5 from "../images/image_5.jpg";

const ComponentNew2 = () => {
  return (
    <section id="bottom" className="five">
      <div className="container_grouping_partners">
        <div className="grouping_partner_box_2">
          <div className="text_box_side_infoOverview">
            <header>
              {/* This has the direction of the header text to the left below, it's not in css */}
              <h2
                className="h2_Museo_boldContact"
                style={{ textAlign: "left" }}>
                Interests in Engineering and Technology
              </h2>
              <p className="h4_customFontMPlus__Main">
                <li>Internal Comubstion Engines</li>
                <li>Lithium-Ion Batteries</li>
                <li>3D Printing</li>
                <li>CNC Routing</li>
                <li>Front End Development & Back-End Development</li>
                <li>VR Reality and 3D webspaces</li>
              </p>
            </header>
          </div>
          <div className="img">
            <img
              src={image_5}
              alt="Image_5"
              className="object-cover rounded-md"
              style={{ width: "650px", height: "850px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ComponentNew2;
