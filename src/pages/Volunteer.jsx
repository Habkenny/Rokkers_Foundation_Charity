import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import toast from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SEO from "../components/SEO";
import { useForm } from "../hooks/useForm";
import "../styles/Volunteer.css";

export function Volunteer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const volunteerOpportunities = [
    {
      title: "Education Support",
      description:
        "Tutor students, organize school supply drives, or assist in after-school programs.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      commitment: "4-8 hours/week",
      skills: "Teaching, patience, communication",
    },
    {
      title: "Healthcare Assistant",
      description:
        "Support mobile health clinics, help with health screenings, and patient coordination.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
      commitment: "Flexible schedule",
      skills: "Medical background preferred",
    },
    {
      title: "Food Program Helper",
      description:
        "Assist in community kitchens, food distribution, and meal preparation.",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
      commitment: "Weekend availability",
      skills: "No experience needed",
    },
    {
      title: "Event Coordinator",
      description:
        "Help organize fundraising events, community gatherings, and awareness campaigns.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      commitment: "Project-based",
      skills: "Organization, creativity",
    },
    {
      title: "Marketing & Social Media",
      description:
        "Create content, manage social media, and help spread awareness about our programs.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      commitment: "Remote, flexible",
      skills: "Social media, design",
    },
    {
      title: "Administrative Support",
      description:
        "Assist with data entry, phone calls, email management, and general office tasks.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      commitment: "Part-time",
      skills: "Computer skills, organization",
    },
  ];

  const benefits = [
    {
      icon: "🌟",
      title: "Make an Impact",
      description: "Directly contribute to changing lives in your community",
    },
    {
      icon: "🤝",
      title: "Build Connections",
      description: "Meet like-minded individuals passionate about giving back",
    },
    {
      icon: "📚",
      title: "Learn & Grow",
      description: "Gain valuable skills and experience in nonprofit work",
    },
    {
      icon: "🎖️",
      title: "Recognition",
      description: "Receive certificates and references for your service",
    },
  ];

  const initialState = {
    name: "",
    email: "",
    phone: "",
    interest: "",
    availability: "",
    experience: "",
    message: "",
  };

  const { values, isSubmitting, setIsSubmitting, handleChange, reset } =
    useForm(initialState, null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.name || !values.email || !values.interest) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        "Thank you for your interest! We'll contact you soon with more information.",
        { duration: 5000, icon: "🎉" },
      );

      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Volunteer With Us | Rokkers Foundation"
        description="Join our team of passionate volunteers. Make a difference in your community through education, healthcare, and food security programs."
      />
      <Header />

      <main className="volunteer-page" id="main-content">
        {/* Hero Section */}
        <section className="volunteer-hero">
          <div className="container">
            <motion.div
              className="volunteer-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>Volunteer With Us</h1>
              <p className="lead">
                Join a community of changemakers. Your time and skills can
                transform lives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow">Why Volunteer</p>
              <h2 className="section-title">Benefits of Volunteering</h2>
            </motion.div>
            <div className="benefits-grid">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="benefit-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="opportunities-section" ref={ref}>
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow">Get Involved</p>
              <h2 className="section-title">Volunteer Opportunities</h2>
            </motion.div>
            <div className="opportunities-grid">
              {volunteerOpportunities.map((opp, idx) => (
                <motion.div
                  key={idx}
                  className="opportunity-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="opp-image">
                    <img src={opp.image} alt={opp.title} loading="lazy" />
                  </div>
                  <div className="opp-content">
                    <h3>{opp.title}</h3>
                    <p>{opp.description}</p>
                    <div className="opp-details">
                      <div className="opp-detail">
                        <strong>Commitment:</strong> {opp.commitment}
                      </div>
                      <div className="opp-detail">
                        <strong>Skills:</strong> {opp.skills}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="application-section">
          <div className="container">
            <motion.div
              className="application-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="form-header">
                <p className="eyebrow">Join Us</p>
                <h2>Volunteer Application</h2>
                <p>
                  Fill out this form to express your interest. We'll contact you
                  with next steps.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="volunteer-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      value={values.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your full name"
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
                      placeholder="your.email@example.com"
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
                    <label htmlFor="interest">Area of Interest *</label>
                    <select
                      id="interest"
                      value={values.interest}
                      onChange={(e) => handleChange("interest", e.target.value)}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Select an area</option>
                      <option value="education">Education Support</option>
                      <option value="healthcare">Healthcare Assistant</option>
                      <option value="food">Food Program Helper</option>
                      <option value="events">Event Coordinator</option>
                      <option value="marketing">
                        Marketing & Social Media
                      </option>
                      <option value="admin">Administrative Support</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="availability">Availability</label>
                  <input
                    type="text"
                    id="availability"
                    value={values.availability}
                    onChange={(e) =>
                      handleChange("availability", e.target.value)
                    }
                    placeholder="e.g., Weekends, Weekday evenings, Flexible"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="experience">Relevant Experience</label>
                  <textarea
                    id="experience"
                    value={values.experience}
                    onChange={(e) => handleChange("experience", e.target.value)}
                    placeholder="Tell us about your relevant skills or experience..."
                    rows="4"
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Additional Information</label>
                  <textarea
                    id="message"
                    value={values.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Is there anything else you'd like us to know?"
                    rows="4"
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
                      <span className="spinner"></span> Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default Volunteer;
