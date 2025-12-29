import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

interface LanguageToggleProps {
  variant?: "icon" | "full";
  className?: string;
}

export const LanguageToggle = ({ variant = "icon", className = "" }: LanguageToggleProps) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  if (variant === "full") {
    return (
      <Button
        variant="ghost"
        onClick={toggleLanguage}
        className={`w-full justify-start gap-3 ${className}`}
      >
        <Languages className="h-5 w-5" />
        <span>{language === "en" ? "العربية" : "English"}</span>
      </Button>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className={`p-2 rounded-lg transition-colors hover:bg-accent/20 flex items-center gap-2 ${className}`}
      aria-label="Toggle language"
    >
      <span className="text-sm font-medium">{language === "en" ? "AR" : "EN"}</span>
    </button>
  );
};
