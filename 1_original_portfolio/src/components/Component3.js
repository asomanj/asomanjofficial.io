import React from "react";
import image_1 from "../images/image_1.png";
import image_2 from "../images/image_2.png";
import image_5 from "../images/image_5.jpg";
import image_7 from "../images/roll_forming_machine.png";

const Component3 = () => {
  return (
    <section id="portfolio" className="two">
      <div className="container">
        <header>
          <h2 className="h1-customFontMPlus_Header_Main p-40">Overview</h2>
        </header>

        {/* Section area for the container, main div */}
        <div className="grid-container1">
          {/* Cookie 1 */}
          <div className="item">
            <img
              src={image_1}
              alt="Image_1"
              className="object-cover rounded-md"
            />
          </div>

          {/*Text wrtingin*/}
          <div className="item-3">
            <header>
              <h2 className="text-center p-10  mt-2">
                Passion for Mechanical Engineering
              </h2>
              <h3 className="text-left p-10 mt-2">
                With an unwavering passion for mechanical engineering, I find
                joy in unraveling the complexities of machinery and turning
                innovative concepts into tangible solutions. My commitment to
                precision and creativity drives me to continuously explore and
                contribute to the ever-evolving world of mechanical design.
              </h3>
            </header>
          </div>

          {/*Text wrtingin*/}
          <div className="item-3">
            <div className="text_pad1_right"></div>
            <header>
              <h2 className="text-center p-10 mt-2">
                Tech and Finance Aptitude in the Global Economy:
              </h2>
              <h3 className="text-right p-10 mt-2">
                Combining a keen aptitude for technology with a deep
                understanding of finance, I actively engage in the global
                economy. By participating in impactful projects and initiatives,
                I strive not only for personal growth but also to contribute
                meaningfully to the dynamic intersections of technology and
                finance that shape our world.
              </h3>
            </header>
          </div>

          {/* Image 2 */}
          <div className="item">
            <img
              src={image_5}
              alt="Image_5"
              style={{
                width: "825px",
                height: "1000px",
              }}
              className="object-cover rounded-md"
            />
          </div>

          {/* Image 3 */}
          <div className="item">
            <img
              src={image_2}
              alt="Image_2"
              className="object-cover rounded-md"
            />
          </div>

          {/*Text wrtingin*/}
          <div className="item-3">
            <header>
              <h2 className="text-center p-10  mt-2">Pursuing Innovation</h2>
              <div className="text_pad1_right"></div>
              <header>
                <h3 className="text-left p-10  mt-2">
                  {" "}
                  At the heart of my professional journey is an unwavering
                  commitment to innovation. I thrive on pushing boundaries,
                  exploring new ideas, and finding creative solutions to
                  challenges. Through a forward-thinking mindset, I am dedicated
                  to making meaningful contributions to the ever-evolving
                  landscape of innovation.
                </h3>
              </header>
            </header>
          </div>

          {/*Text wrtingin*/}
          <div className="item-3">
            <header>
              <h2 className="text-center p-10 mt-2">Skills</h2>
              <div className="text_pad1_right"></div>
              <header>
                {/* Alignment of the text */}
                <h3 className="text-right p-10  mt-2">
                  {" "}
                  Central to my professional journey is a dedication to
                  engineering excellence and front-end development. I specialize
                  in CAD for precise car modeling, React, Tailwind CSS, and
                  JavaScript, complemented by expertise in GD&T, extrusion
                  machines, and heating systems. Passion for innovation drives
                  me to push boundaries and solutions at the intersection of
                  engineering and technology.
                </h3>
              </header>
            </header>
          </div>

          {/* Image 3 */}
          <div className="item">
            <img
              src={image_7}
              alt="Image_7"
              style={{
                width: "750px",
                height: "900px",
              }}
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component3;
