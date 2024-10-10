import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Property Search App",
      description: "An app for viewing Real Estate in my area.",
      image: "/property_floodplain_project.png",
      link: "/properties"
    },
    {
      title: "Spotify Seasons App",
      description: "An interactive app that analyzes your Spotify listening habits and creates seasonal playlists.",
      image: "/spotify_project.png",
      link: "/spotifyseasons"
    },
    {
      title: "Chat Bot App",
      description: "An LLM chatbot interface to develop features I think are missing from the current available LLM chatbots.",
      image: "/chatbot_app.png",
      link: "/chatbot"
    },
  ];

  return (

    <section id="projects" className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Launch App</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;