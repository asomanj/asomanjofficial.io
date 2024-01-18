// ComponentResume.js
import React from "react";
import resumePDF from "../extraDocs/JAMES ASOMANI-RESUME-Alberta-11232023.pdf";

const ComponentResume = () => {
  return (
    <section id="bottom" className="five">
      <div className="container_grouping_partners">
        <div className="grouping_partner_boxContact">
          <div className="text_box_side_infoContact">
            <header>
              <h2 className="h2_Museo_boldContact">Resume</h2>
              <h2 className="h2_Museo"></h2>
              {/* Button linking to the PDF file */}
              <div className="col-12">
                <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                  <button>Resume</button>
                </a>
              </div>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentResume;
