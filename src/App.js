// import React, { useState, useEffect } from "react";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Project from "./components/Project";
// import Contact from "./components/Contact";
// import Header from "./Header";
// import "./App.css";
// import Certifications from "./components/Certifications/Certifications.js";
// import ReactGA from "react-ga4";

// const App = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   useEffect(() => {
//     ReactGA.initialize("G-CYSENCBGTE");
//   }, []);

//   useEffect(() => {
//     const savedMode = localStorage.getItem("darkMode");
//     if (savedMode === "true") {
//       setDarkMode(true);
//     }
//   }, []);
//   const usePageTracking = () => {
//     const location = useLocation();

//     useEffect(() => {
//       ReactGA.send({ hitType: "pageview", page: location.pathname });
//     }, [location]);
//   };

//   const PageTracker = () => {
//     usePageTracking();
//     return null;
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     localStorage.setItem("darkMode", !darkMode);
//   };

//   useEffect(() => {
//     document.body.className = darkMode ? "dark" : "light";
//   }, [darkMode]); // Dynamically set body className

//   return (
//     <div>
//       <div className="portfolio-background"></div> {/* Background animation */}
//       <div className="mainoverlay"></div>
//       <div className="maincontent">
//         <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
//         <PageTracker /> {/* Track page views using Google Analytics */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/project" element={<Project />} />
//           <Route path="/certificates" element={<Certifications />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useEffect } from "react"; import { Route, Routes, useLocation } from "react-router-dom"; import Home from "./components/Home"; import About from "./components/About"; import Project from "./components/Project"; import Contact from "./components/Contact"; import Header from "./Header"; import Certifications from "./components/Certifications/Certifications.js"; import "./App.css"; import ReactGA from "react-ga4"; // Google Analytics Page Tracking const PageTracker = () => { const location = useLocation(); useEffect(() => { ReactGA.send({ hitType: "pageview", page: location.pathname, }); }, [location]); return null; }; const App = () => { // Initialize Google Analytics useEffect(() => { ReactGA.initialize("G-CYSENCBGTE"); }, []); // ALWAYS ENABLE DARK MODE useEffect(() => { document.body.classList.remove("light"); document.body.classList.add("dark"); // Keep dark mode even after page reload document.documentElement.classList.add("dark"); return () => { document.body.classList.remove("dark"); document.documentElement.classList.remove("dark"); }; }, []); return ( <div className="dark"> {/* Animated Background */} <div className="portfolio-background"></div> {/* Main Overlay */} <div className="mainoverlay"></div> {/* Main Content */} <div className="maincontent"> {/* Header */} <Header /> {/* Google Analytics Page Tracking */} <PageTracker /> {/* Pages */} <Routes> <Route path="/" element={<Home />} /> <Route path="/about" element={<About />} /> <Route path="/project" element={<Project />} /> <Route path="/certificates" element={<Certifications />} /> <Route path="/contact" element={<Contact />} /> </Routes> </div> </div> ); }; export default App;