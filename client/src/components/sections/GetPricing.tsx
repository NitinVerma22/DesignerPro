// sections/GetPricing.tsx
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/components/ThemeProvider";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export function GetPricing({
  serviceName = "",
  heading = "Get Pricing",
  onClose,
}: {
  serviceName?: string;
  heading?: string;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: serviceName,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { theme } = useTheme();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        toast({
          title: "Request Submitted!",
          description: "We'll get back to you with pricing details shortly.",
        });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        onClose();
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'blue-white':
        return { gradient: 'from-blue-500 to-blue-700', bg: 'bg-blue-50', text: 'text-blue-900', border: 'border-blue-200' };
      case 'purple-dark':
        return { gradient: 'from-purple-600 to-purple-800', bg: 'bg-purple-900', text: 'text-purple-100', border: 'border-purple-700' };
      case 'orange-cream':
        return { gradient: 'from-orange-500 to-orange-700', bg: 'bg-orange-50', text: 'text-orange-900', border: 'border-orange-200' };
      case 'teal-gray':
        return { gradient: 'from-teal-500 to-teal-700', bg: 'bg-teal-50', text: 'text-teal-900', border: 'border-teal-200' };
      default:
        return { gradient: 'from-blue-500 to-blue-700', bg: 'bg-blue-50', text: 'text-blue-900', border: 'border-blue-200' };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div className={`rounded-xl p-6 w-full ${themeClasses.bg} border ${themeClasses.border} shadow-xl`}>
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10">
        <X className="w-6 h-6" />
      </button>

      <h2 className={`text-2xl font-bold mb-2 ${themeClasses.text}`}>{heading}</h2>
      <p className="text-gray-600 mb-6">Fill out the form and we'll send you detailed pricing information.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className={themeClasses.text}>Full Name</Label>
          <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required placeholder="John Doe" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="email" className={themeClasses.text}>Email Address</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="john@example.com" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="phone" className={themeClasses.text}>Phone Number</Label>
          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required placeholder="+91-9876543210" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="service" className={themeClasses.text}>Service</Label>
          <select id="service" name="service" value={formData.service} onChange={handleInputChange} required className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-white">
            <option value="">Select a service</option>
            <option value="website">Website Development</option>
            <option value="app">App Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="seo">SEO Optimization</option>
            <option value="full-package">Full Package</option>
            <option value="all">All Services</option>
          </select>
        </div>
        <div>
          <Label htmlFor="message" className={themeClasses.text}>Additional Details</Label>
          <Textarea id="message" name="message" rows={3} value={formData.message} onChange={handleInputChange} placeholder="Tell us more..." className="mt-1" />
        </div>
        <Button type="submit" disabled={isSubmitting} className={`w-full bg-gradient-to-r ${themeClasses.gradient} text-white`}>
          <Send className="w-4 h-4 mr-2" />
          {isSubmitting ? 'Sending...' : 'Get Pricing'}
        </Button>
      </form>
    </div>
  );
}
