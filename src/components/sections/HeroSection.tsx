import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-workforce.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  const highlights = [
    t("hero.highlight1"),
    t("hero.highlight2"),
    t("hero.highlight3"),
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Background with Subtle Modern Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional construction site"
          className="w-full h-full object-cover opacity-20 dark:opacity-10 grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      <div className="container-section relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8 animate-fade-up max-w-2xl">
            {/* Professional Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm ${isRTL ? "flex-row-reverse" : ""}`}>
              <Building2 className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground tracking-wide uppercase">{t("hero.badge")}</span>
            </div>

            {/* Heading */}
            <h1 className={`heading-xl text-foreground ${isRTL ? "text-right" : ""}`}>
              {t("hero.title1")}{" "}
              <span className="text-primary block mt-2">
                {t("hero.title2")}
              </span>
            </h1>

            {/* Description */}
            <p className={`text-body text-xl max-w-lg ${isRTL ? "text-right ml-auto" : ""}`}>
              {t("hero.description")}
            </p>

            {/* Review/Highlights - Clean List */}
            <div className={`flex flex-wrap gap-6 pt-4 text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
              {highlights.map((item, index) => (
                <div key={index} className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className={`glass-button bg-primary text-primary-foreground hover:bg-primary/90 hover:text-white border-transparent h-12 px-8 text-base shadow-sm ${isRTL ? "flex-row-reverse" : ""}`}
              >
                {t("hero.cta1")}
                <ArrowRight className={`w-5 h-5 ml-2 ${isRTL ? "rotate-180 mr-2 ml-0" : ""}`} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#services")}
                className="h-12 px-8 text-base border-border bg-background/50 hover:bg-secondary text-foreground"
              >
                {t("hero.cta2")}
              </Button>
            </div>
          </div>

          {/* Right Side Visual - Abstract/Minimal */}
          <div className="hidden lg:block relative h-[600px] animate-fade-in animation-delay-200">
            {/* Main Image Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md aspect-[4/5] bg-secondary rounded-2xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700 ease-out">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop"
                alt="Modern Construction"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <div className="text-white font-bold text-2xl">Excellence in every detail</div>
                <div className="text-white/80 mt-2">Trusted by 500+ clients across KSA</div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="glass-card absolute top-20 -right-4 max-w-[200px] animate-float">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Compliance Rate</div>
            </div>

            {/* Floating Badge */}
            <div className="glass-card absolute bottom-32 -left-8 animate-float animation-delay-500 flex items-center gap-3 pr-6">
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                A
              </div>
              <div>
                <div className="font-bold text-foreground">Top Rated</div>
                <div className="text-xs text-muted-foreground">Construction Firm</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
