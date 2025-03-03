import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import image1 from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const menuVariants = {
    hidden: {
      y: '-100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: '-100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full  px-4 py-3 z-50 transition duration-300 ${scrolling ? 'bg-gray-200 bg-opacity-80 rounded-full' : 'bg-transparent rounded-lg'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={image1} alt="Shopsy Logo" className="w-16 h-16 mr-2" />
          <span className="text-3xl font-bold text-red-800">HFFS</span>
        </div>
        <div className="hidden md:flex md:ml-auto space-x-20"> {/* Added md:ml-auto to push links to the right */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="flex space-x-4 bg-white/10 p-6 rounded-full"
          >
            <Link to="/" className="hover:text-gray-600 font-serif text-lg text-red-800">
              <motion.span variants={itemVariants}>Home</motion.span>
            </Link>
            <Link to="/product" className="hover:text-gray-600 font-serif text-lg text-red-800">
              <motion.span variants={itemVariants}>Product</motion.span>
            </Link>
            <Link to="/contact" className="hover:text-gray-600 font-serif text-lg text-red-800">
              <motion.span variants={itemVariants}>Contact Us</motion.span>
            </Link>
          </motion.div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="bg-orange-500 p-2 rounded-full md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span role="img" aria-label="toggle">🔄</span>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          className="md:hidden bg-white/10 backdrop-blur-lg rounded-lg shadow-lg mt-2"
        >
          <div className="flex flex-col space-y-2 px-4 py-2">
            <Link to="/" className="hover:text-gray-700">
              <motion.span variants={itemVariants}>Home</motion.span>
            </Link>
            <Link to="/product" className="hover:text-gray-700 font-serif text-2xl">
              <motion.span variants={itemVariants}>Product</motion.span>
            </Link>
            <Link to="/contact" className="hover:text-gray-700">
              <motion.span variants={itemVariants}>Contact Us</motion.span>
            </Link>
            <button
              className="text-red-800 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Close Menu
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;