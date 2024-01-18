// Hobbies&Interests.js
import React from "react";
import imageLogo1 from "../images/aisin_group_logo.svg";
import imageLogo2 from "../images/General_motors.svg.png";
import imageLogo3 from "../images/McMaster_University_logo.svg.png";
import imageLogo4 from "../images/Nissan_2020_logo.svg.png";
import imageLogo5 from "../images/toyota-7.svg";
import imageLogo6 from "../images/Fiat_Chrysler_Automobiles_logo.svg.png";

const ComponentPartners = () => {
  const imageStyle = {
    objectFit: "contain",
  };

  return (
    <section id="bottom" className="five">
      <div className="containerOverallGroupPartner2">
        <div className="containerGroupPartners2">
          {/* Title of the partners pad */}
          <header className="headerWorkRelationship">
            <h2 className="h2-customFontMPlus_Header align-items:center justify-content:center p-10">
              Prior Work Collaborations
            </h2>
          </header>
          <div className="HeadingBoxGPB">
            <div className="table1">
              <div className="cell1">
                <img
                  src={imageLogo1}
                  alt="imageLogo1"
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  className="object-cover rounded-md"
                />
              </div>
              <div className="cell1">
                <img
                  src={imageLogo2}
                  alt="imageLogo2"
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  className="object-cover rounded-md"
                />
              </div>
              <div className="cell1">
                <img
                  src={imageLogo3}
                  alt="imageLogo3"
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  className="object-cover rounded-md"
                />
              </div>
              <div className="cell1">
                <img
                  src={imageLogo4}
                  alt="imageLogo4"
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  className="object-cover rounded-md"
                />
              </div>
              <div className="cell1">
                <img
                  src={imageLogo5}
                  alt="imageLogo5"
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  className="object-cover rounded-md"
                />
              </div>
              <div className="cell1">
                {/* Placeholder for the sixth image */}
                <img
                  src={imageLogo6}
                  alt="imageLogo6"
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentPartners;
