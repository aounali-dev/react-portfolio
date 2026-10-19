import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaCogs,
  FaProjectDiagram,
  FaEnvelope,
  FaQuestionCircle,
} from "react-icons/fa";

import "./Navbar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  // WhatsApp link — number ke saath country code (Pakistan = +92)
  const whatsappNumber = "923489156101"; // 03489156101 → 923489156101
  const whatsappMessage = encodeURIComponent("Hi Aoun! I want to hire you.");
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const links = [
    { icon: <FaHome />, label: "HOME", href: "#home" },
    { icon: <FaUser />, label: "ABOUT", href: "#about" },
    { icon: <FaCode />, label: "SKILLS", href: "#skills" },
    { icon: <FaCogs />, label: "SERVICES", href: "#services" },
    { icon: <FaProjectDiagram />, label: "PROJECTS", href: "#projects" },
    { icon: <FaQuestionCircle />, label: "FAQ", href: "#faq" },
    { icon: <FaEnvelope />, label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* LOGO */}
        <a href="#home" className="nav-logo">
          AOUN <span>ALI</span>
        </a>

        {/* DESKTOP LINKS */}
        <ul className="nav-links">
          {links.map((item) => (
            <li key={item.label}>
              <a href={item.href}>
                {item.icon} {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          {/* Hire Me → WhatsApp pe open hoga */}
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="contact-btn">
              Hire Me
            </button>
          </a>

          <button className="hamburger" onClick={toggleMenu}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        } ${closing ? "closing" : ""}`}
      >
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {item.icon} {item.label}
          </a>
        ))}

        {/* Mobile mein bhi same WhatsApp link */}
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          <button className="mobile-contact-btn">
            Contact Me
          </button>
        </a>
      </div>
    </>
  );
};

export default NavBar;