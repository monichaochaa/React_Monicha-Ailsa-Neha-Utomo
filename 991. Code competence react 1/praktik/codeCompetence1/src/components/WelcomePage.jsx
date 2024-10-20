import React from 'react';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Container Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
        {/* Text Section */}
        <div className="flex-1 px-8 lg:px-20 py-10 lg:py-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Hello, my name is <span className="block">Monicha Ailsa Neha Utomo</span>
          </h1>
          <p style={{ color: '#111184' }} className="text-xl lg:text-2xl mb-2">Front-End Developer</p>
          <p className="text-gray-600 text-base lg:text-lg mb-6">
          I'm an Informatics student with a passion for Front-End Development. Currently learning to build interactive and user-friendly websites using HTML, CSS, JavaScript, and frameworks like React. Check out my projects below or connect with me on LinkedIn!
          </p>

          {/* Buttons */}
          <div className="space-x-4">
            <button style={{ backgroundColor: '#111184' }} className="bg-[#111184]-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-[#111184]-600 transition">
              Projects
            </button>
            <button className="border border-gray-400 text-gray-600 font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition">
              LinkedIn
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full lg:w-auto flex justify-center items-center relative"style={{ backgroundColor: '#111184'}}>
          <img 
            src="oca4.jpg" 
            alt="Monicha" 
            className="w-full h-auto object-cover max-w-md lg:max-w-lg p-10"
          />
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
