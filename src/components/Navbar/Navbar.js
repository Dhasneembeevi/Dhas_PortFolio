import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger.js";
import "./Navbar.css";
import { FaTimes, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="header">
      <div className="navbar-container">
        <Link to="/" className="brand">
          <img
            src="https://us.123rf.com/450wm/hamdesain/hamdesain2002/hamdesain200200048/142445320-letter-d-beauty-women-face-logo-design-vector.jpg?ver=6"
            alt="logo"
            className="navlogo"
          />
          <span className="navName">Dhasneem</span>
        </Link>
      </div>
      <div className="nav-right">
        <ul className={click ? "nav-menus actives" : "nav-menus"}>
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
            <a
              href="/Dhasneem_Beevi_Resume__.docx"
              download="Dhasneem_Resume.docx"
            >
              <FaDownload
                size={19}
                style={{ color: "rgb(11, 107, 232)", marginRight: "8px" }}
              />
              Download Resume
            </a>
          </li>
        </ul>
      </div>

      <Hamburger click={click} setClick={setClick} />

      {/* Side Menu */}
      <div className={`side-menus ${click ? "actives" : ""}`}>
        <div className="close-btns" onClick={() => setClick(false)}>
          <FaTimes size={30} style={{ color: "white" }} />
        </div>
        <ul className="nav-menus">
          <li>
            <Link to="/" onClick={() => setClick(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setClick(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/project" onClick={() => setClick(false)}>
              Project
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setClick(false)}>
              Contact
            </Link>
          </li>
          <li>
            <a href="/Dhasneem_ML_Engineer.pdf" download="Dhasneem_Resume.pdf">
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
