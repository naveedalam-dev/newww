import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { GoalsSection } from "@/components/sections/GoalsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet-async";

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Our Services | Al-Itqan Al-Maha</title>
                <meta
                    name="description"
                    content="Explore our comprehensive construction and contracting services, including general contracting, manpower supply, and civil works."
                />
            </Helmet>

            <Header />
            <main>
                <ServicesSection />
                <FeaturesSection />
                <GoalsSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
};

export default Services;
