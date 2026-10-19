import "./Hero.css";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaArrowRight,
  FaReact,
  FaLaravel,
} from "react-icons/fa";

function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">

      {/* Background blurs */}
      <div className="blur blur1" />
      <div className="blur blur2" />
      <div className="blur blur3" />

      {/* ── LEFT ── */}
      <div className="hero-left">

        <span className="hero-tag">AVAILABLE FOR WORK</span>

        <h1>
          Hi, I'm <span>Aoun Ali</span><br />
          Frontend &amp; <span>Laravel</span><br />
          Developer
        </h1>

        <p className="hero-desc">
          I craft modern, responsive web interfaces using HTML, CSS, Bootstrap,
          JavaScript and React. Currently leveling up in Laravel and advanced
          frontend architecture.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={scrollToProjects}>
            Explore Work <FaArrowRight />
          </button>
    
        </div>

        <div className="hero-socials">
          <a href="https://www.instagram.com/aoun_1_0/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100086002752558" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/aoun-ali-283570382/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.tiktok.com/@aoun_1_0" target="_blank" rel="noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div>

      </div>

      {/* ── RIGHT ── */}
      <div className="hero-right">

        <div className="glow-circle" />

        <div className="glass-card main-card float-slow">
          <div className="card-icon react"><FaReact /></div>
          <h3>Frontend Dev</h3>
          <p>HTML · CSS · Bootstrap · JavaScript · React</p>
          <div className="card-dots">
            <span /><span /><span />
          </div>
        </div>

        <div className="glass-card small-card float-fast">
          <div className="card-icon laravel"><FaLaravel /></div>
          <h3>Backend Dev</h3>
          <p>Laravel · PHP · MySQL</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;