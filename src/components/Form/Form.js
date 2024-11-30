import "./Form.css";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import { useTheme } from "../../Theme.js";

const Form = () => {
  const { darkMode } = useTheme();
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const formRef = React.useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    const form = event.target;
    const fromName = form.from_name.value.trim();
    const fromEmail = form.from_email.value.trim();
    const subject = form.subject.value.trim();

    if (!fromName || !fromEmail || !subject) {
      setMessage("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fromEmail)) {
      setMessage("Please enter a valid email.");
      return;
    }

    setMessage("");
    emailjs
      .sendForm(
        "service_f0386o8",
        "template_wm34dun",
        event.target,
        "hQO38EUDdGaBWa_go"
      )
      .then(
        () => {
          setMessage("Thanks for being Awesome 😄!");
          setSent(true);
          formRef.current.reset();
        },
        () => {
          setMessage("An error occurred while sending the email.");
        }
      );
  };

  return (
    <div className={`form ${darkMode ? "dark" : "light"}`}>
      {!sent && (
        <form onSubmit={sendEmail} ref={formRef}>
          <label>Your Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Subject</label>
          <input type="text" name="subject" />
          <label>Message</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Type your Message here"
          />
          <button className="btn" type="submit" disabled={sent}>
            Submit
          </button>
        </form>
      )}
      {message && (
        <h2
          className="message"
          style={{ textAlign: "center", color: "#e9bc09" }}
        >
          {message}
        </h2>
      )}
    </div>
  );
};

export default Form;
