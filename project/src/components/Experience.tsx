import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Brixcel",
    position: "Programming Analyst (Java)",
    period: "June 2023 – December 2023",
    achievements: [
      "Designed scalable solutions using Spring Boot and RESTful APIs",
      "Enhanced system efficiency by 30% through SQL optimization",
      "Achieved 90% code coverage with automated testing",
      "Improved application response times by 20%"
    ]
  },
  {
    company: "Infosys",
    position: "Java Developer",
    period: "March 2022 – November 2022",
    achievements: [
      "Delivered enterprise applications using Java, Spring Boot, and Angular",
      "Reduced deployment times by 40% through pipeline automation",
      "Reduced production defects by 25% through rigorous testing",
      "Led agile development teams and sprint planning"
    ]
  },
  {
    company: "Naganu",
    position: "Software Developer",
    period: "January 2019 – February 2022",
    achievements: [
      "Developed reusable backend components using Spring Boot",
      "Increased user engagement by 25% through UI revamp",
      "Automated manual processes with MongoDB integration",
      "Reduced system downtime by 15%"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-white" id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company} | {exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}