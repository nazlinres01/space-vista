// src/components/DataScopeCard.js
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const DataScopeCard = ({ title, description, link }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between h-full transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
    <div>
      <div className="flex items-center mb-4">
        <InformationCircleIcon className="w-12 h-12 text-blue-500 mr-4" />
        <h3 className="text-2xl font-extrabold">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
    </div>
    <a
      href={link}
      className="text-blue-500 hover:text-blue-700 font-semibold flex items-center mt-auto"
    >
      Detayları inceleyin
      <ChevronRightIcon className="w-5 h-5 ml-2" />
    </a>
  </div>
);

export default DataScopeCard;
