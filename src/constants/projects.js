import ChatBotImage from '../assets/chatbot.png';
import SpotifySeasonsImage from '../assets/spotify_project.png';
import PropertyAppImage from '../assets/property_floodplain_project.png';


export const projects = [
    {
      title: "Spotify Seasons App",
      description: "An interactive app that analyzes your Spotify listening habits and creates seasonal playlists.",
      longDescription: "This application integrates with Spotify's API to analyze your listening patterns and automatically generates personalized playlists based on seasonal themes. Using advanced algorithms, it categorizes songs by their acoustic features and mood to match them with different seasons.",
      image: SpotifySeasonsImage,
      demoLink: "/spotifyseasons",
      githubLink: "https://github.com/yourusername/spotify-seasons",
      technologies: ["React", "Node.js", "Spotify API", "Express"]
    },
    {
      title: "Property Search App",
      description: "An app for viewing Real Estate in my area.",
      longDescription: "A comprehensive real estate search platform that helps users find properties while providing detailed information about flood plains and other environmental factors. Features include interactive maps, detailed property information, and advanced filtering options.",
      image: PropertyAppImage,
      demoLink: "/properties",
      githubLink: "https://github.com/yourusername/property-search",
      technologies: ["React", "MongoDB", "Express", "Node.js"]
    },
    {
      title: "Chat Bot App",
      description: "An LLM chatbot interface to develop features I think are missing from the current available LLM chatbots.",
      longDescription: "A sophisticated chatbot platform built with advanced natural language processing capabilities. This project implements custom features such as context awareness, memory management, and specialized knowledge domains.",
      image: ChatBotImage,
      demoLink: "/chatbot",
      githubLink: "https://github.com/yourusername/chatbot",
      technologies: ["Python", "React", "TensorFlow", "FastAPI"]
    },
  ];
