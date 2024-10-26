import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-10 py-20">

        <div className="lg:flex-1 flex justify-center lg:justify-end">
        <div className="relative w-64 h-64 lg:w-80 lg:h-80">
        <div className="absolute inset-0 rounded-full bg-[#111184]"></div>
        <img 
              src="ocame.jpg" 
              alt="About Us" 
              className="relative w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        <div className="lg:flex-1 max-w-lg mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 mb-6">
          Hi, I'm Monicha Ailsa Neha Utomo, you can call me Oca, a passionate Informatics Engineering student focusing on Frontend Development. I enjoy transforming creative ideas into interactive and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I'm constantly learning modern frameworks like React to improve my skills.

My goal is to create meaningful and visually appealing digital experiences. I'm highly motivated, always eager to learn, and continuously work on personal projects to sharpen my coding and design abilities.

Feel free to check out my resume for more details about my experience and the projects I've worked on.
          </p>
          <Link to="/projects">
          <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-yellow-600 transition">
            Project
          </button>
          </Link>
        </div>
      </div>
    );
}  

export default AboutUs;