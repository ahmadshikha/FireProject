import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FaPoundSign, FaUsers, FaComments } from 'react-icons/fa';

const Hero6 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []); 

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-sans text-red-500 mb-6" data-aos="fade-up">
          Why choose The Fire Safety Company
        </h2>
        <p className="text-gray-600 mb-12" data-aos="fade-up" data-aos-delay="200">
          We operate by providing you with a free, no obligation fire assessment survey of your premises. 
          Then recommending what fire protection is required and fitting all the necessary equipment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <div className="text-6xl text-red-500 mb-4">
              <FaComments />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Economical Solutions</h3>
          </div>
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <div className="text-6xl text-black mb-4">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Talented Experts</h3>
          </div>
            
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <div className="text-6xl text-orange-500 mb-4">
              <FaComments />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Forward Thinking</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero6;
