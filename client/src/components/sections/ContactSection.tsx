import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Dribbble, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-bg py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-text">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Ready to start your next project? Contact us today and let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-text">Office Location</h3>
                  <p className="text-text-secondary">123 Design Street<br />Creative District, CD 12345<br />United States</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-text">Phone Number</h3>
                  <p className="text-text-secondary">+1 (555) 123-4567<br />Mon - Fri: 9AM - 6PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-text">Email Address</h3>
                  <p className="text-text-secondary">hello@designpro.com<br />support@designpro.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-text">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-bg-secondary border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-bg-secondary border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-bg-secondary border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-bg-secondary border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-bg-secondary border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Dribbble className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-bg-secondary rounded-xl p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-text">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="mt-2 bg-bg border-border text-text focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-text">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="mt-2 bg-bg border-border text-text focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-text">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Discussion"
                  required
                  className="mt-2 bg-bg border-border text-text focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-text">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  required
                  className="mt-2 bg-bg border-border text-text focus:ring-primary focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full gradient-bg text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
