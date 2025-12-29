import { ArrowRight, Wrench, HardHat, Building2, Truck, Users, Settings, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesSection = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      title: "General Labor Staffing",
      description: "Reliable, vetted general workforce for construction, industrial, and logistics sectors across Saudi Arabia.",
      icon: <Users className="w-6 h-6" />,
      link: "/services/labor-staffing",
      features: ["Vetted Workforce", "Immediate Deployment", "Compliance Assured"]
    },
    {
      title: "Skilled Manpower Supply",
      description: "Certified technicians, electricians, plumbers, and specialized tradesmen ready for complex projects.",
      icon: <Settings className="w-6 h-6" />,
      link: "/services/skilled-manpower",
      features: ["Certified Experts", "Technical Proficiency", "Safety Trained"]
    },
    {
      title: "Industrial & Manufacturing",
      description: "Operatives and machine handlers for high-volume production and industrial facility maintenance.",
      icon: <Building2 className="w-6 h-6" />,
      link: "/services/industrial",
      features: ["Production Efficiency", "Process Optimized", "Flexible Shifts"]
    },
    {
      title: "Event Staff & Support",
      description: "Professional support staff for large-scale corporate events, exhibitions, and public gatherings in KSA.",
      icon: <Clock className="w-6 h-6" />,
      link: "/services/event-staff",
      features: ["Professional Presentation", "Multilingual Support", "Guest Focused"]
    },
  ];

  return (
    <section className="section-padding bg-secondary/30" id="services">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-semibold tracking-wider text-xs uppercase bg-accent/10 px-3 py-1 rounded-full">Our Expertise</span>
          <h2 className="heading-lg text-foreground">Comprehensive Solutions</h2>
          <p className="text-body">
            Tailored construction and contracting services designed to meet international standards and local requirements in Saudi Arabia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-2xl border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <div className="pt-4 border-t border-border mt-auto">
                <Link
                  to={service.link}
                  className={`inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  {isRTL ? "اقرأ المزيد" : "Learn more"}
                  <ArrowRight className={`w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 mr-1 ml-0 group-hover:-translate-x-1" : ""}`} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
