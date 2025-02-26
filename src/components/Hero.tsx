import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-80 z-[-5]" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
        >
          Transforming Ideas into <span className="text-blue-400">Digital Reality</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          We build innovative web and mobile solutions that help businesses grow in the digital age. Our expert team delivers cutting-edge technology with exceptional user experiences.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link 
            to="/services" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors inline-flex items-center justify-center"
          >
            Our Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link 
            to="/contact" 
            className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;