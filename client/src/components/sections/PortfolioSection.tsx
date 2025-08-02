import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { PortfolioItem } from "@/types";

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Modern shopping experience with seamless checkout',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    category: 'web',
    tags: ['React', 'E-commerce', 'UI/UX']
  },
  {
    id: '2',
    title: 'Fitness Mobile App',
    description: 'Health tracking with intuitive user interface',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    category: 'mobile',
    tags: ['React Native', 'Health', 'Mobile']
  },
  {
    id: '3',
    title: 'Corporate Website',
    description: 'Professional brand presence with modern design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    category: 'web',
    tags: ['Corporate', 'Web Design', 'Branding']
  },
  {
    id: '4',
    title: 'Restaurant App',
    description: 'Food ordering with real-time tracking',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    category: 'mobile',
    tags: ['Food', 'Mobile App', 'Ordering']
  },
  {
    id: '5',
    title: 'Creative Portfolio',
    description: 'Artistic showcase with immersive galleries',
    image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    category: 'branding',
    tags: ['Portfolio', 'Creative', 'Gallery']
  },
  {
    id: '6',
    title: 'SaaS Dashboard',
    description: 'Data visualization with advanced analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    category: 'web',
    tags: ['SaaS', 'Dashboard', 'Analytics']
  }
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
            Our <span className="text-gradient">Portfolio</span>
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
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
