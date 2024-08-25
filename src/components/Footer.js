import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white p-4 text-center flex flex-col items-center">
      {/* Neocodenex Branding */}
      <div className="mb-2">
        <a href="https://neocodenex.tech" target="_blank" rel="noopener noreferrer">
          <img
            src="https://neocodenex.tech/static/img/logo.webp" // Replace with the actual logo URL
            alt="Neocodenex Logo"
            className="h-12"
          />
        </a>
      </div>
      <p className="text-lg font-semibold mb-1">Powered by Neocodenex</p>
      <p>&copy; 2024 Krishna Janmashtami. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
