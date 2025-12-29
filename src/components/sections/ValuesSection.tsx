import { Shield, Target, Users, Zap, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ValuesSection = () => {
  const { isRTL } = useLanguage();

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description: "Uncompromising adherence to international safety standards and KSA regulations to protect our workforce and your projects.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Quality Excellence",
      description: "Delivering superior results through rigorous quality control and attention to detail in every aspect of our work.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Operational Efficiency",
      description: "Streamlined processes and optimized resource allocation to ensure timely project delivery and cost-effectiveness.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Integrity & Trust",
      description: "Building lasting partnerships through transparent business practices and reliable operational performance.",
    },
  ];

  return (
    <section className="section-padding bg-background" id="values">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            <div>
              <span className="text-accent font-semibold tracking-wider text-xs uppercase bg-accent/10 px-3 py-1 rounded-full">Our Core Values</span>
              <h2 className="heading-lg mt-4 text-foreground">Why Choose Al-Itqan Al-Maha?</h2>
            </div>

            <p className="text-body max-w-xl">
              We don't just build structures; we build relationships founded on trust, transparency, and superior performance. Our commitment to quality is unwavering.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl border border-secondary hover:border-accent/30 hover:bg-secondary/30 transition-all duration-300">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 leading-snug">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-200 order-1 lg:order-2 h-max">
            {/* Professional Composition */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 translate-y-8">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                  <img
                    src="https://images.unsplash.com/photo-1541976544-2f6308554f54?q=80&w=1000&auto=format&fit=crop"
                    alt="Construction planning"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-primary text-primary-foreground rounded-2xl shadow-lg flex flex-col justify-center">
                  <span className="text-4xl font-bold mb-1">15+</span>
                  <span className="text-sm opacity-80">Years of Excellence in KSA</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-secondary rounded-2xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-bold text-foreground">ISO Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-bold text-foreground">Safety First</span>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
                    alt="Architectural details"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Subtle Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-secondary/50 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
