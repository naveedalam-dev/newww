import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { GoalsSection } from "@/components/sections/GoalsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Al-Itqan Al-Maha | General Contracting & Construction Services in KSA</title>
        <meta
          name="description"
          content="Al-Itqan Al-Maha General Contracting delivers exceptional construction services across Saudi Arabia. Trusted partner for residential, commercial, and industrial projects."
        />
        <meta
          name="keywords"
          content="general contracting KSA, construction services Saudi Arabia, building contractors, residential construction, commercial construction, industrial projects, Al-Itqan Al-Maha, construction company KSA"
        />
        <link rel="canonical" href="https://alitqanalmaha.sa" />
        <meta property="og:title" content="Al-Itqan Al-Maha | General Contracting & Construction in KSA" />
        <meta property="og:description" content="Your trusted partner for exceptional construction and contracting services. We deliver quality residential, commercial, and industrial projects across Saudi Arabia." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Al-Itqan Al-Maha | General Contracting KSA" />
        <meta name="twitter:description" content="Exceptional construction and contracting services across Saudi Arabia. Quality, professionalism, and excellence in every project." />
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <AboutSection />
        <ServicesSection />
        <ValuesSection />
        <TeamSection />
        <GoalsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
