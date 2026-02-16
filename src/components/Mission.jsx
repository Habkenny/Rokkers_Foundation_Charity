import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Mission.css";

export function Mission() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="mission" id="mission" ref={ref}>
      <div className="container mission-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">What drives us</p>
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            We empower individuals and communities by providing access to basic
            needs, education, and opportunities for a better future.
          </p>
          <ul className="mission-list">
            <li>School kits, uniforms, and tuition support</li>
            <li>Mobile health outreach and urgent care referrals</li>
            <li>Food security through kitchens and local partners</li>
          </ul>
        </motion.div>
        <motion.div
          className="mission-card"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Where your gift goes</h3>
          <div className="mission-progress">
            <div className="progress-track">
              <motion.div
                className="progress-fill"
                style={{ width: "68%" }}
                initial={{ width: 0 }}
                animate={inView ? { width: "68%" } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              ></motion.div>
            </div>
            <div className="progress-label">68% Programs</div>
          </div>
          <div className="mission-progress">
            <div className="progress-track">
              <motion.div
                className="progress-fill"
                style={{ width: "20%" }}
                initial={{ width: 0 }}
                animate={inView ? { width: "20%" } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
            </div>
            <div className="progress-label">20% Operations</div>
          </div>
          <div className="mission-progress">
            <div className="progress-track">
              <motion.div
                className="progress-fill"
                style={{ width: "12%" }}
                initial={{ width: 0 }}
                animate={inView ? { width: "12%" } : {}}
                transition={{ duration: 1, delay: 0.6 }}
              ></motion.div>
            </div>
            <div className="progress-label">12% Fundraising</div>
          </div>
          <p className="microcopy">
            Transparency Report – <a href="#">Learn more about our impact</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Mission;
