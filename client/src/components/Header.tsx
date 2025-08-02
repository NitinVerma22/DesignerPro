import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { themes, theme, setTheme } = useTheme();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <>
      {/* Theme Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-bg-secondary border-border rounded-lg p-2 shadow-lg border">
          <div className="flex space-x-2">
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => setTheme(t.value)}
                className={`w-8 h-8 rounded-full ${t.color} border-2 shadow-md hover:scale-110 transition-transform ${
                  theme === t.value ? 'border-white ring-2 ring-primary' : 'border-white'
                }`}
                title={`${t.name} - ${t.description}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-bg border-b border-border sticky top-0 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <Zap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-gradient">DesignPro</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className={`text-text hover:text-primary transition-colors ${
                    isActive(item.href) ? 'text-primary font-medium' : ''
                  }`}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <Button className="gradient-bg text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </Button>
              <button 
                className="md:hidden text-text"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span 
                      className={`text-text hover:text-primary transition-colors ${
                        isActive(item.href) ? 'text-primary font-medium' : ''
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
