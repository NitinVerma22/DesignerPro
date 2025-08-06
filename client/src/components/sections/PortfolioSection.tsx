import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { PortfolioItem } from "@/types";
import { Link } from "wouter";
import nqDesignsImg from "../../images/nqdesigns.png";
import cretoImg from "../../images/creto.png";
import wellnessPointImg from "../../images/wellness.png";
const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: "NQ Designs ",
    description: "An Interior Design Agency website showcasing portfolio, services, and client testimonials.",
    image: nqDesignsImg,
    category: "Enterprise-Grade Website",
    tags: ["interior", "agency", "portfolio", "web"]
  },
  {
    id: '2',
    title: "Creto E-commerce",
    description: "Modern E-commerce platform with a focus on premium bicycles, offering a seamless shopping experience.",
    image: cretoImg,
    category: "E-commerce",
    tags: ["ecommerce", "bicycles", "shopping", "web"]
  },
  {
    id: '3',
    title: "Wellness Point Health Checkup",
    description: "Comprehensive health checkup platform with user-friendly interface and calendar-based appointments.",
    image: wellnessPointImg,
    category: "Health & Wellness",
    tags: ["health", "checkup", "appointments", "web"]
  },

];

const categories = [
  { name: 'All Projects', value: 'all' },
  { name: 'Web Design', value: 'web' },
  { name: 'Mobile Apps', value: 'mobile' },
  { name: 'Branding', value: 'branding' },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="bg-bg py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-text">
            Our <span className="text-gradient">Porojects</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              variant={activeCategory === category.value ? "default" : "outline"}
              className={activeCategory === category.value 
                ? "gradient-bg text-white" 
                : "border-border text-text hover:bg-primary hover:text-white"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-bg-secondary border border-border card-hover">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="gradient-bg text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <Link to="/portfolio#allprojects" className="block w-full h-full">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
