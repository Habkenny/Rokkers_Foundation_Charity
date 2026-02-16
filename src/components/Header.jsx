import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollTo } from "../hooks/useScrollTo";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import "../styles/Header.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = useScrollTo();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (sectionId) => {
    scrollTo(sectionId);
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container nav">
        <Link to="/" className="logo">
          Rokkers Foundation
        </Link>

        <nav
          aria-label="Primary navigation"
          className={`nav-menu ${menuOpen ? "open" : ""}`}
        >
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/volunteer" onClick={closeMenu}>
                Volunteer
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/news" onClick={closeMenu}>
                News
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            {isHomePage && (
              <li>
                <a
                  href="#donate"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("donate");
                  }}
                >
                  Donate
                </a>
              </li>
            )}
          </ul>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          {isHomePage ? (
            <a
              href="#donate"
              className="btn btn-secondary"
              aria-label="Donate to Rokkers Foundation"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("donate");
              }}
            >
              Donate Now
            </a>
          ) : (
            <Link
              to="/#donate"
              className="btn btn-secondary"
              aria-label="Donate to Rokkers Foundation"
            >
              Donate Now
            </Link>
          )}
        </div>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </motion.header>
  );
}

export default Header;
