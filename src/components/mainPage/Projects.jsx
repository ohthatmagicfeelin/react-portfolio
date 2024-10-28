import React from 'react';

function Projects({ projects }) {

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <div className="relative group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="space-x-4">
                  <a 
                    href={project.demoLink} 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Launch App
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => window.location.href = `/project-details${project.demoLink}`} 
                className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;