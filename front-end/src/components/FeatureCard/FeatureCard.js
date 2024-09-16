// src/components/FeatureCard.js
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const FeatureCard = ({ title, description, link }) => (
  <div className="bg-gray-900 text-white p-10 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out flex flex-col justify-between h-full">
    <div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
    <a
      href={link}
      className="mt-4 inline-flex items-center text-yellow-500 hover:text-yellow-600"
    >
      Daha fazla bilgi
      <ChevronRightIcon className="w-5 h-5 ml-2" />
    </a>
  </div>
);

export default FeatureCard;
