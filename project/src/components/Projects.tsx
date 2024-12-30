import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Citi1Credit Platform",
    description: "Enhanced transaction speed by 20% using Spring Boot and RESTful APIs. Implemented continuous code quality analysis with SonarQube.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    technologies: ["Spring Boot", "J2EE", "RESTful APIs", "SonarQube"]
  },
  {
    title: "Automated Deployment System",
    description: "Built CI/CD pipeline reducing deployment times by 40%. Integrated comprehensive testing with JUnit and TestNG.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800",
    technologies: ["Jenkins", "Docker", "Maven", "JUnit"]
  },
  {
    title: "Predictive Maintenance System",
    description: "Developed predictive models with 95% accuracy using Python and Spark. Built real-time monitoring APIs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    technologies: ["Python", "Spark", "Kafka", "RESTful APIs"]
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}