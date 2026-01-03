import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet-async";
import { FadeIn } from "@/components/ui/FadeIn";

const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Projects & Partners | Al-Itqan Al-Maha</title>
                <meta
                    name="description"
                    content="See our portfolio of successful projects and the industry leaders we work with across Saudi Arabia."
                />
            </Helmet>

            <Header />
            <main>
                <div className="pt-24 pb-12 bg-gray-50 text-center">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <FadeIn>
                            <h1 className="text-4xl font-bold text-gray-900 font-pj">Our Projects & Partners</h1>
                            <p className="mt-4 text-lg text-gray-600 font-inter">Delivering excellence in every endeavor.</p>
                        </FadeIn>
                    </div>
                </div>
                <PartnersSection />
                <FeaturesSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
};

export default Projects;
