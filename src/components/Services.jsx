import "./Services.css";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    desc: "Building modern, fast and responsive web interfaces using HTML, CSS, Bootstrap, Tailwind and React JS.",
    tags: ["React", "JavaScript", "Bootstrap", "Tailwind"],
    color: "#61dafb",
  },
  {
    icon: <FaServer />,
    title: "Laravel Development",
    desc: "Developing backend systems, REST APIs and full-stack web applications using PHP and Laravel framework.",
    tags: ["Laravel", "PHP", "MySQL", "REST API"],
    color: "#ff2d20",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Making sure every website looks and works perfectly on all screen sizes — mobile, tablet and desktop.",
    tags: ["Mobile First", "CSS Grid", "Flexbox"],
    color: "#a855f7",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI Design & Implementation",
    desc: "Translating design ideas into clean, pixel-perfect and interactive web pages with smooth animations.",
    tags: ["UI/UX", "Animations", "Clean Code"],
    color: "#f59e0b",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">

      <div className="srv-blur srv-b1"></div>
      <div className="srv-blur srv-b2"></div>

      <div className="srv-container">

        {/* Header */}
        <div className="srv-header">
          <span className="srv-tag">WHAT I OFFER</span>
          <h2>My <span>Services</span></h2>
          <p>What I can build and deliver for you</p>
        </div>

        {/* Cards */}
        <div className="srv-grid">
          {services.map((srv, i) => (
            <div className="srv-card" key={i}>

              <div
                className="srv-icon"
                style={{
                  color: srv.color,
                  background: `${srv.color}14`,
                  border: `1px solid ${srv.color}30`,
                  boxShadow: `0 0 24px ${srv.color}18`,
                }}
              >
                {srv.icon}
              </div>

              <div
                className="srv-number"
                style={{ color: `${srv.color}30` }}
              >
                0{i + 1}
              </div>

              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>

              <div className="srv-tags">
                {srv.tags.map((tag) => (
                  <span key={tag} style={{ borderColor: `${srv.color}30`, color: `${srv.color}cc` }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="srv-line"
                style={{ background: `linear-gradient(90deg, ${srv.color}, transparent)` }}
              ></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;