// src/App.js
import React, { useState } from "react";
// This is the file that imports the JAMainNew.css file
import JAMainNew from "./JAMainNew";
import "./App.css";

// Previous list -normal screen html stuff
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component4 from "./components/Component4";
import Component6 from "./components/Component6";
import Component6a from "./components/Component6a";
import ComponentPartners from "./components/Component_partners";
import Component9 from "./components/Component9";
import ComponentNew1 from "./components/ComponentNew1";
import ComponentNew2 from "./components/ComponentNew2";
import ComponentNew3 from "./components/ComponentNew3";
import ComponentNew4 from "./components/ComponentNew4";

// New import file
import ThreeScene from "./components/ThreeScene";

const App = () => {
  const [useThreeSceneBackground, setUseThreeSceneBackground] = useState(true);
  return (
    <div>
      <Component1 />
      <Component2 />
      <canvas id="bg"></canvas>
      {useThreeSceneBackground && <ThreeScene />}
      <div
        className={`main-content ${
          useThreeSceneBackground ? "with-three-scene-background" : ""
        }`}></div>
      <Component6 />
      <ComponentNew2 />
      <ComponentNew3 />
      <ComponentNew4 />
      <Component4 />
      <ComponentPartners />
      <Component6a />
      <Component9 />
    </div>
  );
};
export default App;
