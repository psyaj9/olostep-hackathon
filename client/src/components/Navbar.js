import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-between p-4 bg-black">
      <div className="text-white font-bold text-xl flex-shrink-0">
        WebScrapePro
      </div>
      <ul className="flex flex-grow justify-center space-x-6 text-white">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="#features" className="hover:underline">Features</a></li>
      </ul>
      <div className="flex space-x-4">
        <a href="/login" className="text-white flex items-center space-x-2"><span>Log In</span></a>
        <a href="/register" className="border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition-colors">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
