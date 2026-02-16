import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "./AnimatedCounter";
import "../styles/Impact.css";

export function Impact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 50000, suffix: "+", label: "Lives Touched" },
    { number: 200, suffix: "+", label: "Schools Reached" },
    { number: 15000, suffix: "+", label: "Meals Served" },
    { number: 30, suffix: "+", label: "Partner Organizations" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="impact" id="impact" ref={ref}>
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our Reach
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Real Impact
        </motion.h2>
        <motion.div
          className="impact-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="impact-card"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="impact-number">
                <AnimatedCounter
                  end={stat.number}
                  duration={2500}
                  suffix={stat.suffix}
                />
              </div>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Impact;
