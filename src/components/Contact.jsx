import { useState } from "react";
import "./Contact.css";

import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = form;

    const text =
      `*New Message from Portfolio* 🚀%0A%0A` +
      `👤 *Name:* ${name}%0A` +
      `📧 *Email:* ${email}%0A` +
      `📌 *Subject:* ${subject}%0A%0A` +
      `💬 *Message:*%0A${message}`;

    window.open(
      `https://wa.me/923489156101?text=${text}`,
      "_blank"
    );

    setSent(true);

    setTimeout(() => {
      setSent(false);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="contact" id="contact">

      {/* Background Orbs */}
      <div className="cnt-orb cnt-orb1"></div>
      <div className="cnt-orb cnt-orb2"></div>
      <div className="cnt-orb cnt-orb3"></div>

      <div className="cnt-container">

        {/* Header */}
        <div className="cnt-header">

          <div className="cnt-tag">
            <span className="cnt-tag-dot"></span>
            GET IN TOUCH
          </div>

          <h2>
            Let's Build Something <span>Amazing</span>
          </h2>

          <p>
            Have a project in mind or just want to say hi?
            I'd love to hear from you.
          </p>

        </div>

        {/* Main Grid */}
        <div className="cnt-grid">

          {/* Left Side */}
          <div className="cnt-left">

            {/* Hero Card */}
            <div className="cnt-hero-card">

              <div className="cnt-hero-glow"></div>

              <div className="cnt-available">
                <span className="cnt-green-dot"></span>
                Available for new projects
              </div>

              <h3>
                Let's Work <br />
                <span>Together</span>
              </h3>

              <p>
                I'm currently available for freelance work and
                full-time positions. Let's create something extraordinary!
              </p>

              <a
                href="https://wa.me/923489156101"
                target="_blank"
                rel="noreferrer"
                className="cnt-wa-direct"
              >
                <FaWhatsapp />
                Chat on WhatsApp
                <FaArrowRight className="cnt-arrow" />
              </a>

            </div>

            {/* Info Cards */}
            <div className="cnt-info-grid">

              <a
                href="tel:+923489156101"
                className="cnt-info-card"
              >
                <div className="cnt-ic-icon phone">
                  <FaPhoneAlt />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>+92 348 9156101</strong>
                </div>
              </a>

              <a
                href="mailto:aoundev066@gmail.com"
                className="cnt-info-card"
              >
                <div className="cnt-ic-icon email">
                  <FaEnvelope />
                </div>

                <div>
                  <span>Email</span>
                  <strong>aoundev066@gmail.com</strong>
                </div>
              </a>

              <div className="cnt-info-card">

                <div className="cnt-ic-icon location">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span>Location</span>
                  <strong>Pakistan</strong>
                </div>

              </div>

            </div>

            {/* Social Icons */}
            <div className="cnt-socials">

              

              <a
                href="#"
                className="cnt-soc"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="cnt-soc"
                title="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="cnt-soc"
                title="Facebook"
              >
                <FaFacebook />
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="cnt-right">

            <div className="cnt-form-card">

              <div className="cnt-form-header">

                <div className="cnt-form-icon">
                  <FaWhatsapp />
                </div>

                <div>
                  <h3>Send a Message</h3>
                  <p>Opens directly on WhatsApp</p>
                </div>

              </div>

              <form onSubmit={handleSubmit}>

                {/* Name + Email */}
                <div className="cnt-row">

                  <div
                    className={`cnt-field ${
                      focused === "name" ? "active" : ""
                    }`}
                  >
                    <label>Full Name</label>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused("")}
                      placeholder="Aoun Ali"
                      required
                    />
                  </div>

                  <div
                    className={`cnt-field ${
                      focused === "email" ? "active" : ""
                    }`}
                  >
                    <label>Email Address</label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused("")}
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>

                </div>

                {/* Subject */}
                <div
                  className={`cnt-field ${
                    focused === "subject" ? "active" : ""
                  }`}
                >
                  <label>Subject</label>

                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused("")}
                    placeholder="Project Discussion"
                    required
                  />
                </div>

                {/* Message */}
                <div
                  className={`cnt-field ${
                    focused === "message" ? "active" : ""
                  }`}
                >
                  <label>Message</label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    rows="5"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>

                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`cnt-submit ${sent ? "sent" : ""}`}
                >

                  {sent ? (
                    <>
                      <FaCheckCircle />
                      Sent! Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <FaWhatsapp />
                      Send via WhatsApp
                    </>
                  )}

                  {!sent && (
                    <span className="cnt-btn-shine"></span>
                  )}

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;