import React from "react";
import "./Myabout.css";
import python from "../../Asserts/python.png";
import html from "../../Asserts/html.png";
import node from "../../Asserts/node.png";
import exp from "../../Asserts/exp.png";
import db from "../../Asserts/db.png";
import pyt from "../../Asserts/pyt.png";
import sql from "../../Asserts/sql3.png";
import np from "../../Asserts/np.png";
import powerbi from "../../Asserts/powerbi4.png";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const skillsData = {
  labels: [
    "Python",
    "PyTorch",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
  ],
  datasets: [
    {
      label: "Skill Proficiency (%)",
      data: [95, 85, 80, 85, 75, 80, 95, 80],
      backgroundColor: "#e4c134",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 0.2,
    },
  ],
};

const Myabout = () => {
  const experienceData = [
    {
      institution: "GUVI Chennai, Chennai.",
      date: "Apr 2024 - Present",
      role: "AI & Machine Learning Course",
      description: [
        "Proficient in <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'>  Python </span> and <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> SQL </span> for data access and analysis, applying  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> ML algorithms </span>to build predictive models by  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> data preprocessing </span> and  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> feature engineering </span> to improve model accuracy and robustness.",
        "Developed AI-driven generative responses and  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> deep learning </span> models using  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'>  PyTorch </span> with  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> RNN </span> and  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> CNN </span> for image and gesture recognition.",
        "Built predictive models using various  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> machine learning pipelines </span> and optimized performance through  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> hyperparameter tuning </span> and  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'>  model deployment </span>techniques.",
      ],
    },
    {
      institution: "SharePoint Designs, Chennai.",
      date: "Jul 2023 - Present",
      role: "SharePoint Developer",
      description: [
        "Implemented  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> UI/UX </span> designs in  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> React </span> for optimal user experiences, creating custom solutions within the  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> SharePoint environment.",
        "Designed and deployed  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> Power Apps </span> and  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> Power Automate </span> solutions to streamline data workflows and business processes, integrating AI for predictive insights.",
      ],
    },
    {
      institution: "10x Academy, Hyderabad, Telangana.",
      date: "Jul 2022 - Jun 2023",
      role: "Full Stack Developer Trainee",
      description: [
        "Intensive training in  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'>  Data Structures, Algorithms,</span> and full-stack development  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> (MERN) </span> with expertise in  < style='color: #ffcc00; font-size:1.1rem; font-weight:600'> JavaScript, Node.js </span> and  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> React.js.</span> ",
      ],
    },
  ];
  return (
    <div className="about">
      <div className="timeline-container">
        <h1 className="skill-head">Experience</h1>
        <div className="timeline">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-content">
                <h3 className="timeline-institution">{exp.institution}</h3>
                <p className="timeline-role">{exp.role}</p>
                <ul className="timeline-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* <div className="experience" style={{ width: "85%", margin: "auto" }}>
        <h1 className="edu-head">Experience</h1>
        <ul className="edu-list">
          {experienceData.map((exp, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="educationDetails">
                <div className="institution-container">
                  <div className="institution">{exp.institution}</div>
                  <div className="date">{exp.date}</div>
                </div>
                {exp.role && <div className="degree">{exp.role}</div>}
                <ul className="description">
                  {exp.description.map((item, idx) => (
                    <li key={idx} style={{ margin: "5px 0" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </div> */}
      <h1 className="skill-head">Skills</h1>
      <div className="skillright">
        <div className="image-container">
          <img src={python} alt="logo" className="python" />

          <img src={pyt} alt="logo" className="pyt" />
          <img src={sql} alt="logo" className="sql" />
          <img src={np} alt="logo" className="np" />
          <img src={powerbi} alt="logo" className="powerbi" />

          <img src={html} alt="logo" className="html" />

          <img
            src="https://images7.webydo.com/90/9098746/3958/46d2d005-1b02-4961-aa1d-0aba7f7209bd.jpg"
            alt="logo"
            className="css"
          />
          <img
            src="https://academyclass.com/wp-content/uploads/2021/10/Javascript.png"
            alt="logo"
            className="js"
          />

          <img src={db} alt="logo" className="db" />
          <img src={exp} alt="logo" className="exp" />
          <img
            src="https://cdn.dribbble.com/users/14814/screenshots/16535574/reactlogo.png"
            alt="logo"
            className="react"
          />

          <img src={node} alt="logo" className="node" />
        </div>
      </div>
      <div className="chart">
        <Bar data={skillsData} />
      </div>

      <div className="education" style={{ width: "85%", margin: "auto" }}>
        <h1 className="skill-head">Education</h1>
        <ul className="edu-list">
          {[
            {
              institution:
                "TamilNadu Agriculture University, Coimbatore, Tamil Nadu",
              date: "Aug 2016 - Nov 2020",
              degree: "Bachelor of Technology (Horticulture)",
            },
            {
              institution:
                "Green Park Matriculation Higher Secondary School, Namakkal, Tamil Nadu",
              date: "May 2014 - Apr 2016",
              degree: "Intermediate (+2)",
            },
          ].map((edu, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="educationDetails">
                <div className="institution-container">
                  <div className="institution">{edu.institution}</div>
                  <div className="date">{edu.date}</div>
                </div>
                <div className="degree">{edu.degree}</div>
              </div>
              {/* <span className="degree">{edu.degree}</span> */}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Myabout;
