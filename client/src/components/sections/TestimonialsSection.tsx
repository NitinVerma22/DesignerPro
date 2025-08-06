import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Nida Qadir',
    position: 'Managing Director',
    company: 'NQ Designs',
    content: 'DesignPro transformed our online presence completely. The new website increased our conversions by 300% and perfectly captures our brand identity. Their attention to detail and creative approach exceeded our expectations.',
    avatar: '/src/images/testimonials/nida.png',
    rating: 5
  },
  {
    id: '2',
    name: 'Anand Verma',
    position: 'Managing Partner',
    company: 'Anand & Co.',
    content: 'Working with DesignPro was a game-changer for our startup. They delivered a stunning website that perfectly represents our brand and helped us establish credibility in the market.',
    avatar: '/src/images/testimonials/anand.png',
    rating: 5
  },                         
  {
    id: '3',
    name: 'Dr. Ashmit Patel',
    position: 'Owner',
    company: 'Gopal Hospital',
    content: 'The team at DesignPro is incredibly talented and professional. They took our vision and turned it into reality with a website that not only looks amazing but also performs exceptionally well.',
    avatar: '/src/images/testimonials/ashmit.png',
    rating: 5
  },
  {
    id: '4',
    name: 'Sanjay Yadav',
    position: 'Founder',
    company: 'The Wellness Point',
    content: 'DesignPro exceeded our expectations with their design and development services. Our new website is not only beautiful but also user-friendly and optimized for conversions. Highly recommend!',
    avatar: '/src/images/testimonials/sanjay.png',
    rating: 5
  },
  {
    id: '5',
    name: 'Arvind ',
    position: 'Marketing Head',
    company: 'Dairy Products Co.',
    content: 'Professional, creative, and delivered on time. Our new brand identity has received countless compliments from customers and partners. DesignPro truly understands design excellence.',
    avatar: '/src/images/testimonials/arvind.png',      
    rating: 5
  },
  {
    id: '6',
    name: 'Jitin Verma',
    position: 'Student',
    company: 'MBA',
content:'DesignPro created my portfolio website . It’s sleek, modern, and showcases my work perfectly. The team was responsive and made the entire process smooth.',
    avatar: '/src/images/testimonials/jitin.png',
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
