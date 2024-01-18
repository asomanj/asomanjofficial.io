// Component2.js
import React from "react";
import image_8 from "../images/rounding-inverted.c6ae47f1.svg";
import image_logo_big from "../images/Bigger_logo_updated.png";
//  Main

const Component2 = () => {
  return (
    <div id="main">
      {/* Area where the white line goes */}
      <section id="top" className="one">
        <div className="container">
          <div className="professionDescription">
            <div className="altCustomHeadingTopPage">
              <div className="imgLogoJA">
                <img
                  src={image_logo_big}
                  alt="image_logo_big"
                  className="w-700 h-700"></img>
              </div>
            </div>
            <span className="titleProfessionFont">
              <p>Design Expert</p>
            </span>
          </div>
          {/* White line for division, promotes anchoring */}
          <ul className="callout_list">
            <li className="item">
              <a href="#" className="link">
                Story
              </a>
            </li>
            <li className="item">
              <a href="#" className="link">
                Aesthetic
              </a>
            </li>
            <li className="item">
              <a href="#" className="link">
                Proficiencies
              </a>
            </li>
            <li className="item">
              <a href="#" className="link">
                Design Knowledge
              </a>
            </li>
          </ul>
        </div>

        <div className="containerRoundedEffect">
          {/* BottomDisplay */}
          <div className="RoundedEffect">
            <img src={image_8} alt="Image_1" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Component2;
