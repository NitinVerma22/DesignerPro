import { Link } from "wouter";
import { Zap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Zap className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-gradient">DesignPro</span>
            </div>
            <p className="text-text-secondary mb-4">
              Creating exceptional digital experiences that drive business growth and user engagement.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-text">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services"><span className="text-text-secondary hover:text-primary transition-colors">Web Design</span></Link></li>
              <li><Link href="/services"><span className="text-text-secondary hover:text-primary transition-colors">Development</span></Link></li>
              <li><Link href="/services"><span className="text-text-secondary hover:text-primary transition-colors">Mobile Apps</span></Link></li>
              <li><Link href="/services"><span className="text-text-secondary hover:text-primary transition-colors">Digital Marketing</span></Link></li>
              <li><Link href="/services"><span className="text-text-secondary hover:text-primary transition-colors">SEO Optimization</span></Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-text">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about"><span className="text-text-secondary hover:text-primary transition-colors">About Us</span></Link></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Careers</a></li>
              <li><Link href="/portfolio"><span className="text-text-secondary hover:text-primary transition-colors">Case Studies</span></Link></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-text">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Help Center</a></li>
              <li><Link href="/contact"><span className="text-text-secondary hover:text-primary transition-colors">Contact Us</span></Link></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm mb-4 md:mb-0">
              © {currentYear} DesignPro. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-text-secondary">Made with ❤️ for modern businesses</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
