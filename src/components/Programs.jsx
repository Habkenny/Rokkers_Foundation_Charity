import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Programs.css";

export function Programs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const programs = [
    {
      title: "Education",
      description:
        "School kits, uniforms, and tuition support for vulnerable children.",
      icon: "📚",
    },
    {
      title: "Healthcare",
      description:
        "Mobile health outreach and urgent care referrals for communities.",
      icon: "🏥",
    },
    {
      title: "Food Security",
      description:
        "Community kitchens and local partner networks providing nutritious meals.",
      icon: "🍲",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="programs" id="programs" ref={ref}>
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          How we help
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our Programs
        </motion.h2>
        <motion.div
          className="programs-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              className="program-card"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 15px 35px rgba(0,0,0,0.12)" }}
            >
              <div className="program-icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Programs;
