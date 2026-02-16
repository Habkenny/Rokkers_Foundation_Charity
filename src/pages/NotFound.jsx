import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import "../styles/NotFound.css";

export function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Rokkers Foundation"
        description="The page you're looking for doesn't exist."
      />
      <Header />

      <main className="not-found-page" id="main-content">
        <div className="container">
          <motion.div
            className="not-found-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="error-code">404</div>
            <h1>Page Not Found</h1>
            <p className="error-message">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="error-actions">
              <Link to="/" className="btn btn-primary">
                Go Home
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>

            <div className="helpful-links">
              <h3>Helpful Links</h3>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/volunteer">Volunteer Opportunities</Link>
                </li>
                <li>
                  <Link to="/gallery">Photo Gallery</Link>
                </li>
                <li>
                  <Link to="/#donate">Make a Donation</Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;
