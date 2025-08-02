import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'TechStart Inc.',
    content: 'DesignPro transformed our online presence completely. The new website increased our conversions by 300% and perfectly captures our brand identity.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'Founder',
    company: 'AppVenture',
    content: 'The mobile app they developed exceeded all our expectations. User engagement increased by 250% and the interface is incredibly intuitive.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    position: 'Marketing Director',
    company: 'GrowthCo',
    content: 'Professional, creative, and delivered on time. Our new brand identity has received countless compliments from customers and partners.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
    rating: 5
  },
  {
    id: '4',
    name: 'David Thompson',
    position: 'Store Owner',
    company: 'RetailPlus',
    content: 'The e-commerce platform they built has revolutionized our business. Sales have tripled and customer satisfaction is at an all-time high.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
    rating: 5
  },
  {
    id: '5',
    name: 'Lisa Wang',
    position: 'VP Marketing',
    company: 'InnovateHub',
    content: 'Outstanding work on our corporate website. The design is elegant, functional, and perfectly represents our company values.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
    rating: 5
  },
  {
    id: '6',
    name: 'James Miller',
    position: 'Business Owner',
    company: 'LocalBiz Pro',
    content: 'Their SEO strategy boosted our search rankings dramatically. We now appear on the first page for all our target keywords.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="bg-bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-text">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-bg rounded-xl p-8 shadow-lg border border-border card-hover">
              <div className="flex items-center mb-6">
                <div className="flex text-accent">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-text-secondary mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold text-text">{testimonial.name}</h4>
                  <p className="text-sm text-text-secondary">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
