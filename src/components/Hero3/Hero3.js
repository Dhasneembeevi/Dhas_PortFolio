import "./Hero3.css";
import videoSrc from "../../Asserts/video.mp4";
import React from "react";
// import { useTheme } from "../../Theme.js";
const Hero3 = (props) => {
  // const { darkMode } = useTheme();
  const { heading, text1 } = props;
  return (
    <div className="hero3">
      <div className="mask3">
        {/* <img className="intro-img3" src={Intro3} alt="hero" /> */}
        <video
          className="intro-img3"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className="content3">
        <div>
          <h1 className="content_header3">{heading}</h1>
          <p className="content_passage">{text1}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
