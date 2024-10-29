import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function ProjectDetails({ projects }) {
  const { projectPath } = useParams();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const project = projects.find(p => p.demoLink === `/${projectPath}`);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button 
            onClick={() => navigate('/')} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button 
        onClick={() => navigate('/')} 
        className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
      >
        ← Back to Projects
      </button>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 object-cover transition-opacity duration-300"
            style={{ opacity: isHovered ? '0.7' : '1' }}
          />
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center">
              <a 
                href={project.demoLink} 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch App
              </a>
            </div>
          )}
        </div>
        
        <div className="p-8">
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="prose max-w-none">
            <ReactMarkdown>{project.longDescription}</ReactMarkdown>
          </div>

          <div className="flex gap-4 mt-8">
            <a 
              href={project.demoLink} 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;