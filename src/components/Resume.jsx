import "./Resume.css";
import {
  FaGraduationCap,
  FaCode,
  FaDownload,
  FaCalendarAlt,
} from "react-icons/fa";

const education = [
  {
    degree: "Matriculation (10th Grade) - In Progress",
    school: "Mufti Mehmood school D.I. Khan Pakistan",
    year: "Expected 2027",
    desc: "Currently studying science and mathematics in secondary education.",
  },
];

const journey = [
  {
    skill: "HTML & CSS",
    year: "2024",
    desc: "Started web development journey with HTML5 and CSS3. Learned structure, styling, flexbox and grid layouts.",
    level: "Strong",
    color: "#e44d26",
  },
  {
    skill: "Bootstrap 5",
    year: "2024",
    desc: "Learned responsive design with Bootstrap 5 — grids, components and utility classes.",
    level: "Strong",
    color: "#7952b3",
  },
  {
    skill: "JavaScript Basics",
    year: "2024",
    desc: "Covered JS fundamentals — variables, functions, DOM manipulation, events and ES6+ features.",
    level: "Intermediate",
    color: "#f7df1e",
  },
  {
    skill: "PHP Basics",
    year: "2025",
    desc: "Learned PHP fundamentals — syntax, functions, forms handling and basic server-side logic.",
    level: "Basic",
    color: "#777bb4",
  },
  {
    skill: "Laravel",
    year: "2025_26",
    desc: "Built full-stack web apps using Laravel framework — routing, MVC, Eloquent ORM and MySQL.",
    level: "Intermediate",
    color: "#ff2d20",
  },
  {
    skill: "React JS",
    year: "2026",
    desc: "Learned React — components, hooks, state management, props and building modern SPAs.",
    level: "Intermediate",
    color: "#61dafb",
  },
  {
    skill: "Node.js & Express & MongoDB",
    year: "Coming Soon",
    desc: "Next goal — learning backend with Node.js, Express framework and MongoDB database.",
    level: "Upcoming",
    color: "#68a063",
    upcoming: true,
  },
];

const Resume = () => {
  return (
    <section className="resume" id="resume">

      <div className="res-blur res-b1"></div>
      <div className="res-blur res-b2"></div>

      <div className="res-container">

        {/* Header */}
        <div className="res-header">
          <span className="res-tag">MY JOURNEY</span>
          <h2>Resume & <span>Experience</span></h2>
          <p>16 years old — self-taught developer on a mission to master web development.</p>
        </div>

        <div className="res-grid">

          {/* LEFT — Education */}
          <div className="res-col">
            <div className="res-col-title">
              <FaGraduationCap className="col-icon" />
              Education
            </div>

            {education.map((e, i) => (
              <div className="res-card edu-card" key={i}>
                <div className="res-card-top">
                  <h3>{e.degree}</h3>
                  <span className="res-year">
                    <FaCalendarAlt /> {e.year}
                  </span>
                </div>
                <p className="res-school">{e.school}</p>
                <p className="res-desc">{e.desc}</p>
              </div>
            ))}

            {/* Age Info Card */}
            <div className="res-card age-card">
              <div className="age-number">16</div>
              <div className="age-text">
                <h4>Years Old</h4>
                <p>Self-taught developer since age 15. Passionate about building real-world web applications.</p>
              </div>
            </div>

          </div>

          {/* RIGHT — Learning Journey */}
          <div className="res-col">
            <div className="res-col-title">
              <FaCode className="col-icon" />
              Learning Journey
            </div>

            <div className="timeline">
              {journey.map((item, i) => (
                <div
                  className={`timeline-item ${item.upcoming ? "upcoming" : ""}`}
                  key={i}
                >
                  <div className="timeline-dot" style={{ background: item.color, boxShadow: `0 0 12px ${item.color}66` }}></div>

                  <div className="timeline-content">
                    <div className="timeline-top">
                      <h3 style={{ color: item.upcoming ? "#6b7280" : "#f3f4f6" }}>
                        {item.skill}
                      </h3>
                      <div className="timeline-right">
                        <span
                          className="timeline-level"
                          style={{
                            color: item.color,
                            background: `${item.color}14`,
                            border: `1px solid ${item.color}30`,
                          }}
                        >
                          {item.level}
                        </span>
                        <span className="timeline-year">
                          <FaCalendarAlt /> {item.year}
                        </span>
                      </div>
                    </div>
                    <p>{item.desc}</p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Download CV Button */}
        <div className="res-bottom">
          <p>Want to know more about my skills and experience?</p>
          <a href="#" className="res-cv-btn">
            <FaDownload /> Download CV
          </a>
        </div>

      </div>
    </section>
  );
};

export default Resume;