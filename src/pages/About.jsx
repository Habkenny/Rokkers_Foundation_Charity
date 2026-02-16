import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SEO from "../components/SEO";
import "../styles/About.css";

export function About() {
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & Executive Director",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "15+ years in nonprofit management and community development.",
    },
    {
      name: "Michael Chen",
      role: "Director of Programs",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      bio: "Expert in education initiatives and sustainable development.",
    },
    {
      name: "Aisha Patel",
      role: "Healthcare Coordinator",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
      bio: "Licensed nurse with 10 years in mobile health services.",
    },
    {
      name: "James Williams",
      role: "Community Outreach Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Passionate about connecting communities with resources.",
    },
  ];

  const values = [
    {
      icon: "🤝",
      title: "Compassion",
      description:
        "We lead with empathy and understanding in every interaction.",
    },
    {
      icon: "💪",
      title: "Empowerment",
      description: "We believe in giving people tools, not just aid.",
    },
    {
      icon: "🔍",
      title: "Transparency",
      description:
        "We maintain open communication about our work and finances.",
    },
    {
      icon: "🌍",
      title: "Sustainability",
      description:
        "We focus on long-term solutions that create lasting change.",
    },
  ];

  const milestones = [
    { year: "2010", event: "Rokkers Foundation established" },
    { year: "2012", event: "First 1,000 students supported" },
    { year: "2015", event: "Mobile health program launched" },
    { year: "2018", event: "Reached 20,000 beneficiaries" },
    { year: "2020", event: "Expanded to 5 regions" },
    { year: "2023", event: "50,000+ lives impacted milestone" },
  ];

  return (
    <>
      <SEO
        title="About Us | Rokkers Foundation"
        description="Learn about Rokkers Foundation's mission, team, values, and journey in empowering vulnerable communities worldwide."
      />
      <Header />

      <main className="about-page" id="main-content">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <motion.div
              className="about-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>About Rokkers Foundation</h1>
              <p className="lead">
                For over a decade, we've been transforming lives through
                education, healthcare, and community support programs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="our-story">
          <div className="container story-grid">
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
                alt="Community gathering at Rokkers Foundation event"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="story-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow">Our Story</p>
              <h2>How It All Began</h2>
              <p>
                Rokkers Foundation was born from a simple belief: every person
                deserves access to basic necessities and opportunities to
                thrive. Founded in 2010 by Dr. Sarah Johnson, who witnessed
                firsthand the challenges faced by vulnerable communities, our
                organization started with a single school supply drive.
              </p>
              <p>
                What began as a modest initiative has grown into a comprehensive
                support system serving 50,000+ individuals across multiple
                regions. We've expanded our programs to include education,
                healthcare, and food security, but our core mission remains
                unchanged: empowering communities to build brighter futures.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="our-values" ref={valuesRef}>
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow">What Drives Us</p>
              <h2 className="section-title">Our Core Values</h2>
            </motion.div>
            <div className="values-grid">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  className="value-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow">Our Journey</p>
              <h2 className="section-title">Key Milestones</h2>
            </motion.div>
            <div className="timeline-container">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  className="timeline-item"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="timeline-year">{milestone.year}</div>
                  <div className="timeline-content">
                    <p>{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="our-team" ref={teamRef}>
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow">Meet The Team</p>
              <h2 className="section-title">Leadership</h2>
            </motion.div>
            <div className="team-grid">
              {team.map((member, idx) => (
                <motion.div
                  key={idx}
                  className="team-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={teamInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="team-image">
                    <img src={member.image} alt={member.name} loading="lazy" />
                  </div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="container">
            <motion.div
              className="cta-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Join Us in Making a Difference</h2>
              <p>
                Whether through donations, volunteering, or partnerships, there
                are many ways to support our mission.
              </p>
              <div className="cta-buttons">
                <a href="/volunteer" className="btn btn-primary">
                  Get Involved
                </a>
                <a href="/#donate" className="btn btn-secondary">
                  Donate Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default About;
