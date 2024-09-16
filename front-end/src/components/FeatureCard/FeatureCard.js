// src/components/FeatureCard.js
import React from 'react';

const FeatureCard = ({ title, description, icon, link }) => (
  <div className="bg-gray-900 text-white p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
    <div className="mb-6">
      <img
        src={`/icons/${icon}.svg`}
        alt={`${title} Icon`}
        className="w-16 h-16 mx-auto"
      />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p>{description}</p>
    <a
      href={link}
      className="mt-4 inline-block text-yellow-500 hover:text-yellow-600"
    >
      Daha fazla bilgi
    </a>
  </div>
);

export default FeatureCard;
