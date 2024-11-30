import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Hero4 from "./Hero4/Hero4";
import Myabout from "./Myabout/Myabout";
const About = () => {
  return (
    <div>
      <Navbar />
      <Hero4
        heading="Behind My Neural Network "
        text1={
          <>
            <span
              style={{
                color: "#ffcc00",
                fontSize: "clamp(1.4rem, 2vw, 2.3rem)",
                fontWeight: "500",
              }}
            >
              Master of Data Wizardry
            </span>{" "}
            and{" "}
            <span
              style={{
                color: "#ffcc00",
                fontSize: "clamp(1.4rem, 2vw, 2.3rem)",
                fontWeight: "500",
              }}
            >
              Code Sorcery
            </span>
            , I transform coffee into code and chaos into clarity—one machine
            learning model at a time. With my trusty sidekicks,{" "}
            <span
              style={{
                color: "#ffcc00",
                fontSize: "clamp(1.4rem, 2vw, 2.3rem)",
                fontWeight: "500",
              }}
            >
              Python
            </span>{" "}
            and{" "}
            <span
              style={{
                color: "#ffcc00",
                fontSize: "clamp(1.4rem, 2vw, 2.3rem)",
                fontWeight: "500",
              }}
            >
              SQL
            </span>
            , I build predictive models that rival the reliability of my morning
            caffeine fix. I create web applications that not only function
            seamlessly but also look stunning. Ready to optimize your{" "}
            <span
              style={{
                color: "#ffcc00",
                fontSize: "clamp(1.4rem, 2vw, 2.3rem)",
                fontWeight: "500",
              }}
            >
              data workflows{" "}
            </span>
            and tackle exciting challenges? Let’s make it happen—because who
            doesn’t love a good challenge?
          </>
        }
      />

      <Myabout />
      <Footer />
    </div>
  );
};

export default About;
