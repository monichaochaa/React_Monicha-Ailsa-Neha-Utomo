import React from 'react';

const NewsLetterSection = () => {
  return (
    <section className="w-[1440px] bg-[#F3F5FA] py-12 text-center">
      <h2 className="text-2xl font-bold text-[#37517E]">Join Our Newsletter</h2>
      <p className="text-sm text-gray-700 mt-5">
        Tamen quem nulla legam multos aute sint culpa legam noster magna
      </p>
      <div className="mt-5 flex justify-center space-x-4">
        <input type="email" placeholder="Enter your email" className="border border-gray-300 rounded-full px-5 py-2.5 w-[660px] hover:border-[#47B2E4] focus:outline-none focus:ring-2 focus:ring-[#47B2E4] transition" />
        <button type="submit" className="bg-[#47B2E4] text-white py-2.5 px-6 rounded-full">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default NewsLetterSection;
