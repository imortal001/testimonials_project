import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialData } from '../types';

interface TestimonialCardProps {
  testimonial: TestimonialData;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-opacity-20 border border-white/10"
    >
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
          <p className="text-blue-300">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">"{testimonial.testimonial}"</p>
    </motion.div>
  );
};

export default TestimonialCard;