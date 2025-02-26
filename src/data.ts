import { CardData, TestimonialData } from './types';
import { Briefcase, Code, Cpu, Globe, Layers, Zap } from 'lucide-react';

export const cardData: CardData[] = [
  {
    id: 1,
    title: "Web Development",
    description: "We build modern, responsive websites that help your business grow and thrive online.",
    icon: "Code"
  },
  {
    id: 2,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: "Smartphone"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, engaging interfaces for your digital products.",
    icon: "Layers"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to increase your online presence and drive conversions.",
    icon: "Globe"
  },
  {
    id: 5,
    title: "Consulting",
    description: "Expert advice and strategies to help your business navigate the digital landscape.",
    icon: "Briefcase"
  },
  {
    id: 6,
    title: "Cloud Services",
    description: "Scalable cloud solutions that optimize your business operations and reduce costs.",
    icon: "Cpu"
  }
];

export const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    testimonial: "Working with this team transformed our online presence. Their attention to detail and commitment to quality is unmatched in the industry.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateLabs",
    testimonial: "The team delivered our project ahead of schedule and exceeded all our expectations. Their technical expertise and creative approach solved problems we didn't even know we had.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "NextWave Solutions",
    testimonial: "Their development team is exceptional. They not only built a beautiful website but also ensured it was optimized for performance and conversion.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
  }
];