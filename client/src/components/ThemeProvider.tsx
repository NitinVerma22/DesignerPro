import { createContext, useContext, useEffect, useState } from "react";
import type { Theme } from "@/types";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: { name: string; value: Theme; color: string; description: string }[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('blue-white');

  const themes = [
    { name: 'Blue/White', value: 'blue-white' as Theme, color: 'bg-blue-500', description: 'Clean and professional' },
    { name: 'Purple/Dark', value: 'purple-dark' as Theme, color: 'bg-purple-600', description: 'Modern and bold' },
    { name: 'Orange/Cream', value: 'orange-cream' as Theme, color: 'bg-orange-500', description: 'Warm and inviting' },
    { name: 'Teal/Gray', value: 'teal-gray' as Theme, color: 'bg-teal-500', description: 'Fresh and balanced' },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') as Theme;
    if (savedTheme && themes.some(t => t.value === savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const body = document.body;
    
    // Remove all theme classes
    body.classList.remove('theme-purple-dark', 'theme-orange-cream', 'theme-teal-gray');
    
    // Add the selected theme class
    if (theme !== 'blue-white') {
      body.classList.add(`theme-${theme}`);
    }
    
    // Save theme preference
    localStorage.setItem('selectedTheme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
