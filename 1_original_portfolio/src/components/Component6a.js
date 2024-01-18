// Component6.js
import React from "react";
import bankerLampbookcase from "../images/bankerLampbookcase.jpg";

const Component6 = () => {
  return (
    <section id="bottom" className="five">
      <div className="container_grouping_partners">
        <div className="grouping_partner_boxContact">
          <div className="banker_img">
            <img
              src={bankerLampbookcase}
              alt="bankerLamp"
              className="object-cover rounded-full"
            />
          </div>
          <div className="text_box_side_infoContact">
            <header>
              {/* This has the direction of the header text to the left below, it's not in css */}
              <h2 className="h2_Museo_boldContact">Contact Information</h2>
              <h2 className="h2_Museo">
                <p>Phone Number:(825) 747-4055 </p>
                <p>Email:asomanj@gmail.com</p>
                <p>Linkedin:www.linkedin.com/in/jamesasomanilinkedinprofile</p>
              </h2>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Component6;
