import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-slate-800/90 hover:bg-slate-700/90 text-white p-3 rounded-xl transition-all duration-200 backdrop-blur-sm border border-slate-700/60 hover:border-blue-500/50 shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
