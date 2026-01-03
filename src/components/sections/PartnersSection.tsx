import { Building2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export const PartnersSection = () => {
  const partners = [
    "Saudi Aramco",
    "SABIC",
    "NEOM",
    "Red Sea Global",
    "Roshn",
    "Al Bawani",
    "Nesma & Partners",
    "El Seif Engineering"
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 border-b border-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 font-pj">
              Trusted by Industry Leaders Across the Kingdom
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 contrast-0 hover:filter-none hover:opacity-100 transition-all duration-500">
            {partners.map((partner) => (
              <div key={partner} className="flex items-center gap-2 group cursor-default select-none">
                <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-gray-600" />
                </div>
                <span className="font-bold text-lg text-gray-400 group-hover:text-gray-900 transition-colors font-pj">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
