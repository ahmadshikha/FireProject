import React, { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_svl3zm8', 'template_4t8uuet', form.current, {
        publicKey: '6PtbyEVvHvSSj02AV',
      })
      .then(
        (result) => {
          console.log('SUCCESS!');
          console.log(result.text);
          setSuccessMessage('Send Message Succefuly '); 
          form.current.reset(); 

         
          setTimeout(() => {
            setSuccessMessage('');
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccessMessage('فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.'); 
         
          setTimeout(() => {
            setSuccessMessage('');
          }, 5000);
        },
      );
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {successMessage && ( 
          <div className="w-full bg-green-500 text-center text-lg font-bold p-4 rounded mb-4">
            {successMessage}
          </div>
        )}
        
        <h2 className="text-5xl font-bold mb-4 w-full text-center">
          GET IN TOUCH
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="mb-8 md:mb-0 md:w-1/2" data-aos="fade-right">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="text-blue-500 mr-3 text-xl" />
                <div>
                  <p className="font-bold text-lg">My Address</p>
                  <p className="text-md">Syrian, Damascus</p>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="text-blue-500 mr-3 text-xl" />
                <div>
                  <p className="font-bold text-lg">Phone Number</p>
                  <p className="text-md">+963933595885</p>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="text-blue-500 mr-3 text-xl" />
                <div>
                  <p className="font-bold text-lg">Email Address</p>
                  <p className="text-md">Hassan@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-6 rounded-lg" data-aos="fade-left">
            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
              <div>
                <input
                  type="text"
                  name="user_name"
                  className="user_name w-full p-3 rounded-lg bg-gray-900 text-white border border-white focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email_name"
                  className="w-full p-3 rounded-lg bg-gray-900 text-white border border-white focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  className="message w-full p-3 h-32 rounded-lg bg-gray-900 text-white border border-white focus:outline-none focus:border-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-400 hover:bg-blue-700 text-white font-bold py-3 rounded-full transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;