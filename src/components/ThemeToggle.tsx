import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-card/90 hover:bg-muted/90 text-foreground p-3 rounded-xl transition-all duration-200 backdrop-blur-sm border border-border hover:border-blue-500/50 shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
