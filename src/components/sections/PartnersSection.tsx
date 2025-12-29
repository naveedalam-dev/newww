import { Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const PartnersSection = () => {
  const { isRTL } = useLanguage();

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
    <section className="py-12 bg-secondary/30 border-y border-border overflow-hidden">
      <div className="container-section">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by Industry Leaders Across the Kingdom
          </p>
        </div>

        <div className="flex flex-wrapjustify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* 
              In a real scenario, these would be logo images. 
              Using stylized text placeholders for now to ensure professional appearance without broken images.
           */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full">
            {partners.map((partner) => (
              <div key={partner} className="flex items-center gap-2 group cursor-default">
                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Building2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="font-bold text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
