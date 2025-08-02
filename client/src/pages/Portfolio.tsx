import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortfolioSection } from "@/components/sections/PortfolioSection";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = [
    {
      id: 1,
      title: "TechCorp Enterprise Platform",
      description: "A comprehensive enterprise solution with advanced analytics and user management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      category: "Enterprise",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      results: ["300% increase in efficiency", "50% reduction in processing time", "99.9% uptime"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "GreenLeaf E-commerce",
      description: "Sustainable products marketplace with integrated payment and shipping solutions.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      category: "E-commerce",
      technologies: ["Next.js", "Stripe", "Shopify", "Tailwind CSS"],
      results: ["200% increase in sales", "40% better conversion rate", "5-star customer rating"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-bg py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            Explore our latest work and see how we've helped businesses transform their digital presence 
            with innovative solutions and exceptional design.
          </p>
          <Button className="gradient-bg text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-bg-secondary py-20">
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
                      className="w-full h-64 lg:h-80 object-cover"
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
                      <Button className="gradient-bg text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                      <Button variant="outline" className="border-border text-text hover:bg-primary hover:text-white">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <PortfolioSection />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Have a project in mind? We'd love to hear about it and discuss how we can help bring your vision to life.
          </p>
          <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
