export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export type Theme = 'blue-white' | 'purple-dark' | 'orange-cream' | 'teal-gray';
