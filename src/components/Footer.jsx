import { motion } from "framer-motion";
import { useScrollTo } from "../hooks/useScrollTo";
import "../styles/Footer.css";

export function Footer() {
  const scrollTo = useScrollTo();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4>Rokkers Foundation</h4>
          <p>
            Empowering vulnerable communities through education, healthcare, and
            food security.
          </p>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a
                href="#mission"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("mission");
                }}
              >
                Mission
              </a>
            </li>
            <li>
              <a
                href="#impact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("impact");
                }}
              >
                Impact
              </a>
            </li>
            <li>
              <a
                href="#programs"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("programs");
                }}
              >
                Programs
              </a>
            </li>
            <li>
              <a
                href="#donate"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("donate");
                }}
              >
                Donate
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4>Contact</h4>
          <p>
            Email:{" "}
            <a href="mailto:info@rokkersfoundation.org">
              info@rokkersfoundation.org
            </a>
          </p>
          <p>Phone: +1 (555) 123-4567</p>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li>
              <a href="#" aria-label="Follow us on Facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" aria-label="Follow us on Twitter">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" aria-label="Follow us on Instagram">
                Instagram
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Rokkers Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
