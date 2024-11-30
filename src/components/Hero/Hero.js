import React, { useState } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import mypic from "../../Asserts/mypic.png";
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.4 },
  }),
};

const Hero = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const words = "Hi, I'm Dhasneem Beevi 👋".split(" ");

  const handleProjectsClick = () => {
    setMessage("They’re smarter than they look 🥳");
    setTimeout(() => {
      navigate("/project");
      setMessage("");
    }, 2000);
  };

  const handleContactClick = () => {
    setMessage("I'll respond before a model finishes training 😉");
    setTimeout(() => {
      navigate("/contact");
      setMessage("");
    }, 2000);
  };

  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={mypic} alt="hero" />
      </div>
      <div className="content">
        <h1 className="text-reveal-container">
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-reveal-word"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </h1>
        <h2
          style={{
            marginBottom: "8%",
            color: "white",
            fontSize: "clamp(1rem, 5vw, 2.5rem)",
            fontStyle: "italic",
          }}
        >
          {" "}
          I turn data into insights while my{" "}
          <span style={{ color: "#ffcc00" }}>models</span> take over the world.{" "}
          {/* <span style={{ color: "#ffcc00" }}>(one dataset at a time).</span> */}
        </h2>
        <div>
          <button onClick={handleProjectsClick} className="btn">
            My Projects
          </button>
          <button onClick={handleContactClick} className="btn btn-light">
            Contact Me
          </button>
        </div>

        {message && (
          <div className="message-popup">
            <p className="popupmsg">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
