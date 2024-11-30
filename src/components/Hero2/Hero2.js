import "./Hero2.css";
import Intro2 from "../../Asserts/contact.jpg";
import React from "react";
const Hero2 = (props) => {
  const { heading, text1, highlightedText, highlightColor, text2 } = props;
  return (
    <div className="hero2">
      <div className="mask2">
        <img className="intro-img2" src={Intro2} alt="hero" />
      </div>
      <div className="content2">
        <div>
          <h1 className="content_header">{heading}</h1>
          <p className="content_passage">
            {text1}{" "}
            {highlightedText && (
              <span style={{ color: highlightColor }}>{highlightedText}</span>
            )}{" "}
            {text2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
