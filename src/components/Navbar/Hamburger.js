// // Hamburger.js
// import React from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./Hamburger.css"; // Create this CSS file for Hamburger-specific styles

// const Hamburger = ({ click, setClick }) => {
//   const handleClick = () => setClick((prevState) => !prevState);

//   return (
//     <div className="hamburger" onClick={handleClick}>
//       {click ? <FaTimes size={18} /> : <FaBars size={18} />}
//     </div>
//   );
// };

// export default Hamburger;

import React from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger icons
import "./Hamburger.css"; // Hamburger styles

const Hamburger = ({ click, setClick }) => {
  return (
    <div className="hamburger-container">
      {/* Hamburger Icon for small screens */}
      <div className="hamburger" onClick={() => setClick(!click)}>
        {click ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Side Menu for mobile view */}
      {/* <div className={`side-menu ${click ? "active" : ""}`}>
        <div className="close-btn" onClick={() => setClick(false)}>
          <FaTimes size={30} />
        </div> */}
        {/* <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul> */}
      {/* </div> */}
    </div>
  );
};

export default Hamburger;
