import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SEO from "../components/SEO";
import "../styles/News.css";

export function News() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const newsArticles = [
    {
      id: 1,
      title: "New School Supplies Reach 500 Students",
      category: "Education",
      date: "February 10, 2026",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
      excerpt:
        "Our latest education initiative successfully distributed school kits to over 500 students across 5 rural communities, ensuring every child has the tools they need to succeed.",
      featured: true,
    },
    {
      id: 2,
      title: "Mobile Health Clinic Expansion Announced",
      category: "Healthcare",
      date: "February 5, 2026",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      excerpt:
        "Thanks to generous donor support, we're expanding our mobile health clinic program to serve three additional communities starting next month.",
      featured: true,
    },
    {
      id: 3,
      title: "Annual Fundraising Gala Raises $150,000",
      category: "Events",
      date: "January 28, 2026",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop",
      excerpt:
        "Our 10th Annual Gala was a tremendous success, raising critical funds to support all three of our core programs throughout 2026.",
      featured: false,
    },
    {
      id: 4,
      title: "Community Food Bank Serves 1,000th Family",
      category: "Food Security",
      date: "January 20, 2026",
      image:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=500&fit=crop",
      excerpt:
        "A major milestone as our community food bank program reaches its 1,000th family, providing nutritious food packages to those in need.",
      featured: false,
    },
    {
      id: 5,
      title: "Volunteer Training Program Launches",
      category: "Volunteering",
      date: "January 15, 2026",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=500&fit=crop",
      excerpt:
        "New comprehensive training program equips volunteers with skills and knowledge to make an even greater impact in their communities.",
      featured: false,
    },
    {
      id: 6,
      title: "Partnership with Local University Established",
      category: "Education",
      date: "January 8, 2026",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
      excerpt:
        "We're excited to partner with State University to provide tutoring and mentorship programs for students in our education initiative.",
      featured: false,
    },
  ];

  const featuredNews = newsArticles.filter((article) => article.featured);
  const regularNews = newsArticles.filter((article) => !article.featured);

  return (
    <>
      <SEO
        title="News & Updates | Rokkers Foundation"
        description="Stay up to date with the latest news, events, and impact stories from Rokkers Foundation."
      />
      <Header />

      <main className="news-page" id="main-content">
        {/* Hero Section */}
        <section className="news-hero">
          <div className="container">
            <motion.div
              className="news-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>News & Updates</h1>
              <p className="lead">
                Stay informed about our latest programs, events, and the impact
                we're making together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured News */}
        <section className="featured-section" ref={ref}>
          <div className="container">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Featured Stories
            </motion.h2>
            <div className="featured-grid">
              {featuredNews.map((article, idx) => (
                <motion.article
                  key={article.id}
                  className="featured-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="article-image">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                    />
                    <span className="article-category">{article.category}</span>
                  </div>
                  <div className="article-content">
                    <time className="article-date">{article.date}</time>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <button className="read-more">
                      Read More <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className="recent-section">
          <div className="container">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Recent Updates
            </motion.h2>
            <div className="news-grid">
              {regularNews.map((article, idx) => (
                <motion.article
                  key={article.id}
                  className="news-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="news-image">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="news-content">
                    <div className="news-meta">
                      <span className="news-category">{article.category}</span>
                      <time className="news-date">{article.date}</time>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <button className="read-more-small">
                      Read More <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="newsletter-section">
          <div className="container">
            <motion.div
              className="newsletter-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Stay Connected</h2>
              <p>
                Subscribe to our newsletter and get the latest updates delivered
                to your inbox.
              </p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default News;
