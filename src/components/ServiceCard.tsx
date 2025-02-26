import React from 'react';
import { motion } from 'framer-motion';
import { CardData } from '../types';
import { Briefcase, Code, Cpu, Globe, Layers, Smartphone, Zap } from 'lucide-react';

interface ServiceCardProps {
  card: CardData;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ card, index }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="h-8 w-8 text-blue-500" />;
      case 'Smartphone':
        return <Smartphone className="h-8 w-8 text-blue-500" />;
      case 'Layers':
        return <Layers className="h-8 w-8 text-blue-500" />;
      case 'Globe':
        return <Globe className="h-8 w-8 text-blue-500" />;
      case 'Briefcase':
        return <Briefcase className="h-8 w-8 text-blue-500" />;
      case 'Cpu':
        return <Cpu className="h-8 w-8 text-blue-500" />;
      default:
        return <Zap className="h-8 w-8 text-blue-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-opacity-20 border border-white/10"
    >
      <div className="mb-4">
        {getIcon(card.icon)}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
      <p className="text-gray-300">{card.description}</p>
    </motion.div>
  );
};

export default ServiceCard;