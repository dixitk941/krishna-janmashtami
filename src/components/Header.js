import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaCode } from 'react-icons/fa'; // Using an icon for branding

const Header = ({ title }) => {
  return (
    <header className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Neocodenex Logo and Branding */}
          <div className="flex items-center space-x-2">
            <FaCode className="text-3xl" />
            <h1 className="text-2xl font-extrabold tracking-wide">Neocodenex</h1>
          </div>
          <span className="text-xl font-semibold">{title}</span>
        </div>
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/story"
            className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
          >
            Story
          </Link>
          <Link
            to="/crafts"
            className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
          >
            Craft Ideas
          </Link>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Krishna Janmashtami',
};

export default Header;
