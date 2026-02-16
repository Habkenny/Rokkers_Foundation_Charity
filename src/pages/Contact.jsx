import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SEO from "../components/SEO";
import StructuredData, { createFAQSchema } from "../components/StructuredData";
import { useForm } from "../hooks/useForm";
import "../styles/Contact.css";

export function Contact() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const { values, errors, isSubmitting, setIsSubmitting, handleChange, reset } =
    useForm(initialState, null);

  const faqs = [
    {
      question: "How can I donate to Rokkers Foundation?",
      answer:
        "You can donate online through our donation page, by mail, or by contacting us directly. We accept various payment methods including credit cards, bank transfers, and PayPal.",
    },
    {
      question: "Are donations tax-deductible?",
      answer:
        "Yes! Rokkers Foundation is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law.",
    },
    {
      question: "How can I volunteer with your organization?",
      answer:
        "Visit our Volunteer page to learn about current opportunities and fill out an application. We offer various volunteer roles from event support to program assistance.",
    },
    {
      question: "Where does my donation go?",
      answer:
        "68% goes directly to programs, 20% to operations, and 12% to fundraising. We maintain full transparency with quarterly reports available on our website.",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.name || !values.email || !values.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Thank you! Your message has been sent successfully.", {
        duration: 5000,
        icon: "✉️",
      });

      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      details: [
        "123 Foundation Street",
        "Community Center, Floor 3",
        "City, State 12345",
      ],
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "Mon-Fri: 9AM - 5PM"],
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: [
        "info@rokkersfoundation.org",
        "donate@rokkersfoundation.org",
        "volunteer@rokkersfoundation.org",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us | Rokkers Foundation"
        description="Get in touch with Rokkers Foundation. We're here to answer your questions about donations, volunteering, and our programs."
      />
      <StructuredData data={createFAQSchema(faqs)} />
      <Header />

      <main className="contact-page" id="main-content">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <motion.div
              className="contact-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>Get in Touch</h1>
              <p className="lead">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="contact-info-section">
          <div className="container">
            <div className="contact-info-grid">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  className="info-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="contact-form-section">
          <div className="container contact-grid">
            <motion.div
              className="form-container"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      value={values.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="John Doe"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      value={values.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="john@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={values.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      value={values.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      disabled={isSubmitting}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="donation">Donation Questions</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    value={values.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us how we can help..."
                    rows="6"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary btn-full"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span> Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className="map-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="map-placeholder">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop"
                  alt="Rokkers Foundation office location"
                  loading="lazy"
                />
                <div className="map-overlay">
                  <h3>Our Office</h3>
                  <p>123 Foundation Street</p>
                  <p>Community Center, Floor 3</p>
                  <p>City, State 12345</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow">Quick Answers</p>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </motion.div>
            <div className="faq-grid">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  className="faq-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default Contact;
