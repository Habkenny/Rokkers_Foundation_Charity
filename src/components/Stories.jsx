import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Stories.css";

export function Stories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stories = [
    {
      name: "Amara",
      role: "Student",
      story:
        "School support helped me reach grade 9. I now tutor younger children.",
      image: "👧",
    },
    {
      name: "James & Family",
      role: "Community Kitchen Beneficiary",
      story:
        "Consistent access to meals gave us stability to pursue opportunities.",
      image: "👨‍👩‍👧‍👦",
    },
    {
      name: "Dr. Kone",
      role: "Mobile Health Volunteer",
      story:
        "Working with Rokkers, I've reached 3,000+ people in remote areas.",
      image: "👨‍⚕️",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="stories" id="stories" ref={ref}>
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Their Journey
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Success Stories
        </motion.h2>
        <motion.div
          className="stories-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stories.map((item, idx) => (
            <motion.div
              key={idx}
              className="story-card"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="story-image">{item.image}</div>
              <h3>{item.name}</h3>
              <p className="story-role">{item.role}</p>
              <p className="story-text">{item.story}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Stories;
