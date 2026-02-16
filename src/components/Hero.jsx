import { motion } from "framer-motion";
import { useScrollTo } from "../hooks/useScrollTo";
import "../styles/Hero.css";

export function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Together, We Can Change Lives
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Rokkers Foundation supports vulnerable communities through education,
          healthcare, and food programs.
        </motion.p>
        <br />
        <motion.a
          href="#donate"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("donate");
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Donate Now
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
