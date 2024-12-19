import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Header from "./Header";
import "./App.css";
import Certifications from "./components/Certifications/Certifications.js";
import ReactGA from "react-ga4";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    ReactGA.initialize("G-CYSENCBGTE");
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
    }
  }, []);
  const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);
  };

  const PageTracker = () => {
    usePageTracking();
    return null;
  };

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
        <PageTracker /> {/* Track page views using Google Analytics */}
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
