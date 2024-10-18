import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import NewsLetterSection from "./NewsletterSection";
import Footer from "./Footer";
import CreateProduct from "./CreateProduct";

const LandingPage = () => {
    return (
        <div> 
            <Navbar/>
            <HeroSection/>
            <NewsLetterSection/>
            <div className="flex justify-center my-10 w-[1440px]">
        <Link to="/CreateProduct" className="bg-[#47B2E4] text-white py-2.5 px-6 rounded-full">
          Go to Create Product
        </Link>
      </div>
            <Footer />
        </div>
    );
};

export default LandingPage;