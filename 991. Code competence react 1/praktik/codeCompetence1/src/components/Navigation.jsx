import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-2xl font-bold">
        <Link to="/">OCA PORTFOLIO</Link>
      </div>

      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-blue-500">About</Link>
          </li>
          <li>
            <a href="#contacts" className="hover:text-blue-500">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;