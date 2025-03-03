import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import background from '../assets/image_slider/bghero2.jpeg';

const VisionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${background})`, 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> 

      <div className="container mx-auto relative z-10 text-white px-4 py-8 md:py-12 lg:px-32" data-aos="fade-up">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans mb-6">Our Vision</h2>
          <p className="text-base md:text-lg lg:text-xl mb-4 font-sans leading-relaxed">
            To provide honest fire safety advice and maintain a safe and healthy
            workplace for all employees in compliance with all applicable laws and
            regulations. We'll ensure your workplace has the necessary resources
            and your staff have the knowledge to take ownership and responsibility
            for safety. We'll always ensure you are compliant with all company
            health and safety programs and practices.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            Our products and services help save lives, protect property and keep
            communities thriving to ensure a safe today, safe tomorrow, a safe
            year and a safe environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;