import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "../hooks/useCountUp";
import "../styles/AnimatedCounter.css";

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const count = useCountUp(end, duration, inView);

  return (
    <motion.span
      ref={ref}
      className="animated-counter"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  );
}

export default AnimatedCounter;
