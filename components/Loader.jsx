import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50">
      <div className="text-center space-y-6">
        <div className="text-4xl sm:text-5xl font-extrabold tracking-wide animate-fadeIn text-gray-200">
          Welcome to Sagar's Portfolio
        </div>
        <div className="w-16 h-16 sm:w-20 sm:h-20 border-8 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <div className="text-lg sm:text-xl font-medium opacity-80 animate-fadeInDelay text-gray-400">
          Loading your experience...
        </div>
      </div>
    </div>
  );
};

export default Loader;
