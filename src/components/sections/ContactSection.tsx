import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, Clock, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactSection = () => {
  const { toast } = useToast();
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    workers: "",
    workerType: "",
    message: "",
  });

  const workerTypes = [
    { value: "general", label: "General Labor" },
    { value: "skilled", label: "Skilled Workers (Electricians, Carpenters, etc.)" },
    { value: "industrial", label: "Industrial & Manufacturing" },
    { value: "events", label: "Event Staff & Support" },
    { value: "temporary", label: "Temporary & Contract Staff" },
    { value: "housekeeping", label: "Housekeeping & Cleaning" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "Thank you for contacting Al-Itqan Al-Maha. Our team will reach out shortly with a customized quote.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", workers: "", workerType: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 skew-x-12 translate-x-32 -z-10"></div>

      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Partner with <span className="text-primary">Al-Itqan Al-Maha</span>
          </h2>
          <p className="text-body text-lg leading-relaxed">
            Ready to optimize your workforce? Contact us today for a tailored consultation and see how we can support your projects across the Kingdom.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${isRTL ? "lg:grid-flow-dense" : ""}`}>
          {/* Contact Info */}
          <div className={`space-y-8 ${isRTL ? "lg:col-start-2 text-right" : ""}`}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Reach out to our dedicated team via phone, email, or visit our headquarters in Riyadh.
              </p>
            </div>

            <div className="space-y-6">
              <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    <a href="tel:+966501234567">+966 50 123 4567</a>
                  </p>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    <a href="tel:+966112345678">+966 11 234 5678</a>
                  </p>
                </div>
              </div>

              <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    <a href="mailto:info@alitqanalmaha.sa">info@alitqanalmaha.sa</a>
                  </p>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    <a href="mailto:sales@alitqanalmaha.sa">sales@alitqanalmaha.sa</a>
                  </p>
                </div>
              </div>

              <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Headquarters</h4>
                  <p className="text-muted-foreground">
                    Olaya Street, Al Olaya District<br />
                    Riyadh 12211, Kingdom of Saudi Arabia
                  </p>
                </div>
              </div>

              <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-card rounded-2xl p-8 border border-border shadow-lg ${isRTL ? "lg:col-start-1 text-right" : ""}`}>
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-accent" />
              Request Workforce Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="+966 5X XXX XXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="workerType" className="block text-sm font-medium text-foreground mb-2">
                    Service Type *
                  </label>
                  <select
                    id="workerType"
                    name="workerType"
                    value={formData.workerType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                  >
                    <option value="">Select Service...</option>
                    {workerTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="workers" className="block text-sm font-medium text-foreground mb-2">
                    Number of Workers
                  </label>
                  <input
                    type="number"
                    id="workers"
                    name="workers"
                    value={formData.workers}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="e.g. 50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                  placeholder="Describe your project, duration, and specific requirements..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className={`w-5 h-5 mr-2 ${isRTL ? "ml-2 mr-0" : ""}`} />
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
