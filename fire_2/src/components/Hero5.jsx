import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import image from '../assets/image_slider/bghero.jpeg';

const Hero5 = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true, 
    });
  }, []);

  return (
    <section 
      className="relative bg-cover bg-center bg-fixed "
      style={{ backgroundImage: `url(${image})` }} 
    >
    
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
      
      <div className="container mx-auto py-16 px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between relative z-10">
        

        <div className="lg:w-1/2 text-white" data-aos="fade-right">
          <h2 className="text-4xl font-sans mb-4">Ensuring you stay compliant</h2>
          <p className="text-lg mb-4">
            The Regulatory Reform (Fire Safety) Order 2005 has set out guidelines for businesses to follow to keep their staff and customers safe. 
            A trained person on a premises must take care of the fire safety measures required, so other people on site can rest assured that they 
            are visiting or working in a safe environment.
          </p>
          <p className="text-lg">
            Some of the duties of these 'responsible people' include making sure the required fire safety equipment and detection devices are available 
            and well maintained, emergency exits and routes are clearly marked with appropriate signage, a fire risk assessment is carried out and employees 
            have the appropriate fire safety training among other important steps.
          </p>
        </div>

     
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center" data-aos="fade-left">
          <FaCheckCircle className="text-9xl text-orange-500" /> 
        </div>
      </div>
    </section>
  );
};

export default Hero5;
