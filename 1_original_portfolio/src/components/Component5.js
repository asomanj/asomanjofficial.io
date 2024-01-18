// Component5.js
//  Contact

import React from "react";

const Component5 = () => {
  return (
    <section id="contact" className="four">
      <div className="container">
        <header>
          <h2 className="h2-varela2">Contact</h2>
        </header>

        <p>
          Welcome to my digital space! Let's connect and collaborate on exciting
          ventures. Whether it's about projects, opportunities, or just a
          friendly chat, I'm ready to hear from you. Ready to hire? Let's make
          it happen. Looking forward to the possibilities!
        </p>

        <form method="post" action="#">
          <div className="row">
            <div className="col-6 col-12-mobile">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-mobile">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea name="message" placeholder="Message"></textarea>
            </div>
            <div className="col-12">
              <input type="submit" value="Send Message" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Component5;
