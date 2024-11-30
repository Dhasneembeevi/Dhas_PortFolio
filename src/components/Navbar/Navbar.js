// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
// import { useTheme } from "../../Theme.js";

// const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const { darkMode } = useTheme();
//   const [, forceUpdate] = useState(false);

//   const handleClick = () => {
//     setClick((prevState) => !prevState);
//     forceUpdate((state) => !state); // Force re-render
//   };

//   // const handleClick = () => {
//   //   console.log("Hamburger clicked, new state:", !click);
//   //   // setClick(!click);
//   //   setClick((prevState) => !prevState);
//   // };

//   return (
//     <div className={`header ${darkMode ? "dark" : "light"}`}>
//       <div className="navbar-container">
//         <Link to="/">
//           <img
//             src="https://us.123rf.com/450wm/hamdesain/hamdesain2002/hamdesain200200048/142445320-letter-d-beauty-women-face-logo-design-vector.jpg?ver=6"
//             alt="logo"
//             className="navlogo"
//           />
//           <span className="navName">Dhasneem</span>
//         </Link>
//       </div>
//       <div className="nav-right">
//         <ul className={click ? "nav-menus actives" : "nav-menus"}>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/project">Project</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li>
//             <a href="/Dhasneem_ML_Engineer_.pdf" download="Dhasneem_Resume.pdf">
//               <FaDownload
//                 size={19}
//                 style={{ color: "rgb(11, 107, 232)", marginRight: "8px" }}
//               />
//               Download Resume
//             </a>
//           </li>
//         </ul>
//       </div>
//       {/* Hamburger Icon */}
//       <div className="hamburgers" onClick={handleClick}>
//         {click ? <FaTimes size={18} /> : <FaBars size={18} />}
//       </div>

//       {/* Side Menu */}
//       <div className={`side-menus ${click ? "actives" : ""}`}>
//         <div className="close-btns" onClick={handleClick}>
//           <FaTimes size={30} style={{ color: "white" }} />
//         </div>
//         <ul className="nav-menus">
//           <li>
//             <Link to="/" onClick={handleClick}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" onClick={handleClick}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/project" onClick={handleClick}>
//               Project
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" onClick={handleClick}>
//               Contact
//             </Link>
//           </li>
//           <li>
//             <a href="/Dhasneem_ML_Engineer_.pdf" download="Dhasneem_Resume.pdf">
//               <FaDownload
//                 size={19}
//                 style={{ color: "rgb(11, 107, 232)", marginRight: "8px" }}
//               />
//               Download Resume
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger.js"; // Import the Hamburger component
import "./Navbar.css";
import { FaTimes, FaDownload } from "react-icons/fa";
// import { useTheme } from "../../Theme.js";

const Navbar = () => {
  const [click, setClick] = useState(false);
  // const { darkMode } = useTheme();

  return (
    <div className="header">
      <div className="navbar-container">
        <Link to="/">
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
      {/* Hamburger Icon */}
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
