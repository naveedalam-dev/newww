import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | Al-Itqan Al-Maha</title>
                <meta
                    name="description"
                    content="Get in touch with Al-Itqan Al-Maha for your construction project needs. Call, email, or visit our Riyadh headquarters."
                />
            </Helmet>

            <Header />
            <main>
                <ContactSection />
            </main>
            <Footer />
        </>
    );
};

export default Contact;
