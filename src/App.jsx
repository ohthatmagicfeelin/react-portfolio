import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import MainPage from './components/MainPage.jsx';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer.jsx';
import { projects } from './constants/projects.js';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>

            <Route path="/" element={
              <MainPage projects={projects} />
            } />

            <Route 
              path="/project-details/:projectPath" 
              element={<ProjectDetails projects={projects} />} 
            />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;