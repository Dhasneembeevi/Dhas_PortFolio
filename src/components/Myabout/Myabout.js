import "./Myabout.css"
import python from "../../Asserts/python.png"
import html from "../../Asserts/html.png"
import node from "../../Asserts/node.png"
import exp from "../../Asserts/exp.png"
import db from "../../Asserts/db.png"
import React from 'react'

const Myabout = () => {
    return (
        <div className="about">
        <h1 className="skill-head"> Skills</h1>
            <div className="right"> 
                <div className="image-container">


                    <img src={html} alt="logo" className="html"/>
                    
                <img src="https://images7.webydo.com/90/9098746/3958/46d2d005-1b02-4961-aa1d-0aba7f7209bd.jpg" alt="logo" className="css"/>
                    <img src="https://academyclass.com/wp-content/uploads/2021/10/Javascript.png" alt="logo" className="js"/>
                    
                    <img src="https://cdn.dribbble.com/users/14814/screenshots/16535574/reactlogo.png" alt="logo" className="react"/>
                    <img src={python} alt="logo" className="python"/>
                    
                    <img src={node} alt="logo" className="node"/>
                    <img src={exp} alt="logo" className="exp"/>
                    <img src={db} alt="logo" className="db"/>
                </div>

            </div>

        </div>
    )
}

export default Myabout
