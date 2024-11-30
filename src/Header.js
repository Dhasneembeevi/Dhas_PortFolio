import React from "react";
import { useTheme } from "./Theme.js";
import "./Header.css";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="toggleMode">
      <label className="toggle-switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider"></span>
      </label>
    </header>
  );
};

export default Header;
