import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-lg p-2 mr-4 shadow-lg">
            <a href="/" className="flex items-center">
              <h1 className="text-3xl font-bold text-white"> CoreyB </h1>
            </a>
          </div>
          <nav className="flex-grow backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-lg shadow-lg">
            <ul className="flex justify-end space-x-6 px-6 py-3">
              <li><a href="#about" className="text-white hover:text-green-200 transition-colors">About</a></li>
              <li><a href="#projects" className="text-white hover:text-blue-200 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-white hover:text-teal-200 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;