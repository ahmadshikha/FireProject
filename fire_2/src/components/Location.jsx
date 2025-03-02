import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const VenueLocation = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white py-8 px-1">
      <div className="text-center mb-6 font-sans" data-aos="fade-down">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">VENUE LOCATION</h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4 w-full" data-aos="fade-right">
          <div className="text-lg lg:text-xl text-gray-700">
            <p>Work Time: 8:00 am - 10:00 pm</p>
          </div>

          <div className="space-y-2 text-lg lg:text-xl text-gray-700">
            <p className="flex items-center">
              <span className="mr-2 text-2xl">📍</span>
              Syria, Damascus
            </p>
            <p className="flex items-center">
              <span className="mr-2 text-2xl">📞</span>
              +963933595885
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8" data-aos="fade-left">
        <div className="relative w-full h-0 pb-[56.25%]"> 
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.2992812575935!2d36.3005214!3d33.493589799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e16e406117ff%3A0xa6aab3f474705e6e!2z2LTYsdmD2Kkg2K3Ys9mGINin2KzZh9iy2Kkg2KfYt9mB2KfYoSDYrdix2YrZgg!5e0!3m2!1sar!2snl!4v1728995826707!5m2!1sar!2snl"
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VenueLocation;