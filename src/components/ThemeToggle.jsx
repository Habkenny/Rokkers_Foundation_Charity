import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import "../styles/ThemeToggle.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </motion.button>
  );
}

export default ThemeToggle;
