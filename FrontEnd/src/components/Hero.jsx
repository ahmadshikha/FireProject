  import React, { useState, useEffect } from "react";
  import AOS from 'aos'; 
  import 'aos/dist/aos.css'; 
  import background from "../assets/image_slider/hd.jpg";
  import background2 from "../assets/image_slider/slider3.jpeg";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/swiper-bundle.css";
  import "../app.css";
  import carsel1 from '../assets/image_slider/carsel1.jpg'

  const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
  
  

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    }, []);

  

    useEffect(() => {
      AOS.init({
        duration: 1200, 
        easing: 'ease-in-out',
        once: true, 
      });
    }, []);

    return (
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
      
   
      <SwiperSlide>
    <section
      className="bg-gray-900 text-gray-100 py-12 bg-cover bg-center min-h-screen bg-fixed"
      style={{ backgroundImage: `url(${carsel1})` }}
      data-aos="fade-up"
    >
      <div className="flex justify-end items-center min-h-screen">
        <div className="bg-gray-800 bg-opacity-80 rounded-lg p-8 md:w-1/2 text-center md:text-left z-10" data-aos="fade-left">
          <h1 className="text-9xl font-bold mb-4 shadow-custom ">HFFS</h1>
          <h1 className="text-5xl font-bold mb-4 shadow-custom">
            Fire Safety Services
          </h1>
          <p className="text-xl mb-6">
            Specialists in keeping you safe from fire
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  </SwiperSlide>

        <SwiperSlide>
          <section
            className="bg-gray-900 text-gray-100 py-12 bg-cover bg-center min-h-screen bg-fixed"
            style={{ backgroundImage: `url(${background})` }}
            data-aos="fade-up" 
          >
            <div className="container mx-auto flex flex-col md:flex-row items-center mt-28">
              <div
                className="md:w-1/2 p-6 bg-gray-800 bg-opacity-75 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                data-aos="fade-right" 
              >
                <h1 className="text-6xl font-bold mb-4">ABOUT US</h1>
                <p className="text-xl mb-6">
                  Your best choice
                  <br />
                  Our company has everything
                  <br /> you need in firefighting equipment.
                </p>
              </div>
              <div className="md:w-1/2 p-6" data-aos="fade-left">
              
              </div>
            </div>
          </section>
        </SwiperSlide>


        <SwiperSlide>
          <section
            className="bg-gray-900 text-gray-100 py-12 bg-cover bg-center min-h-screen bg-fixed"
            style={{ backgroundImage: `url(${background2})` }}
            data-aos="fade-up" 
          ></section>
        </SwiperSlide>


  
      </Swiper>
    );
  };

  export default Hero;
