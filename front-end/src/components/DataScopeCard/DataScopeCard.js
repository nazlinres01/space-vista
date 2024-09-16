// src/components/DataScopeCard.js
import React from 'react';

const DataScopeCard = ({ title, description, link }) => (
  <div className="bg-white p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
    <h3 className="text-3xl font-bold mb-4">{title}</h3>
    <p>{description}</p>
    <a
      href={link}
      className="mt-4 inline-block text-yellow-500 hover:text-yellow-600"
    >
      Detayları inceleyin
    </a>
  </div>
);

export default DataScopeCard;
