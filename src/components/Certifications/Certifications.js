import "./certifications.css";

const certifications = [
  {
    name: "AI & Machine Learning Certificate",
    provider: "GUVI Institute",
    year: "2025",
  },
  {
    name: "AWS Cloud Practitioner",
    provider: "Simplilearn",
    year: "2025",
  },
  {
    name: "Machine Learning Algorithms",
    provider: "Great Learning",
    year: "2025",
  },
  {
    name: "Introduction to Data Engineering and Bigdata",
    provider: "GUVI Institute",
    year: "2025",
  },
  {
    name: "Generative AI Program",
    provider: "GUVI Institute",
    year: "2025",
  },
  {
    name: "Power BI",
    provider: "GUVI Institute",
    year: "2025",
  },
  {
    name: "Python",
    provider: "GUVI Institute",
    year: "2024",
  },
  {
    name: "Full Stack Web Development",
    provider: "The 10x Academy",
    year: "2023",
  },
];

const Certifications = () => {
  return (
    <div className="certifications">
      <h1 className="certificationTitle">Certifications</h1>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index} className="certificationItems">
            <h3 className="Coursename">{cert.name}</h3>
            <p className="courseAcademy">
              {cert.provider} - {cert.year}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
