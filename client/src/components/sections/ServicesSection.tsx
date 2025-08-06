import { Palette, Code, Megaphone, Smartphone, Search, TrendingUp, ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { useState } from "react";
import { GetPricingModal } from "../models/GetPricingModel"; 
import { Typewriter } from "react-simple-typewriter";
const services: Service[] = [
  {
    id: '1',
    title: 'Web Design',
    description: 'Custom, responsive websites that capture your brand essence and engage your audience effectively.',
    icon: 'palette',
    link: '#'
  },
  {
    id: '2',
    title: 'Development',
    description: 'Full-stack development solutions using modern technologies for scalable, high-performance applications.',
    icon: 'code',
    link: '#'
  },
  {
    id: '3',
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that drive traffic, generate leads, and boost your online presence.',
    icon: 'megaphone',
    link: '#'
  },
  {
    id: '4',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences.',
    icon: 'smartphone',
    link: '#'
  },
  {
    id: '5',
    title: 'SEO Optimization',
    description: 'Comprehensive SEO strategies to improve your search rankings and drive organic traffic.',
    icon: 'search',
    link: '#'
  },
  {
    id: '6',
    title: 'Analytics',
    description: 'Data-driven insights and analytics to track performance and optimize your digital strategy.',
    icon: 'trending-up',
    link: '#'
  }
];

const iconMap = {
  palette: Palette,
  code: Code,
  megaphone: Megaphone,
  smartphone: Smartphone,
  search: Search,
  'trending-up': TrendingUp,
};

export function ServicesSection() {
   const [showModal, setShowModal] = useState(false);
  return (
    <section className="bg-bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-text">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
           
               <Typewriter
                  words={[' We offer comprehensive design and development services to help your business thrive in the digital landscape.']}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={20}
                  deleteSpeed={10}
                  delaySpeed={300}
                />
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div key={service.id} className="bg-bg rounded-xl p-8 shadow-lg border border-border card-hover">
                <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-text">{service.title}</h3>
                <p className="text-text-secondary mb-6">
                  {service.description}
                </p>
              

                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium transition-colors duration-200 group"
                >
                  Learn more
                  <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2.2}
                  />
                </button>
               {showModal && (
        <GetPricingModal
          serviceName="website"
          heading="Learn More"
          onClose={() => setShowModal(false)}
        />
      )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
