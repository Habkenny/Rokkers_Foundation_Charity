import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SEO from "../components/SEO";
import ImageLightbox from "../components/ImageLightbox";
import AnimatedCounter from "../components/AnimatedCounter";
import "../styles/Gallery.css";

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = ["all", "education", "healthcare", "food", "events"];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
      category: "education",
      title: "Reading Program",
      description: "Students participating in after-school reading sessions",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      category: "education",
      title: "Science Class",
      description: "Hands-on science education in rural schools",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      category: "healthcare",
      title: "Mobile Clinic",
      description: "Healthcare workers providing free checkups",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=600&fit=crop",
      category: "healthcare",
      title: "Vaccination Drive",
      description: "Community vaccination event for children",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      category: "food",
      title: "Community Kitchen",
      description: "Volunteers preparing meals for families",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop",
      category: "food",
      title: "Food Distribution",
      description: "Weekly food package distribution program",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      category: "events",
      title: "Fundraising Gala",
      description: "Annual charity gala raising funds for programs",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800&h=600&fit=crop",
      category: "events",
      title: "Community Celebration",
      description: "Celebrating project milestones with beneficiaries",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      category: "education",
      title: "School Supplies",
      description: "Distribution of school kits to students",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop",
      category: "healthcare",
      title: "Health Workshop",
      description: "Nutrition and wellness education session",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      category: "food",
      title: "Fresh Produce",
      description: "Delivering fresh vegetables to communities",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
      category: "events",
      title: "Volunteer Training",
      description: "New volunteer orientation and training day",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <SEO
        title="Gallery | Rokkers Foundation"
        description="Explore photos from our programs and events. See the impact of your support through our work in education, healthcare, and food security."
      />
      <Header />

      <main className="gallery-page" id="main-content">
        {/* Hero Section */}
        <section className="gallery-hero">
          <div className="container">
            <motion.div
              className="gallery-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>Our Gallery</h1>
              <p className="lead">
                See the impact of your support through the faces and moments
                that matter most.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section" ref={ref}>
          <div className="container">
            {/* Category Filter */}
            <motion.div
              className="category-filter"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat === "all"
                    ? "All Photos"
                    : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </motion.button>
              ))}
            </motion.div>

            {/* Gallery Grid */}
            <div className="gallery-grid">
              {filteredImages.map((image, idx) => (
                <motion.div
                  key={image.id}
                  className="gallery-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setLightboxIndex(idx)}
                  style={{ cursor: "pointer" }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setLightboxIndex(idx);
                    }
                  }}
                  aria-label={`View ${image.title}`}
                >
                  <div className="gallery-image">
                    <img src={image.src} alt={image.title} loading="lazy" />
                    <div className="gallery-overlay">
                      <h3>{image.title}</h3>
                      <p>{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <motion.div
                className="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p>No images found in this category.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="gallery-stats">
          <div className="container">
            <motion.div
              className="stats-grid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={1200} suffix="+" />
                </div>
                <p>Photos Captured</p>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <p>Events Documented</p>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <p>Communities Visited</p>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={10} />
                </div>
                <p>Years of Impact</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gallery-cta">
          <div className="container">
            <motion.div
              className="cta-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Want to See More Impact?</h2>
              <p>
                Follow us on social media for daily updates and
                behind-the-scenes content.
              </p>
              <div className="social-buttons">
                <a href="#" className="social-btn" aria-label="Facebook">
                  Facebook
                </a>
                <a href="#" className="social-btn" aria-label="Instagram">
                  Instagram
                </a>
                <a href="#" className="social-btn" aria-label="Twitter">
                  Twitter
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />

      {/* Image Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

export default Gallery;
