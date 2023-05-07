import "./Footer.css"
import { Link } from "react-router-dom"
import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">

                <div className="left">
                    <img src="https://us.123rf.com/450wm/hamdesain/hamdesain2002/hamdesain200200048/142445320-letter-d-beauty-women-face-logo-design-vector.jpg?ver=6" alt="logo" className="logo" />
                    <Link to="/">
                        <span style={{ color: "white", fontSize: "50px", fontWeight: "600", fontFamily:"cursive" }}> Dhasneem
                        </span>
                    </Link>
                </div>

                <div className="right">
                    <div className="location">
                    <a href="https://www.linkedin.com/in/dhasneembeevi/" target="_blank" rel="noreferrer">
                        <FaLinkedinIn className="fa-linkedin-in" />
                        </a>

                        <a href="https://www.instagram.com/_dhasneeem_/" target="_blank" rel="noreferrer">
                        <FaInstagram className="fa-instagram" />
                        </a>

                        <a href="https://github.com/Dhasneembeevi" target="_blank" rel="noreferrer">
                        <FaGithub className="fa-github " /></a>
                    </div>
                    <div className="connect">
                        <Link to="/contact">
                            <button className=" btn btn-light"> Let's Connect</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
