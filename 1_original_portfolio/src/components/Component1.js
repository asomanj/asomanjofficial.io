import React from "react";

// This imports the font style, eventually move this over to the css file
// For the font import, you would typically add it to your CSS file directly, not in the head of your HTML/JSX file

const Component1 = () => {
  return (
    <>
      {/* The font import is typically done in the CSS file */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Varela+Round" rel="stylesheet" /> */}

      {/* HTML5 UP Prologue info */}
      {/* Commenting in JSX is done using curly braces and slashes */}
      {/* The head and meta tags should be part of the main HTML structure, not inside a component */}
      {/* They are typically placed in the index.html file */}

      {/* HTML structure starts here */}
      <html>
        <head>
          <title>James Asomani Page Design Expert</title>
          <meta charset="utf-8" />
          <meta
            meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 user-scalable=no"
          />
          {/* Link to your main CSS file */}
          <link rel="stylesheet" href="assets/css/main.css" />
        </head>
        {/* Rest of your HTML content goes here */}
      </html>
    </>
  );
};

export default Component1;
