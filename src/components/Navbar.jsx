import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l2 7h7l-5 3.68L18 22l-6-3.68L6 22l2-7.32L2 9h7l2-7z"></path>
          </svg>
          <span className="ml-3 text-xl text-white">E-Commerce</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="#home" className="mr-5 text-white hover:text-gray-900">Home</Link>
          <Link to="/shop" className="mr-5 text-white hover:text-gray-900">Shop</Link>
          <Link to="#about" className="mr-5 text-white hover:text-gray-900">About</Link>
          <Link to="#contact" className="mr-5 text-white hover:text-gray-900">Contact</Link>
        </nav>
        <div className="relative">
          <input type="text" className="bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Search..." />
          <button className="absolute right-0 top-0 mt-2 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        <button className="ml-4 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 12h18M3 21h18" />
          </svg>
          <span className="ml-1">Cart</span>
        </button>
        <button className="ml-4 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.93 0 3.5-1.57 3.5-3.5S13.93 4 12 4 8.5 5.57 8.5 7.5 10.07 11 12 11zM12 13c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="ml-1">Profile</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
