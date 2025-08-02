import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Services() {
  const serviceDetails = [
    {
      title: "Web Design & Development",
      description: "Create stunning, responsive websites that convert visitors into customers.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First", "Modern UI/UX"],
      price: "Starting at $2,500"
    },
    {
      title: "Mobile App Development",
      description: "Build native and cross-platform apps that engage users and drive business growth.",
      features: ["iOS & Android", "Cross-platform", "Native Performance", "App Store Optimization", "Push Notifications"],
      price: "Starting at $5,000"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies to boost your online presence and ROI.",
      features: ["Social Media Marketing", "Content Strategy", "PPC Campaigns", "Email Marketing", "Brand Strategy"],
      price: "Starting at $1,200/month"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-bg py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            We offer comprehensive digital solutions to help your business grow and succeed in the modern marketplace. 
            From design to development, marketing to analytics, we've got you covered.
          </p>
          <Button className="gradient-bg text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesSection />

      {/* Detailed Services */}
      <section className="bg-bg py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-text">
              Service <span class="text-gradient">Packages</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Choose from our carefully crafted service packages designed to meet your specific business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {serviceDetails.map((service, index) => (
              <div key={index} className="bg-bg-secondary rounded-xl p-8 border border-border card-hover">
                <h3 className="text-2xl font-bold mb-4 text-text">{service.title}</h3>
                <p className="text-text-secondary mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-text mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-text-secondary">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>

                <Button className="w-full gradient-bg text-white hover:shadow-lg transition-all">
                  Get Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Let's discuss your project and see how we can help you achieve your goals. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Free Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
