import React from 'react';
function About() {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-2xl font-bold mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3">
          <img 
            src="/me.jpg" 
            alt="Corey B" 
            className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-white shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg">
            <p className="text-lg leading-relaxed text-white">
            Hi, I'm Corey B, a passionate developer transitioning into full stack React development. With a background in Electrical Engineering and self-taught coding skills, I've worked in Python and GIS mapping, combining analytical thinking with practical software development. I'm driven by a love for learning, creating, and solving problems, and I'm excited to bring my diverse experience to the world of full stack development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;