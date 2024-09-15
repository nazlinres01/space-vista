// components/Loading/Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="border-4 border-t-transparent border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default Loading;
