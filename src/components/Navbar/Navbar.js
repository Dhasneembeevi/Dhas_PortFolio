import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { useTheme } from "../../Theme.js";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const { darkMode } = useTheme();

  const handleClick = () => {
    console.log("Hamburger clicked");
    setClick(!click);
  };
  return (
    <div className={`header ${darkMode ? "dark" : "light"}`}>
      <div className="navbar-container">
        <Link to="/">
          <img
            src="https://us.123rf.com/450wm/hamdesain/hamdesain2002/hamdesain200200048/142445320-letter-d-beauty-women-face-logo-design-vector.jpg?ver=6"
            alt="logo"
            className="navlogo"
          />
          <span className="navName" >Dhasneem</span>
        </Link>
      </div>
      <div className="nav-right">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="/Dhasneem_ML_Engineer_.pdf" download="Dhasneem_Resume.pdf">
              <FaDownload
                size={19}
                style={{ color: "rgb(11, 107, 232)", marginRight: "8px" }}
              />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={18} style={{ color: "white" }} />
        ) : (
          <FaBars size={18} style={{ color: "white" }} />
        )}
      </div> */}
      <div
        className="hamburger"
        onClick={() => console.log("Hamburger DIV clicked")}
      >
        {click ? <FaTimes size={18} /> : <FaBars size={18} />}
      </div>

      {/* Side menu */}
      <div className={`side-menu ${click ? "active" : ""}`}>
        <div className="close-btn" onClick={handleClick}>
          <FaTimes size={30} style={{ color: "white" }} />
        </div>
        <ul className="nav-menu">
          <li>
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/project" onClick={handleClick}>
              Project
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleClick}>
              Contact
            </Link>
          </li>
          <li>
            <a href="/Dhasneem_ML_Engineer_.pdf" download="Dhasneem_Resume.pdf">
              <FaDownload
                size={19}
                style={{ color: "rgb(11, 107, 232)", marginRight: "8px" }}
              />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
