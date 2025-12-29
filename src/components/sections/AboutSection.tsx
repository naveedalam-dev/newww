import { Target, Eye, CheckCircle2 } from "lucide-react";
import aboutBg from "@/assets/about-company.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export const AboutSection = () => {
  const { isRTL } = useLanguage();

  const keyPoints = [
    "Fully Licensed & Insured in KSA",
    "ISO Certified Quality Management",
    "Compliance with Saudi Labor Laws",
    "Dedicated Safety Officers",
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="container-section text-left">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Al-Itqan Al-Maha
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Pioneering Excellence in <span className="text-primary">General Contracting</span>
          </h2>
          <p className="text-body text-lg leading-relaxed">
            A leader in Saudi Arabia's construction and workforce sector, committed to delivering precision, quality, and reliability for every project.
          </p>
        </div>

        {/* Content Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? "lg:grid-flow-dense" : ""}`}>
          {/* Image */}
          <div className={`relative ${isRTL ? "lg:col-start-2" : ""}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutBg}
                alt="Al-Itqan Al-Maha headquarters in Saudi Arabia"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-accent text-white px-4 py-2 font-bold text-2xl rounded-lg">#1</div>
                  <div>
                    <div className="font-bold text-lg">Choice for Mega Projects</div>
                    <div className="text-white/80 text-sm">Trusted by Industry Leaders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`space-y-8 ${isRTL ? "lg:col-start-1 text-right" : ""}`}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Building the Future of KSA
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                For over a decade, Al-Itqan Al-Maha has been at the forefront of the Kingdom's infrastructure development. We specialize in providing skilled workforce solutions and general contracting services that drive project success.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our deep understanding of local market dynamics, combined with international standards of operation, makes us the preferred partner for complex construction and industrial projects across Saudi Arabia.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {keyPoints.map((item) => (
                <div key={item} className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Vision & Mission Cards - Simplified */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="p-6 rounded-xl bg-secondary/30 border border-border">
                <Eye className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Our Vision</h4>
                <p className="text-sm text-muted-foreground">To be the undisputed leader in KSA's contracting sector, recognized for innovation and integrity.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/30 border border-border">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Our Mission</h4>
                <p className="text-sm text-muted-foreground">Empowering projects with top-tier talent and uncompromising quality standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
