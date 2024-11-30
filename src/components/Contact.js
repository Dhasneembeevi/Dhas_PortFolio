import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero2 from "./Hero2/Hero2";
import Footer from "./Footer/Footer";
import Form from "./Form/Form";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2
        heading="Want to Chat? Or Just Curious?"
        text1="Want to reach out? Fill in the form below or just email me at "
        highlightedText="📧 dhasmohamed1020@gmail.com"
        highlightColor="#e9bc09"
        text2="—I'll try my best to respond before the next coffee break 😉."
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
