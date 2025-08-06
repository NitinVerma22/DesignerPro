import { useState, useEffect } from "react";
import { X, Palette } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";

export function ThemeSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { themes, theme, setTheme } = useTheme();

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        (e.target as Element).closest(".theme-sidebar") === null &&
        (e.target as Element).closest(".theme-toggle-button") === null
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Notch-style Toggle Button */}
      <button
        className="theme-toggle-button fixed top-32 right-[-20px] z-50 bg-bg-secondary border border-border rounded-l-full px-4 py-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme settings"
      >
        <Palette className="w-5 h-5 text-text" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Responsive Sidebar (same for all screen sizes) */}
      <div
        className={`theme-sidebar fixed top-0 right-0 h-full w-auto bg-bg-secondary border-border shadow-lg border z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-text">Theme Settings</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Theme Options */}
          <div className="flex flex-col gap-4 overflow-y-auto">
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => setTheme(t.value)}
                className={`rounded-lg transition-colors p-2 flex items-center justify-start gap-3 ${
                  theme === t.value
                    ? "bg-primary/20 border border-primary"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {/* Color Circle */}
                <div
                  className={`w-8 h-8 rounded-full ${t.color} border-2 border-white shadow`}
                />

                {/* Show only on desktop */}
                <div className=" md:block text-left">
                  <div className="font-medium text-text">{t.name}</div>
                  <div className="text-sm text-muted-text">{t.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}