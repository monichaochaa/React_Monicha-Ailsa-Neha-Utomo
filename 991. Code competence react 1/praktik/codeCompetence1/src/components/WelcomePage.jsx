import React from 'react';

const WelcomePage = () => {
  return (
    <div className="bg-[rgb(101,62,62)] from-gray-500 to-teal-400 min-h-screen">
      {/* Welcome Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          WELCOME TO OCA WEBSITE
        </h1>
         <img 
          src="oca.jpg" 
          alt="Gambar Welcome" 
          className="mb-6 w-52 h-auto"
        />
        <p className="text-white text-lg md:text-xl mb-6">
          Apakah kamu mau mengenal oca lebih dalam? klik dibawah ini.
        </p>
        <button className="bg-white text-brown-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-brown-500 hover:text-white transition">
          NEXT
        </button>
      </section>
    </div>
  );
};

export default WelcomePage;
