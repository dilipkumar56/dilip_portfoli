import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-gray-900 text-white" id="hero">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Dilip Kumar
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Full-Stack Developer
        </p>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Specialized in React, Java, AWS, and modern software engineering practices. 
          Focused on building scalable, high-performance applications.
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com" className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-300" aria-label="GitHub Profile">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-300" aria-label="LinkedIn Profile">
            <Linkedin size={24} />
          </a>
          <a href="mailto:bandarudilip56@gmail.com" className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-300" aria-label="Email">
            <Mail size={24} />
          </a>
          <a href="/resume.pdf" className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-300" aria-label="Resume">
            <FileText size={24} />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-transparent to-transparent hover:from-blue-600 hover:to-blue-700 text-blue-400 hover:text-white border-2 border-blue-400 hover:border-transparent px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}