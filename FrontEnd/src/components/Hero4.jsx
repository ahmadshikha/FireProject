import React from 'react';
import { motion } from 'framer-motion'; 
import { FaFireExtinguisher, FaUserShield, FaCloud, FaPlug, FaSign } from 'react-icons/fa'; 


const services = [
  {
    id: 1,
    title: 'Fire Extinguishers',
    description: 'Every commercial premises is required to meet the British Standard BS5306 in fire extinguishers to help keep you and your employees safe in the event of a fire  You may need different types of fire extinguishers depending on the nature of your business. The Fire Safety Company cover every aspect from installation to maintenance',
    icon: <FaFireExtinguisher className="text-4xl text-orange-500" />,
  },
  {
    id: 2,
    title: 'Fire Warden Training',
    description: 'All employees must be provided with adequate fire safety training and depending on the size of your premises, you may require a fire warden. Our fire safety experts can visit your premises and provide the appropriate level of training to your employees and fire wardens.',
    icon: <FaUserShield className="text-4xl text-blue-500" />,
  },
  {
    id: 3,
    title: 'Carbon Monoxide Detectors',
    description: 'Alarms that detect carbon monoxide are vital in areas that are close to potential sources of the odourless, colourless gas. Our team will advise and identify the area most at risk and install these alarms where required.',
    icon: <FaCloud className="text-4xl text-gray-500" />,
  },
  {
    id: 4,
    title: 'PAT Testing',
    description: 'The most effective way to comply with The Electricity at Work Regulations 1989 is to PAT test all electrical equipment to ensure these devices are safe. Our specially trained engineers use market leading equipment to safety test your appliances.',
    icon: <FaPlug className="text-4xl text-green-500" />,
  },
  {
    id: 5,
    title: 'Fire Safety Signage',
    description: 'Signage must be displayed around a premises wherever there is a risk or hazard that has not been controlled by other means. This can include guiding people to exits and instructions including to keep doors shut. We’ll assess your premises and identify where signage is required.',
    icon: <FaSign className="text-4xl text-red-500" />,
  },
];


const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: index * 0.2 }} 
      viewport={{ once: true }} 
      className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4"
    >
      <div>{service.icon}</div>
      <div>
        <h3 className="text-3xl font-sans">{service.title}</h3>
        <p className="text-gray-500 font-sans text-lg">{service.description}</p>
      </div>
    </motion.div>
  );
};


const ServicesSection = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-center text-5xl font-sans mb-8 text-gray-800 shadow-custom p-2">
        How we can help
      </h2>
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
