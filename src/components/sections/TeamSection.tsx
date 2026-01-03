import { UserSearch, Users, Briefcase, HeadphonesIcon, CheckCircle2 } from "lucide-react";
import teamImage from "@/assets/team-recruitment.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn } from "@/components/ui/FadeIn";

export const TeamSection = () => {
  const { isRTL } = useLanguage();

  const teamHighlights = [
    { icon: UserSearch, title: "Specialized Recruitment", desc: "Expert vetting process for finding the right talent." },
    { icon: Users, title: "HR Management", desc: "Comprehensive payroll, compliance, and personnel support." },
    { icon: Briefcase, title: "Operations Quality", desc: "Dedicated onsite supervisors ensuring productivity." },
    { icon: HeadphonesIcon, title: "24/7 Support", desc: "Always available to handle workforce needs." },
  ];

  const highlights = [
    "Expert Project Managers",
    "Skilled Field Technicians",
    "Certified Professionals",
    "International Standards Compliance",
  ];

  return (
    <section className="py-16 bg-white sm:py-24 lg:py-32 border-b border-gray-100" id="team">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}>
          {/* Image */}
          <div className={`relative ${isRTL ? "lg:order-2" : "order-2 lg:order-1"}`}>
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-auto lg:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Content */}
          <div className={`${isRTL ? "lg:order-1 lg:text-right" : "order-1 lg:order-2"}`}>
            <FadeIn direction="left">
              <span className={`text-gray-500 font-pj font-bold tracking-widest text-sm uppercase`}>
                Our Team
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl font-pj">
                A Team Dedicated to Your Success
              </h2>
              <p className="mt-4 text-lg text-gray-600 font-inter">
                Our workforce is our greatest asset. From project managers to skilled field technicians, every member of our team is vetted, trained, and certified to meet international standards.
              </p>

              <div className="mt-8 space-y-4">
                {highlights.map((item, index) => (
                  <FadeIn key={index} delay={index * 0.1} direction="up">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-lg font-bold text-gray-900 font-pj">{item}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
