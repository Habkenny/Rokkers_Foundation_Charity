import Header from "../components/Header";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Impact from "../components/Impact";
import Programs from "../components/Programs";
import Stories from "../components/Stories";
import Donation from "../components/Donation";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SEO from "../components/SEO";
import StructuredData, {
  organizationSchema,
} from "../components/StructuredData";

export function Home() {
  return (
    <>
      <SEO />
      <StructuredData data={organizationSchema} />
      <main id="main-content">
        <Header />
        <Hero />
        <Mission />
        <Impact />
        <Programs />
        <Stories />
        <Donation />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}

export default Home;
