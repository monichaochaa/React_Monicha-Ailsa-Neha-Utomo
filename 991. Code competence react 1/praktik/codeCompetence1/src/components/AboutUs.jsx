import React from 'react';

function AboutUs() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>

        <img 
        src="ocame.jpg" 
        alt="About Us" 
        className="mb-6 w-96 h-48 object-cover rounded shadow-lg"
      />

<p className="text-center max-w-xl text-gray-700">
        Monicha Ailsa Neha Utomo atau yang biasa dipanggil dengan Oca adalah seorang calon Frontend Engineering yang memiliki semangat belajar dan juga memiliki motivasi tinggi untuk mewujudkan impiannya.  
      </p>
    </div>
  );
}

export default AboutUs;