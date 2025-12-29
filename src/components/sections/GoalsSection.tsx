import { TrendingUp, GraduationCap, Handshake, Heart, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const GoalsSection = () => {
  const { isRTL } = useLanguage();

  const goals = [
    {
      icon: TrendingUp,
      title: "Market Leadership",
      desc: "To be the premier partner for mega-projects in KSA, setting benchmarks for quality and reliability."
    },
    {
      icon: GraduationCap,
      title: "Workforce Development",
      desc: "Investing in the continuous training and certification of our workforce to meet international standards."
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      desc: "Forging long-term alliances with global construction firms operating in the Kingdom."
    },
    {
      icon: Heart,
      title: "Community Impact",
      desc: "Contributing to the local economy by creating sustainable employment opportunities for skilled labor."
    },
    {
      icon: MapPin,
      title: "National Reach",
      desc: "Expanding our operational footprint to cover all major industrial hubs: Riyadh, Jeddah, Dammam, and NEOM."
    },
  ];

  return (
    <section id="goals" className="section-padding bg-background border-t border-border relative overflow-hidden">
      <div className="container-section relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Strategic Objectives
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Aligned with <span className="text-primary">Vision 2030</span>
          </h2>
          <p className="text-body text-lg leading-relaxed">
            Our strategic goals are designed to support the Kingdom's ambitious infrastructure and development plans through superior workforce solutions.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-secondary/20 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 ${isRTL ? "text-right" : ""} ${index === goals.length - 1 && goals.length % 3 !== 0
                    ? "md:col-span-2 lg:col-span-1 lg:col-start-2"
                    : ""
                  }`}
              >
                <div className={`w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm ${isRTL ? "mr-0 ml-auto" : ""}`}>
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{goal.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {goal.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
