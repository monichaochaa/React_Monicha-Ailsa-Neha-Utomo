import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      {/* Container Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between w-full px-10 py-20 lg:px-20 space-y-10 lg:space-y-0 lg:space-x-12">
        {/* Text Section */}
        <div className="flex-1 lg:w-1/2">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Hello, my name is <span className="block">Monicha Ailsa Neha Utomo</span>
          </h1>
          <p style={{ color: '#111184' }} className="text-2xl lg:text-3xl mb-4">Front-End Developer</p>
          <p className="text-gray-600 text-lg lg:text-xl mb-8">
          I'm an Informatics student with a passion for Front-End Development. Currently learning to build interactive and user-friendly websites using HTML, CSS, JavaScript, and frameworks like React. Check out my projects below or connect with me on LinkedIn!
          </p>

          {/* Buttons */}
          <div className="space-x-4">
          <Link to="/projects">
            <button style={{ backgroundColor: '#111184' }} className="bg-[#111184] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#111184] transition">
              Projects
            </button>
            </Link>
            <a href="https://www.linkedin.com/in/monicha-ailsa-neha-utomo-777188310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <button className="border border-gray-400 text-gray-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition">
              LinkedIn
            </button>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full lg:w-1/2 flex justify-center items-center">
        <div className="relative w-full h-auto lg:max-w-xl">
  {/* Background color for image */}
  <div className="absolute inset-0 rounded-full bg-[#111184] w-full h-full -z-10"></div>
  <img 
    src="oca4.jpg" 
    alt="Monicha" 
    className="w-full h-auto object-cover max-w-xl p-4 relative z-10"
  />
</div>
        </div>
      </section>
       </div>
  );
};

export default WelcomePage;
