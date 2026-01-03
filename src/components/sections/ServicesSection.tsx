import { Wrench, HardHat, Building, PaintBucket, Hammer, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "@/components/ui/FadeIn";

export const ServicesSection = () => {
  const services = [
    {
      title: "General Contracting",
      desc: "Comprehensive construction services for residential, commercial, and industrial projects.",
      icon: Building,
      link: "/services/general-contracting"
    },
    {
      title: "Manpower Supply",
      desc: "Providing skilled, semi-skilled, and unskilled labor for various project needs.",
      icon: HardHat,
      link: "/services/manpower-supply"
    },
    {
      title: "Equipment Rental",
      desc: "Leasing of heavy machinery and construction equipment for site operations.",
      icon: Truck,
      link: "/services/equipment-rental"
    },
    {
      title: "Civil Works",
      desc: "Excavation, grading, and infrastructure development services.",
      icon: Hammer,
      link: "/services/civil-works"
    },
    {
      title: "Finishing Works",
      desc: "High-quality interior and exterior finishing, including painting and tiling.",
      icon: PaintBucket,
      link: "/services/finishing-works"
    },
    {
      title: "Maintenance",
      desc: "Routine and emergency maintenance services for facilities and structures.",
      icon: Wrench,
      link: "/services/maintenance"
    },
  ];

  return (
    <section className="py-16 bg-gray-50 sm:py-24 lg:py-32 border-b border-gray-100" id="services">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <FadeIn>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl font-pj">
              Comprehensive Contracting Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600 font-inter">
              We provide an extensive range of specialized services tailored to meet the rigorous demands of the Saudi construction market.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div
                  className="group relative p-8 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-6 text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-pj group-hover:text-gray-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 flex-grow font-inter leading-relaxed">
                    {service.desc}
                  </p>

                  <Link
                    to={service.link}
                    className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors mt-auto font-pj"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
