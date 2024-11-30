// AnimatedComponent.js
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

const AnimatedComp = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Animation
      </button>
      <CSSTransition in={show} timeout={300} classNames="fade" unmountOnExit>
        <div className="fade">I am an animated component!</div>
      </CSSTransition>
    </div>
  );
};

export default AnimatedComp;
