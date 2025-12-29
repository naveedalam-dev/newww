import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  variant?: "icon" | "full";
  className?: string;
}

export const ThemeToggle = ({ variant = "icon", className = "" }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (variant === "full") {
    return (
      <Button
        variant="ghost"
        onClick={toggleTheme}
        className={`w-full justify-start gap-3 ${className}`}
      >
        {theme === "dark" ? (
          <>
            <Sun className="h-5 w-5" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <Moon className="h-5 w-5" />
            <span>Dark Mode</span>
          </>
        )}
      </Button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-colors hover:bg-accent/20 ${className}`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};
