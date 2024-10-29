import ChatBotImage from '../assets/projectImages/chatbot.png';
import SpotifySeasonsImage from '../assets/projectImages/spotify_project.png';
import PropertyAppImage from '../assets/projectImages/property_floodplain_project.png';
import WeatherImage from '../assets/projectImages/weather.png';
import spotifyAppLongDescription from '../assets/descriptions/spotifyAppLongDescription.md?raw';
import propertyMapLongDescription from '../assets/descriptions/propertyMapLongDescription.md?raw';
import chatbotLongDescription from '../assets/descriptions/chatbotLongDescription.md?raw';
import weatherLongDescription from '../assets/descriptions/weatherLongDescription.md?raw';

export const projects = [
    {
      title: "Spotify Seasons App",
      description: "An interactive app that analyzes your Spotify listening habits and creates seasonal playlists.",
      longDescription: spotifyAppLongDescription,
      image: SpotifySeasonsImage,
      demoLink: "/spotifyseasons",
      githubLink: "https://github.com/yourusername/spotify-seasons",
      technologies: ["React", "Node.js", "Spotify API", "Express", "PostgreSQL", "N-tier Architecture", "TailwindCSS", "PWA", "Vite", "Nginx", "SSL", "VPS Deployment"],
    },
    {
      title: "Property Search App",
      description: "An app for viewing Real Estate in my area.",
      longDescription: propertyMapLongDescription,
      image: PropertyAppImage,
      demoLink: "/properties",
      githubLink: "https://github.com/yourusername/property-search",
      technologies: ["Vanilla JS", "Chart.js", "Leaflet.js", "Web Scraping", "VPS Deployment", "Static File Serving"]
    },
    {
      title: "Chat Bot App",
      description: "An LLM chatbot interface to develop features I think are missing from the current available LLM chatbots.",
      longDescription: chatbotLongDescription,
      image: ChatBotImage,
      demoLink: "/chatbot",
      githubLink: "https://github.com/yourusername/chatbot",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "TailwindCSS", "PWA", "Vite", "Nginx", "SSL", "VPS Deployment", "Code Syntax Highlighting"]
    },
    {
      title: "Weather History",
      description: "A weather history app to log and view historical weather data for my home town.",
      longDescription: weatherLongDescription,
      image: WeatherImage,
      demoLink: "/weather",
      githubLink: "https://github.com/yourusername/chatbot",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "TailwindCSS", "PWA", "Vite", "Nginx", "SSL", "VPS Deployment", "Puppeteer", "Jsdom", "Cron Jobs", "Web Scraping", "N-tier Architecture" ]
    },
  ];
