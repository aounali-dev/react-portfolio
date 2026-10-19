import "./Projects.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "React News App",
    desc: "Live news platform with category filtering, API integration and premium responsive interface.",
    image: "/projects/new-app.png",
    tech: ["React", "Tailwind", "API"],
    live: "https://news-app-foraouni.netlify.app/",
    featured: true,
  },
  {
    title: "Text Utility App",
    desc: "Advanced text transformation toolkit with analytics and formatting features.",
    image: "/projects/TextUtils.jpeg",
    tech: ["React", "Tailwind"],
    live: "https://textutils-for-aouni.netlify.app/",
    featured: false,
  },
  {
    title: "Restaurant Website",
    desc: "Luxury restaurant landing page with elegant typography and smooth UI sections.",
    image: "/projects/restaurant.png",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    live: "https://shopease-a.netlify.app/",
    featured: false,
  },
  {
    title: "Watch Landing Page",
    desc: "Premium watch showcase website focused on luxury branding and animations.",
    image: "/projects/watch.png",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    live: "https://luxtime-watch.netlify.app/",
    featured: false,
  },
  {
    title: "Portfolio Website",
    desc: "Creative developer portfolio with modern transitions and glassmorphism layout.",
    image: "/projects/portfolio.png",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    live: "https://aounali.netlify.app/",
    featured: false,
  },
 {
  title: "Ar Rahman Quran Academy",
  desc: "Professional Quran academy website with modern UI, responsive design, course sections, and contact features.",
  image: "/projects/ar-rehman.jpeg",
  tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  live: "https://ar-rehman-academy.netlify.app/",
  featured: true,
},
];

const Projects = () => {
  return (
    <section className="projects" id="projects">

      <div className="proj-blur pb1"></div>
      <div className="proj-blur pb2"></div>

      <div className="proj-container">

        {/* Header */}
        <div className="proj-header">
          <span className="proj-tag">MY WORK</span>
          <h2>Featured <span>Projects</span></h2>
          <p>A curated collection of modern web experiences crafted with performance and creativity.</p>
        </div>

        {/* Grid */}
        <div className="proj-grid">
          {projects.map((p, i) => (
            <div className="proj-card" key={i}>

              {/* Image */}
              <div className="proj-img-wrap">
                <img src={p.image} alt={p.title} />
                <div className="proj-img-overlay"></div>

                {/* Tech tags on image */}
                <div className="proj-tech-wrap">
                  {p.tech.map((t) => (
                    <span key={t} className="proj-tech">{t}</span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="proj-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                {/* Buttons */}
                <div className="proj-btns">
                  <a href={p.live} target="_blank" rel="noreferrer" className="proj-btn primary">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;