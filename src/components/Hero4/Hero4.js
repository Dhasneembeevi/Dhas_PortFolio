import "./Hero4.css";
import Intro4 from "../../Asserts/bg4.webp";
import React from "react";
// import { useTheme } from "../../Theme.js";
const Hero4 = (props) => {
  // const { darkMode } = useTheme();
  const { heading, text1 } = props;
  return (
    <div className="hero4">
      <div className="mask4">
        <img className="intro-img4" src={Intro4} alt="hero" />
      </div>
      <div className="content4">
        <div>
          <h1 className="content_header4">{heading}</h1>
          <p className="content_passage4">
            {text1}{" "}
           
        
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
