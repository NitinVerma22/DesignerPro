import { useState } from "react";
import { GetPricingModal } from "../models/GetPricingModel";
import { ArrowRight, Play, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
export function Hero() {
   const [showModal, setShowModal] = useState(false);
  return (
    <section className="relative bg-bg py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Creative Design</span><br />
              <span className="text-text">Solutions for Your</span><br />
              <span className="text-text">Business Growth</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              We craft stunning digital experiences that drive results. From web design to brand identity, 
              our team delivers excellence that exceeds expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => setShowModal(true)}
              className="gradient-bg text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Rocket className="w-4 h-4 mr-2" />
                Start Your Project
                  </Button>
                   <Link to="/portfolio#allprojects" className="block w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  className=" w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                 
                
                  <Play className="w-4 h-4 mr-2" />
                  View All Projects
              
                </Button>
</Link>
              {showModal && (
        <GetPricingModal
          serviceName="website"
          heading="Start Your Project"
          onClose={() => setShowModal(false)}
        />
      )}
            </div>
          </div>
          
          {/* Hero Illustration */}
          <div className="relative animate-float">
            <div className="bg-bg-secondary rounded-2xl p-8 shadow-2xl border border-border">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="h-32 gradient-bg rounded-lg opacity-80"></div>
                <div className="h-32 bg-accent/20 rounded-lg"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-border rounded-full"></div>
                <div className="h-4 bg-border rounded-full w-3/4"></div>
                <div className="h-4 bg-border rounded-full w-1/2"></div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 gradient-bg rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
