import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <header className="flex justify-between items-center p-6 bg-[#111184] shadow-md">
         <div className="flex items-center">
         <img src="logo.png" alt="Logo" className="w-10 h-10 mr-3" />
        <div className="text-4xl font-bold text-white">
        <Link to="/">ALL ABOUT OCA</Link>
      </div>
      </div>

      <nav>
        <ul className="flex space-x-6 text-3xl text-white">
          <li>
            <Link to="/" className="hover:text-blue-700">Home</Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-blue-700">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-blue-700">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;