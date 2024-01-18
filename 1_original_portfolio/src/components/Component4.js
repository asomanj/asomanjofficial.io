// Component4.js
import React from "react";
import mech_drawing_img from "../images/mechanical_drawing_image.jpg";
// Story

const Component4 = () => {
  return (
    <section id="about" className="three">
      <div className="container">
        <div className="movement2">
          <h2 className="h2MuseoBoldContactComp4">Tech Fusion</h2>
          <div className="largerTextBoxSidePurpose">
            <div className="image featured">
              <img
                src={mech_drawing_img}
                alt="mech_image"
                style={{
                  borderRadius: "15px",
                }}
              />
            </div>
          </div>

          <div className="textBoxSidePurpose">
            <p className="h4_customFontMPlus__MainTechFusion">
              Senior Engineer Expertise
            </p>
            <li>
              Served as a senior engineer for a prominent Japanese automotive
              supplier.
            </li>
            <li>
              Honed skills in mechanical engineering, specializing in Surface-A
              parts.
            </li>
            <p className="h4_customFontMPlus__MainTechFusion">
              Digital Landscape Shaping:
            </p>
            <li>
              Honed skills in mechanical engineering, specializing in Surface-A
              parts.
            </li>
            <li>Merged form and function seamlessly in the digital domain.</li>
            <p className="h4_customFontMPlus__MainTechFusion">
              Full-Stack Passion:
            </p>
            <li>
              Passionate about full-stack development beyond mechanical
              engineering.
            </li>
            <li>
              Demonstrated commitment in a showcase website with technical
              prowess.
            </li>

            <p className="h4_customFontMPlus__MainTechFusion">
              Meticulous Craftsmanship:
            </p>
            <li>
              Meticulously crafted the website, overcoming challenges with
              determination.
            </li>
            <li>
              Pushed creative boundaries, transforming ideas into a visually
              stunning reality.
            </li>

            <p className="h4_customFontMPlus__MainTechFusion">
              Cutting-Edge Technologies:
            </p>
            <li>
              Utilized a trifecta of cutting-edge technologies: React, three.js,
              and JavaScript.
            </li>
            <li>
              Breathed life into the digital landscape with the fusion of these
              technologies.
            </li>

            <p className="h4_customFontMPlus__MainTechFusion">
              Seamless Blend of Art and Technology:
            </p>
            <li>
              Invites exploration of a seamless blend of art and technology.
            </li>
            <li>
              Every pixel, animation, and interaction is a testament to
              excellence and innovation.
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Component4;
