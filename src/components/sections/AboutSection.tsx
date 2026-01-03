import { Archive, BarChart2, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn } from "@/components/ui/FadeIn";

export const AboutSection = () => {
  const { isRTL } = useLanguage();

  const features = [
    {
      icon: BarChart2,
      title: "Data-Driven Planning",
      desc: "Utilizing advanced analytics to optimize project timelines and resource allocation."
    },
    {
      icon: Briefcase,
      title: "Corporate Excellence",
      desc: "Adhering to the highest standards of corporate governance and operational transparency."
    },
    {
      icon: Archive,
      title: "Rich Portfolio",
      desc: "A diverse history of successful projects across residential, commercial, and industrial sectors."
    }
  ];

  return (
    <section className="py-16 bg-white sm:py-24 lg:py-32 border-b border-gray-100" id="about">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className={`${isRTL ? "lg:order-2" : ""}`}>
            <FadeIn direction="right">
              <span className="text-gray-500 font-pj font-bold tracking-widest text-sm uppercase">About Us</span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl font-pj">
                Pioneering Excellence in Construction
              </h2>
              <p className="mt-4 text-lg text-gray-600 font-inter">
                Al-Itqan Al-Maha is a premier general contracting firm dedicated to shaping the skyline of Saudi Arabia. With a commitment to quality and innovation, we turn visionary concepts into tangible reality.
              </p>

              <div className="mt-8 space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <FadeIn key={index} delay={0.1 * index} direction="up">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 text-gray-900 border border-gray-100">
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold text-gray-900 font-pj">{feature.title}</h3>
                          <p className="mt-2 text-base text-gray-600 font-inter">{feature.desc}</p>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <div className={`${isRTL ? "lg:order-1" : ""}`}>
            <FadeIn direction="left">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[600px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1590644365607-1c5a38fcac27?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern architecture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
