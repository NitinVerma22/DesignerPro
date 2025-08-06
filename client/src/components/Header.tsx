import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSidebar } from "./ThemeSidebar";
import { GetPricingModal } from "./models/GetPricingModel";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <>
      {/* <ThemeSidebar /> */}

      {/* Header */}
      <header className="bg-bg border-b border-border sticky top-0 z-40 backdrop-blur-sm  shadow-md">
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

            {/* CTA Button */}
            <Button
              onClick={() => setShowModal(true)}
              className=" md:flex gradient-bg text-white hover:shadow-lg transition-all"
            >
              Get Quote <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>


          {showModal && (
            <GetPricingModal
              serviceName="website"
              heading="Get Website Development Pricing"
              onClose={() => setShowModal(false)}
            />
          )}
        </div>
        
          {/* Mobile Nav Bar (shows below header, only on mobile, always visible) */}
          <nav className="fixed top-50 left-0 right-0 z-50 bg-bg border-t border-border flex md:hidden justify-around py-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`flex flex-col items-center text-xs ${
                    isActive(item.href) ? 'text-primary font-medium' : 'text-text'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
      </header>
      <ThemeSidebar />
    </>
  );
}
