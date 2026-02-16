import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export function SEO({
  title = "Rokkers Foundation | Empowering Communities & Changing Lives",
  description = "Rokkers Foundation is a non-profit organisation supporting vulnerable communities through education, healthcare, and food programs.",
  keywords = "charity, NGO, foundation, donations, education, healthcare, community support",
  image = "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=630&fit=crop",
  type = "website",
  article = null,
}) {
  const location = useLocation();
  const baseUrl = "https://rokkersfoundation.org";
  const currentUrl = `${baseUrl}${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="Rokkers Foundation" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_US" />

      {/* Article-specific meta tags */}
      {article && (
        <>
          <meta
            property="article:published_time"
            content={article.publishedTime}
          />
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@RokkersFoundation" />
      <meta name="twitter:creator" content="@RokkersFoundation" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional SEO */}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Rokkers Foundation" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Mobile */}
      <meta name="theme-color" content="#2e8b57" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
    </Helmet>
  );
}

export default SEO;
