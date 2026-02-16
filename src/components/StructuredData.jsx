import { Helmet } from "react-helmet-async";

export function StructuredData({ data }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Rokkers Foundation",
  alternateName: "Rokkers",
  url: "https://rokkersfoundation.org",
  logo: "https://rokkersfoundation.org/logo.png",
  description:
    "A non-profit organization supporting vulnerable communities through education, healthcare, and food security programs.",
  foundingDate: "2010",
  sameAs: [
    "https://www.facebook.com/RokkersFoundation",
    "https://twitter.com/RokkersFoundation",
    "https://www.instagram.com/RokkersFoundation",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Charity Lane",
    addressLocality: "Community City",
    addressRegion: "State",
    postalCode: "12345",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "Customer Service",
    email: "info@rokkersfoundation.org",
    availableLanguage: ["English"],
  },
};

// FAQ Schema Generator
export function createFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Event Schema Generator
export function createEventSchema(event) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      "@type": "Place",
      name: event.locationName,
      address: event.locationAddress,
    },
    organizer: {
      "@type": "Organization",
      name: "Rokkers Foundation",
      url: "https://rokkersfoundation.org",
    },
    image: event.image,
  };
}

// Article/News Schema Generator
export function createArticleSchema(article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    author: {
      "@type": "Person",
      name: article.author || "Rokkers Foundation",
    },
    publisher: {
      "@type": "Organization",
      name: "Rokkers Foundation",
      logo: {
        "@type": "ImageObject",
        url: "https://rokkersfoundation.org/logo.png",
      },
    },
  };
}

// Breadcrumb Schema Generator
export function createBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export default StructuredData;
