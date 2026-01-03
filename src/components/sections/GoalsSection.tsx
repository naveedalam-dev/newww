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
      desc: "Contributing to the local economy by creating sustainable employment opportunities."
    },
    {
      icon: MapPin,
      title: "National Reach",
      desc: "Expanding our operational footprint to cover all major industrial hubs: Riyadh, Jeddah, Dammam, and NEOM."
    },
    {
      icon: TrendingUp, // Reusing icon or importing new one
      title: "Sustainable Growth",
      desc: "Implementing eco-friendly construction practices to support the Kingdom's Green Initiative."
    },
  ];

  return (
    <section className="py-16 bg-gray-50 sm:py-24 lg:py-32 border-b border-gray-100" id="goals">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-gray-500 font-pj font-bold tracking-widest text-sm uppercase">Strategic Objectives</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl font-pj">
            Aligned with Vision 2030
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-inter">
            Our strategic goals are designed to support the Kingdom's ambitious infrastructure and development plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all duration-300 group h-full ${isRTL ? "text-right" : ""}`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-6 text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300 ${isRTL ? "mr-0 ml-auto" : ""}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-pj mb-3">{goal.title}</h3>
                <p className="text-gray-600 font-inter leading-relaxed">
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
