import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactSection = () => {
  const { isRTL } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+966 50 123 4567", "+966 11 234 5678"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@alitqan-almaha.com", "projects@alitqan-almaha.com"],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["King Fahd Road, Olaya District", "Riyadh 12211, Saudi Arabia"],
    },
  ];

  return (
    <section className="py-16 bg-white sm:py-24 lg:py-32" id="contact">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <FadeIn>
            <span className="text-gray-500 font-pj font-bold tracking-widest text-sm uppercase">Get in Touch</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl font-pj">
              Partner with Al-Itqan Al-Maha
            </h2>
            <p className="mt-4 text-lg text-gray-600 font-inter">
              Ready to elevate your project? Contact our expert team today for a consultation or quote.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <FadeIn delay={0.1} direction="right">
              <h3 className="text-2xl font-bold text-gray-900 font-pj mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-white flex items-center justify-center text-gray-900 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 font-pj mb-1">{item.title}</h4>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 font-inter text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <FadeIn delay={0.2} direction="left">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-bold text-gray-900 font-pj mb-2">First Name</label>
                    <input type="text" id="first-name" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-bold text-gray-900 font-pj mb-2">Last Name</label>
                    <input type="text" id="last-name" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 font-pj mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 font-pj mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="button" className="w-full py-4 px-8 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors font-pj flex items-center justify-center">
                  <Send className={`w-5 h-5 mr-2 ${isRTL ? "ml-2 mr-0" : ""}`} />
                  Send Message
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
