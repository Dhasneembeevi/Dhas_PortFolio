import "./Work.css";
import React, { useState } from "react";
import todo from "../../Asserts/todo.png";
import img from "../../Asserts/pro1.png";
import youtube from "../../Asserts/youtube.jpg";
import car from "../../Asserts/car.jpg";
import plant from "../../Asserts/plant.jpg";
import movie from "../../Asserts/movie.jpg";
import caption from "../../Asserts/caption.jpg";
import cyber from "../../Asserts/cyber.png";
import data from "../../Asserts/data.png";
import eventProp from "../../Asserts/eventprop.png";
import insta from "../../Asserts/insta.png";
import { useTheme } from "../../Theme.js";
const projects = [
  {
    name: "Plant Disease Detection using CNN",
    category: "Machine Learning",
    tech: "Python, Streamlit, PyTorch",
    image: plant,
    github: "https://github.com/Dhasneembeevi/Plant_Disease_Detection",
    view: "https://youtu.be/DxqqBLMHjyY",
  },
  {
    name: "Movie Recommendation System",
    category: "Machine Learning",
    tech: "Python, Streamlit, Scikit-learn",
    image: movie,
    github: "https://github.com/Dhasneembeevi/Movie-Recommendation-System",
    view: "https://www.youtube.com/watch?v=HP29fUAd-4s",
  },
  {
    name: "Image Caption Generator",
    category: "Machine Learning",
    tech: "Python, Hugging Face Transformers, BLIP Model, Tkinter, Pillow (PIL)",
    image: caption,
    github: "https://github.com/Dhasneembeevi/Caption-Genie-App",
    view: "https://github.com/Dhasneembeevi/Caption-Genie-App",
  },
  {
    name: "Classifying Cybersecurity Incidents",
    category: "Machine Learning",
    tech: "Python, scikit-learn, Matplotlib, Seaborn",
    image: cyber,
    github: "https://github.com/Dhasneembeevi/CyberSecurity_Incidents",
    view: "https://github.com/Dhasneembeevi/CyberSecurity_Incidents",
  },
  {
    name: "Car Dheko - Predict Used Car Prices",
    category: "Machine Learning",
    tech: "Python, pandas, NumPy, scikit-learn, matplotlib, seaborn, Streamlit",
    image: car,
    github: "https://github.com/Dhasneembeevi/CarDekho_Capstone3",
    view: "https://www.youtube.com/watch?v=ZUw9IYSA5Mc",
  },
  {
    name: "Illuminating Insights",
    category: "Machine Learning",
    tech: "Python, SQL, Power BI, Data Visualization",
    image: data,
    github: "https://github.com/Dhasneembeevi/DataSpark_C2",
    view: "https://github.com/Dhasneembeevi/DataSpark_C2",
  },
  {
    name: "YouTube Data Harvesting",
    category: "Machine Learning",
    tech: "Python, SQL, Streamlit",
    image: youtube,
    github: "https://github.com/Dhasneembeevi/YouTube-Data-Harvesting",
    view: "https://www.youtube.com/watch?v=NgtFp8QK3OE",
  },
  {
    name: "To Do App",
    category: "Web Development",
    tech: "React, Node.js, Express, MongoDB",
    image: todo,
    github: "https://github.com/Dhasneembeevi/fullstack-todo-frontend",
    view: "https://deluxe-tarsier-48500d.netlify.app",
  },
  {
    name: "Book Search App",
    category: "Web Development",
    tech: "React.js",
    image: img,
    github: "https://github.com/Dhasneembeevi/Book_Search_React",
    view: "https://gilded-gumption-0881f3.netlify.app/",
  },
  {
    name: "Event Proposal Page",
    category: "Web Development",
    tech: "React.js, Node.js, MongoDB",
    image: eventProp,
    github: "https://github.com/Dhasneembeevi/Event_Proposal_Project_Frontend",
    view: "https://glowing-cannoli-f3eec3.netlify.app/",
  },
  {
    name: "InstaClone App",
    category: "Web Development",
    tech: "React.js, Node.js, MongoDB",
    image: insta,
    github: "https://github.com/Dhasneembeevi/Instaclone-Project-Frontend",
    view: "https://fastidious-sprinkles-98de9d.netlify.app/",
  },
];

const categories = ["All", "Machine Learning", "Web Development"];

function Work() {
  const [filter, setFilter] = useState("All");
  const { darkMode } = useTheme();
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="work">
      <div className={`proheading ${darkMode ? "dark" : "light"}`}>
        Projects
      </div>
      <div className={`filterbuttons ${darkMode ? "dark" : "light"}`}>
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`catbtn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="all-projects">
        {filteredProjects.length === 0 ? (
          <p>No projects found for this category.</p>
        ) : (
          filteredProjects.map((project, index) => (
            <div className="project-container" key={index}>
              <div className="project-card">
                <h2 className="project-title" style={{ color: "#e9bc09" }}>
                  {project.name}
                </h2>
                <img src={project.image} alt={project.name} />
                <div className="project-details">
                  {/* <p className="project-description">{project.description}</p> */}
                  <p>
                    <b style={{ color: "#e9bc09" }}>Technologies Used:</b>{" "}
                    {project.tech}
                  </p>
                  <div className="button-container">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <button className="btn-github">GitHub</button>
                      </a>
                    )}
                    {project.view && (
                      <a href={project.view} target="_blank" rel="noreferrer">
                        <button className="btn btn-view">View</button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Work;
