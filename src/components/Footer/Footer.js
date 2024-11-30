import "./Footer.css";
import { Link } from "react-router-dom";
import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useTheme } from "../../Theme.js";
import { motion } from "framer-motion";
const Footer = () => {
  const { darkMode } = useTheme();
  return (
    <motion.div
      className={`footer ${darkMode ? "dark" : "light"}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      drag
      dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
    >
      <div className="footer-container">
        <motion.div
          className="leftdiv"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="left">
            <img
              src="https://us.123rf.com/450wm/hamdesain/hamdesain2002/hamdesain200200048/142445320-letter-d-beauty-women-face-logo-design-vector.jpg?ver=6"
              alt="logo"
              className="logofooter"
            />
            <Link to="/">
              <span className={`myname ${darkMode ? "dark" : "light"}`}>
                {" "}
                Dhasneem
              </span>
            </Link>
          </div>
        </motion.div>
        <div
    
          className={`rightfooter ${darkMode ? "dark" : "light"}`}
        >
          <div className="location">
            <a
              href="https://www.linkedin.com/in/dhasneembeevi/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="fa-linkedin-in" />
            </a>

            <a
              href="https://www.instagram.com/_dhasneeem_/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="fa-instagram" />
            </a>

            <a
              href="https://github.com/Dhasneembeevi"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="fa-github " />
            </a>
          </div>
          <motion.div
            className="connect"
            whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/contact">
              <button
                className="footerbtn" 
                // ${darkMode ? "btn btn-light" : "btn btn-dark"}`}
              >
                {" "}
                Let's Connect
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
