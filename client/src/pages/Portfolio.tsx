import { useState } from "react";
import { GetPricingModal } from "../components/models/GetPricingModel";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { Typewriter } from "react-simple-typewriter";
import nqDesignsImg from "../images/nqdesigns.png";
import kartecaImg from "../images/karteca.png";
import cretoImg from "../images/creto.png";
import wellnessPointImg from "../images/wellness.png";
import CodeRequestPopup from "@/components/CodeRequestPopup";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
 const [showModal, setShowModal] = useState(false);
  const featuredProjects = [
    {
      id: 1,
      title: "NQ Designs ",
      description: "An Interior Design Agency website showcasing portfolio, services, and client testimonials.",
      image: nqDesignsImg,
      category: "Enterprise-Grade Website",
      technologies: ["Next.js", "Node.js", "Express", "Google Analytics", "Google Script","Tailwind CSS"],
      results: ["300% increase in efficiency", "50% reduction in processing time", "99.9% uptime"],
      liveUrl: "https://nqdesigns.com",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Karteca E-commerce",
      description: "Shopping and Earning platform with a seamless user experience and robust backend.",
      image: kartecaImg,
      category: "E-commerce",
      technologies: ["Next.js", "Stripe", "Shopify", "Tailwind CSS"],
      results: ["200% increase in sales", "40% better conversion rate", "5-star customer rating"],
      liveUrl: "https://paykart-frontend.vercel.app/",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Creto E-commerce",
      description: "Modern E-commerce platform with a focus on premium bicycles, offering a seamless shopping experience.",
      image: cretoImg,
      category: "E-commerce",
      technologies: ["React.js", "Node.js","Typescript", "MongoDB","Socket.IO", "Tailwind CSS"],
      results: ["110% increase in sales", "40% better conversion rate", "4-star customer rating"],
      liveUrl: "https://creto-frontend-black.vercel.app/",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Wellness Point Health Checkup",
      description: "Comprehensive health checkup platform with user-friendly interface and calendar-based appointments.",
      image: wellnessPointImg,
      category: "Health & Wellness",
      technologies: ["Next.js", "Stripe", "Shopify", "Tailwind CSS"],
      results: ["100% increase in sales", "70% better conversion rate", "5-star customer rating"],
      liveUrl: "https://thewellnesspoint.kesug.com/",
      githubUrl: "#"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-bg py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Porojects</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
             <Typewriter
                  words={['Explore our latest work and see how we have helped businesses transform their digital presence  with innovative solutions and exceptional design.']}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={20}
                  deleteSpeed={10}
                  delaySpeed={300}
                />
            
          </p>
          <Button 
                onClick={() => setShowModal(true)}
          className="gradient-bg text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section id='allprojects'className="bg-bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-text">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Take a closer look at some of our most impactful projects and the results we delivered.
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-bg rounded-xl overflow-hidden shadow-lg border border-border card-hover">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-contain bg-white"
                    />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-3xl font-bold text-text mb-4">{project.title}</h3>
                      <p className="text-text-secondary text-lg">{project.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-text mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-bg-secondary border border-border rounded-full text-sm text-text-secondary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-text mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-text-secondary">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={-1}
                        style={{ textDecoration: "none" }}
                      >
                        <Button className="gradient-bg text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </Button>
                      </a>
                      <CodeRequestPopup 
                        trigger={
                          <Button variant="outline" className="border-border text-text hover:bg-primary hover:text-white">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects
      <PortfolioSection /> */}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Have a project in mind? We'd love to hear about it and discuss how we can help bring your vision to life.
          </p>
          <Button variant="secondary"
              onClick={() => setShowModal(true)}
          className="bg-white text-primary hover:bg-white/90">
            Start Your Project
          </Button>
                    {showModal && (
                  <GetPricingModal
                    serviceName="website"
                    heading="Start Your Project"
                    onClose={() => setShowModal(false)}
                  />
                )}
                  
        </div>
      </section>
    </div>
  );
}
