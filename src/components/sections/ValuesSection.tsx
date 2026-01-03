import { Shield, Target, Users, Zap } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export const ValuesSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Uncompromising adherence to international safety standards.",
    },
    {
      icon: Target,
      title: "Quality Excellence",
      description: "Delivering superior results through rigorous quality control.",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Streamlined processes ensuring timely project delivery.",
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Building lasting partnerships through transparent practices.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 sm:py-24 lg:py-32 border-b border-gray-100" id="values">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          <div className="order-2 lg:order-1">
            <FadeIn direction="right">
              <span className="text-gray-500 font-pj font-bold tracking-widest text-sm uppercase">Our Values</span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl font-pj">
                Why Choose Al-Itqan Al-Maha?
              </h2>
              <p className="mt-4 text-lg text-gray-600 font-inter">
                We build relationships founded on trust, transparency, and superior performance.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {values.map((value, index) => (
                  <FadeIn key={index} delay={index * 0.1} direction="up">
                    <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all duration-300 bg-white">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-900">
                        <value.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 font-pj">{value.title}</h3>
                        <p className="text-gray-600 text-sm mt-1 font-inter">{value.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2">
            <FadeIn direction="left">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1541976544-2f6308554f54?q=80&w=1000&auto=format&fit=crop"
                  alt="Construction planning"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
