import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#values", label: t("nav.values") },
    { href: "#team", label: t("nav.team") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
        ? "bg-background/80 backdrop-blur-md border-border/50 py-3"
        : "bg-transparent border-transparent py-5"
        }`}
    >
      <div className="container-section">
        <nav className="flex items-center justify-between">
          {/* Logo - Clean & Text Based */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl shadow-sm">
              A
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none ${isScrolled ? 'text-foreground' : 'text-foreground dark:text-foreground'}`}>
                Al-Itqan Al-Maha
              </span>
              <span className={`text-xs uppercase tracking-wider ${isScrolled ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
                General Contracting
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${isScrolled
                  ? "text-muted-foreground"
                  : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle className="hover:bg-secondary rounded-full w-9 h-9" />
            <LanguageToggle className="hover:bg-secondary rounded-full w-9 h-9" />

            <div className="h-6 w-px bg-border mx-2"></div>

            <a
              href="tel:+966501234567"
              className={`text-sm font-medium flex items-center gap-2 mr-2 hover:text-primary transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <Phone className="w-4 h-4" />
              +966 50 123 4567
            </a>

            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 shadow-sm"
              size="sm"
            >
              {t("nav.getQuote")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle className="w-9 h-9" />
            <LanguageToggle className="w-9 h-9" />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-secondary rounded-md"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-lg animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-3 rounded-lg text-left text-sm font-medium hover:bg-secondary transition-colors ${isRTL ? "text-right" : "text-left"}`}
                >
                  {link.label}
                </button>
              ))}
              <div className="h-px bg-border my-2"></div>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {t("nav.getQuote")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
