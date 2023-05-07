
import "./Form.css";
import emailjs from "emailjs-com";
import React, { useState } from 'react';

const Form = () => {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const formRef = React.useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_rm4cwzx",
        "template_wm34dun",
        event.target,
        "hQO38EUDdGaBWa_go"
      )
      .then(
        (result) => {
          setMessage("Thanks for being Awesome 😄!");
          setSent(true);
          formRef.current.reset(); // reset the form
        },
        (error) => {
          setMessage("An error occurred while sending the email.");
        }
      );
  };

  return (
    <div className="form">
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
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      )}
      {message && <h2 className="message" style={{textAlign:"center", color:"yellow"}}>{message}</h2>}
    </div>
  );
};

export default Form;
