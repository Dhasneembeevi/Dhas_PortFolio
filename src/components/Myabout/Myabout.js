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
      institution: "MeNeM Inc., Chennai, Tamil Nadu",
      date: "Mar 2025 – Jun 2025",
      role: "AI Engineer Intern",
      description: [
        "Designed a real-time computer vision system using <span style='color:#ffcc00;font-weight:600'>YOLOv8</span> for weapon and violence detection, achieving <strong>89% accuracy</strong>. Integrated <span style='color:#ffcc00;font-weight:600'>OpenPose</span> & <span style='color:#ffcc00;font-weight:600'>MediaPipe</span> for emotion and pose-based alerts, enhancing surveillance responsiveness.",
        "Developed a <span style='color:#ffcc00;font-weight:600'>FastAPI</span>-powered web scraper to extract product specifications and live prices from Flipkart and Amazon, enabling predictive retail analytics for appliances.",
        "Built a <span style='color:#ffcc00;font-weight:600'>Streamlit</span>-based AI assistant integrating <span style='color:#ffcc00;font-weight:600'>PandasAI</span> + <span style='color:#ffcc00;font-weight:600'>OpenAI APIs</span> to allow natural language querying of CSV data, delivering visual and tabular analytics with <strong>95% response accuracy</strong>.",
        "Deployed production-grade ML models optimized for real-time inference with GPU acceleration, achieving <strong>sub-100ms latency</strong>.",
        "Collaborated with cross-functional teams to design end-to-end AI pipelines ensuring scalability, reproducibility, and efficient model lifecycle management.",
      ],
    },
    {
      institution: "GUVI Chennai, Chennai.",
      date: "Apr 2024 - Oct 2024",
      role: "AI & Machine Learning Course",
      description: [
        "Proficient in <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'>  Python </span> and <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> SQL </span> for data access and analysis, applying  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> ML algorithms </span>to build predictive models by  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> data preprocessing </span> and  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> feature engineering </span> to improve model accuracy and robustness.",
        "Developed AI-driven generative responses and  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> deep learning </span> models using  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'>  PyTorch </span> with  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> RNN </span> and  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> CNN </span> for image and gesture recognition.",
        "Built predictive models using various  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> machine learning pipelines </span> and optimized performance through  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> hyperparameter tuning </span> and  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'>  model deployment </span>techniques.",
      ],
    },
    {
      institution: "SharePoint Designs, Chennai.",
      date: "Jul 2023 - Jan 2025",
      role: "SharePoint Developer",
      description: [
        "Developed and deployed custom <span style='color:#ffcc00;font-weight:600'>SharePoint Framework (SPFx)</span> solutions using <span style='color:#ffcc00;font-weight:600'>React</span>, <span style='color:#ffcc00;font-weight:600'>Fluent UI</span>, and <span style='color:#ffcc00;font-weight:600'>PnP controls</span>, improving navigation and content discoverability by <strong>30%</strong>.",
        "Created a dynamic Document Library Carousel using Fluent UI DocumentCard and integrated <span style='color:#ffcc00;font-weight:600'>FileTypeIcon</span>, <span style='color:#ffcc00;font-weight:600'>REST API</span>, and editor profile image fetching via custom logic.",
        "Enhanced the Video and Event modules with configurable property-pane color and layout options, improving content flexibility and client satisfaction.",
        "Automated workflows using <span style='color:#ffcc00;font-weight:600'>Power Apps</span> and <span style='color:#ffcc00;font-weight:600'>Power Automate</span>, reducing manual operations by <strong>50%</strong> and improving process efficiency.",
        "Resolved critical issues in Korzone and Nalka modules, including email attachment rendering and event box encoding, ensuring stability and consistency across deployments.",
        "Collaborated directly with clients such as <strong>Nalka</strong>, <strong>Potential Project</strong>, and <strong>Interogo</strong> for requirement analysis, iterative testing, and deployment, maintaining transparent communication and achieving over <strong>80% client satisfaction</strong>.",
        "Delivered sandbox testing and production deployments maintaining system uptime above <strong>90%</strong> and ensuring consistent UI/UX across sites.",
      ],
    },
    {
      institution: "10x Academy, Hyderabad, Telangana.",
      date: "Jul 2022 - Jun 2023",
      role: "Full Stack Developer Trainee",
      description: [
        "Intensive training in <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> Data Structures, Algorithms </span> and full-stack development <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> (MERN) </span> with expertise in  <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> JavaScript, Node.js </span> and <span style='color: #ffcc00; font-size:1.1rem; font-weight:600'> React.js.</span> ",
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
        <div className="chart-container">
          <Bar
            data={skillsData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              resizeDelay: 200,
              animation: { duration: 1200, easing: "easeOutQuart" },
            }}
          />
        </div>
      </div>

      <div className="education" style={{ width: "85%", margin: "auto" }}>
        <h1 className="skill-head">Education</h1>
        <ul className="edu-list">
          {[
            {
              institution: "Guvi Institute, Coimbatore, Tamil Nadu",
              date: "Apr 2024 - Oct 2024",
              degree: "Artificial Intelligence and Machine Learning Program",
            },
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
                  {/* <div className="institution">{edu.institution}</div> */}
                  <div className="degree">{edu.degree}</div>
                  <div className="date">{edu.date}</div>
                </div>
                {/* <div className="degree">{edu.degree}</div>
                 */}
                <div className="institution">{edu.institution}</div>
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
