// import React, { useState, useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Project from "./components/Project";
// import Contact from "./components/Contact";
// import Header from "./Header";
// import "./App.css";
// // import AnimatedComp from "./Animations/AnimatedComp.js";

// // import { useTheme } from "./Theme.js";
// const App = () => {
//   // const { dark } = useTheme();
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const savedMode = localStorage.getItem("darkMode");
//     if (savedMode === "true") {
//       setDarkMode(true);
//     }
//   }, []);
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     localStorage.setItem("darkMode", !darkMode);
//   };

//   return (
//     <div>
//       <div className="portfolio-background"></div> {/* Animated Background */}
//       <div className="content">
//         <div className={darkMode ? "dark" : "light"}>
//           {" "}
//           <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />{" "}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/project" element={<Project />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//           {/* <AnimatedComp /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Header from "./Header";
import "./App.css";
import Certifications from "./components/Certifications/Certifications.js";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]); // Dynamically set body className

  return (
    <div>
      <div className="portfolio-background"></div> {/* Background animation */}
      <div className="mainoverlay"></div>
      <div className="maincontent">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/certificates" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
