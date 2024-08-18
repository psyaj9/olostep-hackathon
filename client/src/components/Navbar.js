import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem('userId');
    await fetch('http://localhost:5002/logout', {
      method: 'GET',
    });
    navigate('/login');
  };

  const isLoggedIn = !!localStorage.getItem('userId'); 

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-between p-4 bg-black">
      <div className="text-white font-bold text-xl flex-shrink-0">
        WebScrapePro
      </div>
      <div className="flex space-x-4">
        {isLoggedIn ? (
          <button 
            onClick={handleLogout}
            className="text-white flex items-center space-x-2"
          >
            Logout
          </button>
        ) : (
          <>
            <a href="/login" className="text-white flex items-center space-x-2">
              <span>Log In</span>
            </a>
            <a href="/register" className="border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition-colors">
              Sign Up
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
