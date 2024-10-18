import React from "react";

const Navbar = () => {
    return (
      <nav className="flex items-center justify-between py-[16px] px-[32px] w-[1440px]">
        {/* Judul di sisi kiri */}
        <h2 className="font-['Roboto'] text-[#212529] text-[24px] font-medium leading-[28.13px] tracking-[-0.32px] m-0">
          Simple Header
        </h2>
        
        {/* Daftar link di sisi kanan */}
        <ul className="flex list-none gap-[16px] ml-auto">
          {['Home', 'Features', 'Pricing', 'FAQs', 'About'].map((item, index) => (
            <li key={index}>
              <a href="#" className="flex items-center px-[8px] h-[43px] font-bold text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white transition-colors duration-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

export default Navbar;
