import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import VideoSection from "@/components/video-section";
import BenefitsSection from "@/components/benefits-section";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";
import ContactFormSection from "@/components/contact-form-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <VideoSection />
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <ContactFormSection />
      <Footer />
    </div>
  );
}
