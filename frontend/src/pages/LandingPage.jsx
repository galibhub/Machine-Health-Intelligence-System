import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import AboutSection from "../components/sections/AboutSection";
import Footer from "../components/layout/Footer";
import CTASection from "../components/sections/CTASection";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default LandingPage;