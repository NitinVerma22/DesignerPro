import { ContactSection } from "@/components/sections/ContactSection";

export default function Contact() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-bg py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            Ready to start your next project? We'd love to hear from you. 
            Get in touch and let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <ContactSection />

      {/* FAQ Section */}
      <section className="bg-bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-text">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Have questions? We have answers. Here are some of the most common questions we receive.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-bg rounded-xl p-6 border border-border">
              <h3 className="text-xl font-bold text-text mb-3">How long does a typical project take?</h3>
              <p className="text-text-secondary">
                Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, 
                while a complex web application could take 3-6 months. We'll provide a detailed timeline during our consultation.
              </p>
            </div>

            <div className="bg-bg rounded-xl p-6 border border-border">
              <h3 className="text-xl font-bold text-text mb-3">What's included in your design process?</h3>
              <p className="text-text-secondary">
                Our design process includes research, wireframing, visual design, prototyping, and user testing. 
                We work closely with you throughout each phase to ensure the final product meets your goals.
              </p>
            </div>

            <div className="bg-bg rounded-xl p-6 border border-border">
              <h3 className="text-xl font-bold text-text mb-3">Do you provide ongoing support?</h3>
              <p className="text-text-secondary">
                Yes! We offer various maintenance and support packages to keep your website or application 
                running smoothly, secure, and up-to-date after launch.
              </p>
            </div>

            <div className="bg-bg rounded-xl p-6 border border-border">
              <h3 className="text-xl font-bold text-text mb-3">Can you work with our existing brand?</h3>
              <p className="text-text-secondary">
                Absolutely! We can work within your existing brand guidelines or help refresh and enhance 
                your brand identity as part of the project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
