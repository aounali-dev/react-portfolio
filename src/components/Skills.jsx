import { useState } from "react";
import "./Skills.css";
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact,
  FaPhp, FaLaravel, FaDatabase, FaGitAlt,
} from "react-icons/fa";
import { SiMysql, SiTailwindcss } from "react-icons/si";

const skillsData = {
  Frontend: [
    { icon: <FaHtml5 />, name: "HTML5", level: 95, color: "#e44d26" },
    { icon: <FaCss3Alt />, name: "CSS3", level: 90, color: "#264de4" },
    { icon: <FaBootstrap />, name: "Bootstrap 5", level: 85, color: "#7952b3" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 65, color: "#38bdf8" },
    { icon: <FaJs />, name: "JavaScript", level: 80, color: "#f7df1e" },
    { icon: <FaReact />, name: "React JS", level: 78, color: "#61dafb" },
  ],
  Backend: [
    { icon: <FaPhp />, name: "PHP", level: 70, color: "#777bb4" },
    { icon: <FaLaravel />, name: "Laravel", level: 65, color: "#ff2d20" },
    { icon: <SiMysql />, name: "MySQL", level: 72, color: "#00758f" },
    { icon: <FaDatabase />, name: "Database", level: 68, color: "#f59e0b" },
  ],
  Tools: [
 { icon: <FaGitAlt />, name: "Git & GitHub (Learning)", level: 20, color: "#f05032" },  ],
};

const tabs = Object.keys(skillsData);

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className="skills" id="skills">

      <div className="skills-blur sk-b1"></div>
      <div className="skills-blur sk-b2"></div>

      <div className="skills-container">

        {/* Header */}
        <div className="skills-header">
          <span className="skills-tag">WHAT I KNOW</span>
          <h2>My <span>Skills</span> & Expertise</h2>
          <p>Technologies I use to build modern web experiences</p>
        </div>

        {/* Tabs */}
        <div className="skills-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`skills-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && <span className="tab-dot"></span>}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="skills-grid">
          {skillsData[activeTab].map((skill) => (
            <div className="skill-card" key={skill.name}>

              {/* Icon */}
              <div
                className="skill-icon"
                style={{
                  color: skill.color,
                  background: `${skill.color}14`,
                  border: `1px solid ${skill.color}30`,
                  boxShadow: `0 0 20px ${skill.color}18`,
                }}
              >
                {skill.icon}
              </div>

              {/* Info */}
              <div className="skill-info">
                <div className="skill-top">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-pct" style={{ color: skill.color }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}66, ${skill.color})`,
                      boxShadow: `0 0 8px ${skill.color}44`,
                    }}
                  >
                    <span className="fill-dot"></span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="skills-stats">
          <div className="skills-stat">
            <h3>6+</h3>
            <p>Technologies</p>
          </div>
          <div className="skills-stat-divider"></div>
          <div className="skills-stat">
            <h3>5+</h3>
            <p>Projects Built</p>
          </div>
          <div className="skills-stat-divider"></div>
          <div className="skills-stat">
            <h3>1.5+</h3>
            <p>Years Learning</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;