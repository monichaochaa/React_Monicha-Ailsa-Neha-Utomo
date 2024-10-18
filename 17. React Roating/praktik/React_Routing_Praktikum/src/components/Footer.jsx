import React from "react";

const Footer = () => {
    return (
      <footer className="w-[1440px] bg-white text-gray-700">
        <div className="flex flex-wrap justify-around py-12 text-left w-[1440px]">
          <div className="w-[330px] mb-8">
            <h3 className="text-2xl font-semibold text-[#37517E]">ARSHA</h3>
            <p className="mt-4">A108 Adam Street <br /> New York, NY 535022 <br /> United States</p>
            <p className="mt-4">
              <strong>Phone:</strong> +1 5589 55488 55 <br />
              <strong>Email:</strong> info@example.com
            </p>
          </div>
          <div className="w-[330px] mb-8">
            <h4 className="text-lg font-bold text-[#37517E]">Useful Links</h4>
            <ul className="mt-4 space-y-2">
              {['Home', 'About Us', 'Services', 'Terms Of Services', 'Privacy Policy'].map((link, index) => (
                <li key={index}><a href="#" className="hover:underline">{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="w-[330px] mb-8">
            <h4 className="text-lg font-bold text-[#37517E]">Our Services</h4>
            <ul className="mt-4 space-y-2">
              {['Web Design', 'Web Development', 'Product Management', 'Marketing', 'Graphic Design'].map((service, index) => (
                <li key={index}><a href="#" className="hover:underline">{service}</a></li>
              ))}
            </ul>
          </div>
          <div className="w-[330px] mb-8">
            <h4 className="text-lg font-bold text-[#37517E]">Our Social Network</h4>
            <p className="mt-4">Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div className="social-icons"></div>
          </div>
        </div>
        <div className="bg-[#37517E] text-white py-4 px-6 flex justify-between">
          <p>© Copyright <strong>ARSHA</strong>. All Rights Reserved</p>
          <p>Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></p>
        </div>
      </footer>
    );
  };
  
  export default Footer;