import "./Work.css"
import img from "../../Asserts/pro1.png"
import todo from "../../Asserts/todo.png"
import React from 'react'
import eventProp from '../../Asserts/eventprop.png'
import insta from '../../Asserts/insta.png'

function Work() {
    return (
        <div className="work">
            <h1 className="pro-heading"> Projects</h1>
            <div className="all-projects">
                <div className="project-container">
                    <div className="project-card">
                        <h2 className="project-title" style={{ color: "yellow" }}> To Do App </h2>
                        <img src={todo} alt="pro1" />

                        <div className="project-details">
                        <p style={{ marginTop: "2%" }}><b style={{ color: "yellow" }}>Technologies Used :</b> React JS, Node Js, Express Js, Mongoose and Mongo DB.</p>

                            <a href="https://github.com/Dhasneembeevi/fullstack-todo-frontend" target="_blank" rel="noreferrer"><button className="btn"> GitHub</button></a>
                            <a href="https://deluxe-tarsier-48500d.netlify.app" target="_blank" rel="noreferrer"><button className="btn btn-light"> View</button></a>

                        </div>
                    </div>


                </div>
                <div className="project-container">
                    <div className="project-card">
                        <h2 className="project-title" style={{ color: "yellow" }}> Book Search App </h2>
                        <img src={img} alt="pro1" />

                        <div className="project-details">
                        <p style={{ marginTop: "2%" }}><b style={{ color: "yellow" }}>Technologies Used :</b> React JS</p>

                            <a href="https://github.com/Dhasneembeevi/Book_Search_React" target="_blank" rel="noreferrer"><button className="btn" > GitHub</button></a>
                            <a href="https://gilded-gumption-0881f3.netlify.app/" target="_blank" rel="noreferrer"><button className="btn btn-light" > View</button></a>
                        </div>
                    </div>
                </div>

                <div className="project-container">
                    <div className="project-card">
                        <h2 className="project-title" style={{ color: "yellow" }}> Event Proposal Page </h2>
                        <img src={eventProp} alt="pro1" />

                        <div className="project-details">
                            <p style={{ marginTop: "2%" }}><b style={{ color: "yellow" }}>Technologies Used :</b> React JS, Node Js, Express Js, Mongoose and Mongo DB.</p>
                           

                            <a href="https://github.com/Dhasneembeevi/Event_Proposal_Project_Frontend" target="_blank" rel="noreferrer"><button className="btn"> GitHub</button></a>
                            <a href="https://glowing-cannoli-f3eec3.netlify.app/" target="_blank" rel="noreferrer"><button className="btn btn-light"> View</button></a>
                        </div>
                    </div>
                </div>

                <div className="project-container">
                    <div className="project-card">
                        <h2 className="project-title" style={{ color: "yellow" }}> InstaClone App </h2>
                        <img src={insta} alt="pro1" />

                        <div className="project-details">
                            <p style={{ marginTop: "2%" }}>
                            <b style={{ color: "yellow" }}>Technologies Used :</b> 
                            React JS, Node Js, Express Js, Mongoose and Mongo DB.</p>

                            <a href="https://github.com/Dhasneembeevi/Instaclone-Project-Frontend" target="_blank" rel="noreferrer"><button className="btn" > GitHub</button></a>
                            <a href="https://fastidious-sprinkles-98de9d.netlify.app/" target="_blank" rel="noreferrer"><button className="btn btn-light" > View</button></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work

/**
 * 
 *  <ul style={{ color: "white" }}>
                                <li style={{ listStyleType: "circle", marginLeft: "4%" }}>
                                    Developed Front-end using React JS, CSS along with libraries like <span style={{ color: "yellow" }} > React-Router-DOM</span>

                                </li>
                                <li style={{ listStyleType: "circle", marginLeft: "4%" }}>Built the backend using NodeJs to serve the APIs</li>

                                <li style={{ listStyleType: "circle", marginLeft: "4%" }}>Implemented backend APIs to create/find/update/delete Events</li>

                                <li style={{ listStyleType: "circle", marginLeft: "4%" }}>Worked on the database schema design using mongoose to store in <span style={{ color: "yellow" }} > Mongo DB Atlas </span></li>

                                <li style={{ listStyleType: "circle", marginLeft: "4%" }}>Built Sign-in and Sign-up page with authentication and encrypted Password using <span style={{ color: "yellow" }} > crypto-js</span></li>

                                <li style={{ listStyleType: "circle", marginLeft: "4%" }}>Used
                                    <span style={{ color: "yellow" }} > express-fileupload </span>package to store images in the backend</li>
                            </ul>
 */