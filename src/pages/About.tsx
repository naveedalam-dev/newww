import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Al-Itqan Al-Maha</title>
                <meta
                    name="description"
                    content="Learn about Al-Itqan Al-Maha, a premier general contracting firm in Saudi Arabia. Discover our mission, values, and expert team."
                />
            </Helmet>

            <Header />
            <main>
                <AboutSection />
                <ValuesSection />
                <TeamSection />
                <PartnersSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
};

export default About;
