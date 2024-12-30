import React from 'react';
import { Code2, Server, Cloud } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 mb-6">
            Results-driven Full-Stack Developer with expertise in designing and delivering scalable applications. 
            Currently pursuing MS in Computer Information Systems at Florida Institute of Technology with a GPA of 3.66.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-600">React, Redux, Angular, TypeScript, and modern frontend practices</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Server className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-600">Java, Spring Boot, Microservices, RESTful APIs</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
            <p className="text-gray-600">AWS, Docker, Kubernetes, CI/CD Pipelines</p>
          </div>
        </div>
      </div>
    </section>
  );
}