import React from "react";
import Navbar from "./Navbar/Navbar";
import Work from "./Work/Work";
import Footer from "./Footer/Footer";
import Hero3 from "./Hero3/Hero3";
import "../Header.css";
import Certifications from "./Certifications/Certifications";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero3
        heading="Making the Impossible Look Ridiculously Easy"
        text1={
          <>
            Here's, where{" "}
            <span
              style={{
                color: "#ffcc00",
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
                fontWeight: "600",
              }}
            >
              data meets code
            </span>
            , and{" "}
            <span
              style={{
                color: "#ffcc00",
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
                fontWeight: "600",
              }}
            >
              coffee fuels the magic
            </span>{" "}
            (because let's face it, who really works without it?). I transform{" "}
            <span
              style={{
                color: "#ffcc00",
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
                fontWeight: "600",
              }}
            >
              vague ideas
            </span>{" "}
            into sleek,{" "}
            <span
              style={{
                color: "#ffcc00",
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
                fontWeight: "600",
              }}
            >
              efficient solutions
            </span>{" "}
            with a dash of{" "}
            <span
              style={{
                color: "#ffcc00",
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
                fontWeight: "600",
              }}
            >
              wit
            </span>{" "}
            and a sprinkle of{" "}
            <span
              style={{
                color: "#ffcc00",
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
                fontWeight: "600",
              }}
            >
              technical wizardry
            </span>
            . Each project is a testament to my ability to make the{" "}
            <span
              style={{
                color: "#ffcc00",
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
                fontWeight: "600",
              }}
            >
              impossible
            </span>{" "}
            look effortless—like a magician pulling rabbits out of a hat, but
            with fewer rabbits and{" "}
            <span
              style={{
                color: "#ffcc00",
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
                fontWeight: "600",
              }}
            >
              more code
            </span>
            . Dive in, because who knew solving problems could be this{" "}
            <span
              style={{
                color: "#ffcc00",
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
                fontWeight: "600",
              }}
            >
              fun
            </span>
            ?
          </>
        }
      />
      <Work />
      <Certifications />
      <Footer />
    </div>
  );
};

export default Project;
