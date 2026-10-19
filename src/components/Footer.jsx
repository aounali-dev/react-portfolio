import "./Footer.css";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaHeart,
  FaArrowUp,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Frontend Development",
    "Laravel Development",
    "Responsive Design",
    "UI Implementation",
  ];

  return (
    <footer className="footer">
      {/* Ambient blurs */}
      <div className="footer-blur fb1" />
      <div className="footer-blur fb2" />
      <div className="fb3" />

      <div className="footer-container">

        {/* ── TOP GRID ── */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-dot" />
              AOUN <span>ALI</span>
            </div>

            <p className="footer-tagline">Frontend &amp; Laravel Developer</p>

            <div className="footer-divider-line" />

            <p className="footer-about">
              Crafting modern, fast, and pixel-perfect web experiences
              from Pakistan — clean code meets thoughtful design.
            </p>

            <div className="footer-socials">
              <a
                className="footer-social-link"
                href="https://www.instagram.com/aoun_1_0/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="footer-social-link"
                href="https://www.facebook.com/profile.php?id=100086002752558"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                className="footer-social-link"
                href="https://www.linkedin.com/in/aoun-ali-283570382/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                className="footer-social-link"
                href="https://www.tiktok.com/@aoun_1_0"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {services.map((service) => (
                <li key={service}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <a href="tel:+923489156101">+92 348 9156101</a>
              </li>
              <li>
                <a href="mailto:aoundev066@gmail.com">aoundev066@gmail.com</a>
              </li>
              <li>
                <span>Dera Ismail Khan, PK</span>
              </li>
              <li>
                <a
                  href="https://wa.me/923489156101"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-wa"
                >
                  <FaWhatsapp />
                  WhatsApp Me
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── DECORATIVE DIVIDER ── */}
        <div className="footer-hr" />

        {/* ── BOTTOM BAR ── */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} <span>Aoun Ali</span>. All rights reserved.
          </p>

          <p className="footer-credit">
            Made with <FaHeart className="heart-icon" /> using React
          </p>

          <button className="scroll-top" onClick={scrollTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;