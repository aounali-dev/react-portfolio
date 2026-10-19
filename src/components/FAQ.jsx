import { useState } from "react";
import "./FAQ.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    q: "What services do you offer?",
    a: "I offer Frontend Development using React, JavaScript and Bootstrap, Backend Development with Laravel and PHP, Responsive Web Design, and UI/UX Implementation. I build complete modern web applications from scratch.",
  },
  {
    q: "How much do you charge for a project?",
    a: "Project cost depends on the complexity, features and timeline. Every project is unique so I provide a custom quote after understanding your requirements. Feel free to contact me for a free consultation.",
  },
  {
    q: "How long does it take to complete a project?",
    a: "A simple landing page takes 3-5 days, a medium website takes 1-2 weeks, and a full web application can take 3-4 weeks. Timeline depends on project scope and requirements.",
  },
  {
    q: "Do you work on existing projects or only new ones?",
    a: "I work on both! Whether you need a brand new website built from scratch or want to improve, fix bugs or add features to an existing project — I can help with both.",
  },
  {
    q: "What technologies do you use?",
    a: "Frontend: HTML5, CSS3, Bootstrap 5, Tailwind CSS, JavaScript, React JS. Backend: PHP, Laravel, MySQL. I always use the best technology that fits your project needs.",
  },
  {
    q: "How can I contact you?",
    a: "You can reach me via WhatsApp at +92 348 9156101, email at aoundev066@gmail.com, or simply fill out the contact form on this website. I typically respond within a few hours.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="faq" id="faq">

      <div className="faq-blur faq-b1"></div>
      <div className="faq-blur faq-b2"></div>

      <div className="faq-container">

        {/* Header */}
        <div className="faq-header">
          <span className="faq-tag">FAQ</span>
          <h2>
            Frequently Asked <span>Questions</span>
          </h2>
          <p>
            Everything you need to know before working with me.
          </p>
        </div>

        {/* Items */}
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${
                activeIndex === i ? "active" : ""
              }`}
              onClick={() => toggle(i)}
            >
              <div className="faq-question">

                <div className="faq-q-left">
                  <span className="faq-num">
                    0{i + 1}
                  </span>

                  <h3>{item.q}</h3>
                </div>

                <div className="faq-icon">
                  {activeIndex === i ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                </div>

              </div>

              <div
                className={`faq-answer ${
                  activeIndex === i ? "open" : ""
                }`}
              >
                <p>{item.a}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="faq-cta">
          <p>Still have questions?</p>

          <a
            href="https://wa.me/923489156101"
            target="_blank"
            rel="noreferrer"
            className="faq-cta-btn"
          >
            Ask on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;