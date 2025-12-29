import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t border-border">
      <div className="container-section">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl shadow-sm">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-foreground">
                  Al-Itqan Al-Maha
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  General Contracting
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premier general contracting and workforce solutions provider in Saudi Arabia. We deliver excellence in construction, staffing, and industrial support.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all shadow-sm border border-border">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Projects", href: "#projects" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-accent transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "General Contracting",
                "Skilled Workforce",
                "Industrial Supply",
                "Project Management",
                "Facility Maintenance",
              ].map((service) => (
                <li key={service} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Olaya Street, Riyadh 12211,<br />
                  Kingdom of Saudi Arabia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+966501234567" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +966 50 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@alitqanalmaha.sa" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@alitqanalmaha.sa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Al-Itqan Al-Maha. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span>CR: 1010123456</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
