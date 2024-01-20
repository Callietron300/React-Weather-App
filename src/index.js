import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Time from "./Time";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="app-container">
      {" "}
      <Time />
    </div>
    <p className="tag">
      This project was coded by Callie 🦎 and is{" "}
      <a
        href="https://github.com/Callietron300/React-Weather-App"
        target="_blank"
      >
        open source
      </a>
      <br />
      Design inspired by{" "}
      <a href="https://dribbble.com/nealhampton" target="_blank">
        Neal Hampton's
      </a>{" "}
      <a
        href="https://dribbble.com/shots/6680361-Dribbble-Daily-UI-37-Weather-2"
        target="_blank"
      >
        Weather App UI Design
      </a>
      .
    </p>
  </StrictMode>
);
