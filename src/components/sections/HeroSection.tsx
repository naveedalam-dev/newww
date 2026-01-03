import { FadeIn } from "@/components/ui/FadeIn";

export const HeroSection = () => {
  return (
    <section className="relative">
      <div className="relative bg-gray-50 pb-16 lg:pb-24 border-b border-gray-100">
        <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
          <img className="w-auto h-full" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="" />
        </div>

        <section className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl pt-16 lg:pt-24">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
            <div className="text-center lg:text-left">
              <FadeIn delay={0.1} direction="up">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl font-pj">
                  Building the Future of Visionary Construction
                </h1>
              </FadeIn>
              <FadeIn delay={0.2} direction="up">
                <p className="mt-4 text-lg text-gray-600 font-inter sm:mt-8">
                  Al-Itqan Al-Maha delivers world-class general contracting solutions across Saudi Arabia. From skilled manpower to mega-project execution, we are your trusted partner in growth.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <form action="#" method="POST" className="mt-8 sm:mt-10">
                  <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter email address"
                      className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                      required
                    />
                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                      <a
                        href="#contact"
                        className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
                      >
                        Get a Quote
                      </a>
                    </div>
                  </div>
                </form>
              </FadeIn>
            </div>

            <div className="relative">
              <FadeIn delay={0.4} direction="left">
                <img className="w-full mx-auto rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" alt="Construction Hero" />
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
