import React from "react";

const HeroSection = () => {
    return (
      <section className="w-[1440px] h-[760px] bg-[#37517E] text-white flex justify-center items-center py-[50px]">
        <div className="flex flex-col-reverse lg:flex-row items-stretch w-[1275px] h-[526px]">
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="font-bold text-left text-[48px] leading-[56px]">
              Better Solution For Your Business
            </h1>
            <p className="mt-5 text-left text-[24px] font-medium leading-[28.8px] text-[#FFFFFF99]">
              We are team of talented designers making websites with Bootstrap
            </p>
            <div className="mt-5 flex gap-4">
              <a href="#" className="btn-get-started bg-[#47B2E4] py-[9px] px-[28.36px] rounded-full text-white text-[16px] inline-flex items-center justify-center w-[147.36px] h-[45px]">
                Get Started
              </a>
              <a href="#" className="btn-watch-video border-2 border-white py-[9px] px-[28.36px] rounded-full text-white text-[16px] inline-flex items-center justify-center h-[45px]">
                Watch Video
              </a>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
          <img src="/GambarLandingPage.png" alt="Business Illustration" className="w-[636px] h-[527px] mt-[8px]" />
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;