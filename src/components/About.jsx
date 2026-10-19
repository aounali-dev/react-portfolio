import "./About.css";
import aoun from "../assets/aoun.png";
import { FaDownload, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const About = () => {
  const skills = ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "React JS", "PHP", "Laravel", "MySQL"];

  return (
    <section className="about" id="about">

      <div className="about-blur b1"></div>
      <div className="about-blur b2"></div>

      <div className="about-container">

        {/* ── LEFT ── */}
        <div className="about-left">

          <div className="about-image-box">
            <div className="ring r1"></div>
            <div className="ring r2"></div>
            <div className="img-glow"></div>
            <img src={aoun} alt="Aoun Ali" />
          </div>

          {/* Single clean badge */}
          <div className="about-floating-card">
            <h3>1.5+</h3>
            <span>Years Experience</span>
          </div>

        </div>

        {/* ── RIGHT ── */}
        <div className="about-right">

          <span className="about-subtitle">ABOUT ME</span>

          <h2>
            Creating Modern <span>Frontend</span><br />
            & <span>Laravel</span> Experiences
          </h2>

          <p className="about-text">
            I am <strong>Aoun Ali</strong>, a passionate Frontend & Laravel Developer
            focused on building modern, responsive and user-friendly web interfaces
            using HTML, CSS, JavaScript and React.
          </p>

          <p className="about-text">
            I bring both design sense and technical skill to every project, with
            solid experience in <strong>React, Bootstrap</strong> and <strong>Laravel</strong>.
          </p>

          {/* Info row */}
          <div className="about-info-row">
            <div className="about-info-item">
              <FaMapMarkerAlt className="info-ico" />
              <span>Pakistan KPK D I Khan</span>
            </div>
            <div className="about-info-item">
              <FaBriefcase className="info-ico" />
              <span>Available for Work</span>
            </div>
          </div>

          {/* Skills */}
          <div className="skills-title">Tech Stack</div>
          <div className="about-skills">
            {skills.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>

          {/* Stats */}
          <div className="about-stats">
            <div className="about-stat">
              <h3>5<em>+</em></h3>
              <p>Projects</p>
            </div>
            <div className="stat-line"></div>
            <div className="about-stat">
              <h3>1.5<em>+</em></h3>
              <p>Years Exp</p>
            </div>
            <div className="stat-line"></div>
            <div className="about-stat">
              <h3>100<em>%</em></h3>
              <p>Dedication</p>
            </div>
          </div>

          <div className="about-btns">

  <button className="btn-main">
    <FaDownload /> Download CV
  </button>

  <button
    className="btn-ghost"
    onClick={() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    View Projects
  </button>

</div>

        </div>
      </div>
    </section>
  );
};

export default About;